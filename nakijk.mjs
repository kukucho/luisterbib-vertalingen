// Gebruik: node nakijk.mjs [sleutel ...]   (zonder argumenten: de risicosleutels uit OVERDRACHT.md)
// Toont per sleutel het Nederlands en alle zeven vertalingen naast elkaar.
import { readFileSync } from 'fs';
const talen = ['en','it','fr','pt','de','zh','ja'];
const nl = JSON.parse(readFileSync('bron/nl.json','utf8'));
const kl = Object.fromEntries(talen.map(t => [t, JSON.parse(readFileSync(`klaar/${t}.json`,'utf8'))]));
const standaard = ['u_nl','u_nl_nl','u_bestanden_komen_automatisch_','u_of','u_plaatst','u_plaatst_of_zodra_je_zelf_een',
  'u_atomen_verschijnen_hier_zodr','u_laatst','van','u_omgeving','exp_omgeving_lbl','omgeving_lbl','exp_omgeving_desc',
  'exp_bib_desc','u_dit_drieluik_toont_alleen_','u_persoonlijkheid','persoonlijkheid_lbl','determinatie_lbl',
  'u_lezing','u_lezingen','exp_factoren_desc','u_zijn_haar_kruis','u_1_onderzoeker_heeft_fundam'];
const sleutels = process.argv.length > 2 ? process.argv.slice(2) : standaard;
for (const s of sleutels) {
  for (const deel of ['pagina','app']) {
    if (!(s in (nl[deel]||{}))) continue;
    console.log(`\n== ${deel}.${s}`);
    console.log('nl  ', JSON.stringify(nl[deel][s]));
    for (const t of talen) console.log(t.padEnd(4), JSON.stringify(kl[t][deel][s]));
  }
}
