#!/usr/bin/env node
// Controleert een vertaalbestand tegen het Nederlandse bronbestand. Geen afhankelijkheden, enkel node.
//   node controleer.mjs <vertaling.json> [bron/nl.json]      → exitcode 1 bij fouten; waarschuwingen blokkeren niet
import fs from 'fs'; import path from 'path';
const [,, f, bronPad] = process.argv;
if (!f) { console.log('gebruik: node controleer.mjs werk/it.json'); process.exit(2); }
const code = path.basename(f, '.json');
const lees = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const nl = lees(bronPad || new URL('./bron/nl.json', import.meta.url).pathname), v = lees(f);
const fouten = [], waarsch = [];
const ph = s => (s.match(/\{[A-Za-z]\w*\}/g) || []).sort().join(' ');
const tags = s => (s.match(/<\/?[A-Za-z][A-Za-z0-9]*/g) || []).join(' ');
const emo = s => ([...s.matchAll(/\p{Extended_Pictographic}/gu)].map(m => m[0]).sort().join(''));
const rand = s => [s.match(/^\s*/)[0], s.match(/\s*$/)[0]].join('|');
const CJK = /[぀-ヿ㐀-鿿]/;
let n = 0, gelijk = 0, lang = 0, kort = 0, kortGelijk = 0;
const toets = (lijst, k, a, b) => {
  const p = `${lijst}.${k}`; n++;
  if (typeof a === 'object') {
    if (typeof b !== 'object' || b === null) return fouten.push(`${p}: moet een object blijven`);
    const ka = Object.keys(a).join('¦'), kb = Object.keys(b).join('¦');
    if (ka !== kb) return fouten.push(`${p}: de SLEUTELS binnen dit object mogen niet vertaald of verplaatst worden (nl: ${ka} ≠ ${kb})`);
    for (const s of Object.keys(a)) toets(p, s, a[s], b[s]); return;
  }
  if (typeof b !== 'string') return fouten.push(`${p}: moet tekst zijn`);
  if (lijst === 'spreek') { if (/\d/.test(b)) fouten.push(`${p}: cijfers in een spreektekst — schrijf alle getallen voluit (de tekst wordt ingesproken)`); if (/[<>{}*#`_|]/.test(b)) fouten.push(`${p}: opmaak- of programmatekens in een spreektekst`); if (/\b(bijv|enz|etc|bv|e\.g|i\.e|vs)\.?\b/i.test(b)) waarsch.push(`${p}: afkorting in een spreektekst — schrijf uit`); }
  if (b.trim() === '') return fouten.push(`${p}: leeg`);
  if (ph(a) !== ph(b)) fouten.push(`${p}: plaatsaanduidingen verschillen: nl [${ph(a)}] ≠ ${code} [${ph(b)}]  — {n}, {e1} … onvertaald laten`);
  if (tags(a) !== tags(b)) fouten.push(`${p}: HTML-tags verschillen: nl [${tags(a)}] ≠ ${code} [${tags(b)}]`);
  if (emo(a) !== emo(b)) waarsch.push(`${p}: emoji/symbolen verschillen`);
  if (rand(a) !== rand(b)) waarsch.push(`${p}: spaties/nieuwe regel aan begin of einde verschillen`);
  if (a.length <= 25 && /[A-Za-zÀ-ÿ]{4,}/.test(a)) { kort++; if (a === b) kortGelijk++; }
  if (a.length > 25 && /[A-Za-zÀ-ÿ]{4,}/.test(a.replace(/<[^>]*>/g, ''))) lang++;
  if (a === b && /[A-Za-zÀ-ÿ]{4,}/.test(a.replace(/<[^>]*>/g, '')) && a.length > 25) { gelijk++; waarsch.push(`${p}: identiek aan het Nederlands — niet vertaald?`); }
  if ((code === 'zh' || code === 'ja') && a.length > 14 && !CJK.test(b)) waarsch.push(`${p}: geen ${code}-tekens`);
  const r = b.length / Math.max(1, a.length); if (a.length > 40 && (r > 3 || r < 0.2)) waarsch.push(`${p}: lengte wijkt sterk af (×${r.toFixed(1)})`);
};
for (const lijst of Object.keys(nl).filter(k => !k.startsWith('_'))) {
  if (!v[lijst]) { fouten.push(`lijst '${lijst}' ontbreekt`); continue; }
  for (const k of Object.keys(nl[lijst])) { if (!(k in v[lijst])) fouten.push(`${lijst}.${k}: ontbreekt`); else toets(lijst, k, nl[lijst][k], v[lijst][k]); }
  for (const k of Object.keys(v[lijst])) if (!(k in nl[lijst])) fouten.push(`${lijst}.${k}: bestaat niet in de bron (sleutel vertaald of verzonnen?)`);
}
if (code !== 'nl' && kort > 50 && kortGelijk / kort > 0.6) fouten.push(`${kortGelijk} van ${kort} korte begrippen zijn nog identiek aan het Nederlands (${Math.round(100*kortGelijk/kort)}%) — de vertaling is niet af`);
if (code !== 'nl' && lang > 20 && gelijk / lang > 0.2) fouten.push(`${gelijk} van ${lang} lange zinnen zijn nog identiek aan het Nederlands (${Math.round(100*gelijk/lang)}%) — de vertaling is niet af`);
const tot = (o) => Object.values(o).reduce((s, x) => s + (typeof x === 'object' ? tot(x) : 1), 0);
console.log(`${code}: ${n} items gecontroleerd — ${fouten.length} fouten, ${waarsch.length} waarschuwingen`);
fouten.slice(0, 40).forEach(x => console.log('  FOUT  ', x)); if (fouten.length > 40) console.log(`  … nog ${fouten.length - 40} fouten`);
waarsch.slice(0, 15).forEach(x => console.log('  let op', x)); if (waarsch.length > 15) console.log(`  … nog ${waarsch.length - 15} waarschuwingen`);
process.exit(fouten.length ? 1 : 0);
