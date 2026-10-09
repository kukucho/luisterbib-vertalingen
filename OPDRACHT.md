# Opdracht: de HDapp-website vertalen (Nederlands → 7 talen)

Je krijgt de tekst van een app voor **Human Design** (een spirituele zelfkennis-methode: types, centra, poorten,
kanalen, autoriteit). Een spiritueel begeleider gebruikt ze met cliënten. Ze moet in **7 talen** beschikbaar worden,
dezelfde talen als de audio-lezingen: **en, it, fr, pt, de, zh (vereenvoudigd), ja**.

## Wat je levert
Voor elke taal één bestand `klaar/<code>.json` (code = en, it, fr, pt, de, zh, ja), met **precies dezelfde structuur
en sleutels** als `werk/<code>.json`. Daar staat de Nederlandse tekst in als startpunt: je vervangt de **waarden**.

```
{ "pagina": { "sleutel": "tekst", … },      26 zinnen (titelbalk, knoppen)
  "app":    { "sleutel": "tekst", … } }     ±319 items, waarvan 5 objecten (zie onder)
```
(`_uitleg` bovenaan mag blijven of weg.) Bronnen: `bron/nl.json` (de waarheid), `bron/es_voorbeeld.json` (bestaande
Spaanse vertaling, enkel als hulp voor de bedoeling — niet navertalen, 2 sleutels ontbreken daar), `woordenlijst.json`,
`plaatsaanduidingen.json`.

## Regels (hard — `controleer.mjs` toetst ze)
1. **Sleutels nooit aanraken.** Ook niet de sleutels *binnen* de 5 object-items (bv. `"Generator"`, `"Wachten op respons"`,
   `"1"`): dat zijn herkenningswoorden die de code opzoekt. Vertaal alleen wat rechts van de `:` staat.
2. **Plaatsaanduidingen** zoals `{n}`, `{e1}`, `{e2}`, `{a}`, `{datum}` blijven **letterlijk** staan, evenveel keer.
   Je mag ze in de zin verplaatsen als je taal dat vraagt. Wat ze betekenen: `plaatsaanduidingen.json`.
3. **HTML blijft heel**: `<p>`, `<b>`, `<span style="…">` enz. Vertaal de tekst ertussen; laat tags en attributen staan.
4. **Emoji en symbolen** (🔍 📖 ✎ ◈ ⊕ ✦ ← →) blijven. Spaties/regeleinden aan begin en einde van een waarde ook.
5. **Woordenlijst is bindend**: de vaste Human Design-begrippen (types, centra, autoriteiten, strategie, "poort",
   "kanaal"…) staan in `woordenlijst.json` per taal — gebruik die vormen **exact**, ook in lopende zinnen.
6. **Niet vertalen** (eigennamen/producten): Human Design, HDapp, Bodygraph, Jovian Archive, Ra Uru Hu, Astro-Databank,
   Gauquelin, Rodden, mayanmechanics, Mandala, Penta, LightBurn, Gene Keys, Design / Personality waar de woordenlijst dat zegt.
7. **Meervoud/enkelvoud** staat in aparte sleutels (`…_1` / `…_n`): vertaal beide natuurlijk in jouw taal.
   Zet nooit zelf `(s)` of `(en)` achter een woord om beide te dekken als de taal twee sleutels heeft.

## Toon
Warm, direct, rustig; geen jargon dat in het Nederlands ook niet staat. "je/jij" in het Nederlands = de informele,
persoonlijke aanspreekvorm: **du** (de), **tu** (fr, it, pt), **you** (en), 你 (zh), あなた of weglaten + です/ます-stijl (ja).
Knoppen en labels kort houden (de interface heeft weinig ruimte): vertaal een knop niet langer dan nodig.
Let op valse vrienden in dit domein: **"Lezing"** = *reading* (een lezing van iemands kaart), niet *lecture*;
**"Poort"** = *gate*; **"Kanaal"** = *channel*; **"Verbinden/Verbinding"** = relatie tussen twee kaarten, niet "connect" als techniek;
**"Dag {naam}"** is een *begroeting*, niet het woord "dag" (day).

## Werkwijze (aanbevolen)
- Zeven talen = zeven onafhankelijke taken: **laat per taal één sub-agent werken, parallel.** Elke agent: vertaal
  `werk/<code>.json` → `klaar/<code>.json`, draai `node controleer.mjs klaar/<code>.json`, herstel alle FOUTEN, lees de
  waarschuwingen (zinnen die per ongeluk Nederlands bleven moeten vertaald; opzettelijk gelijke woorden mogen blijven).
- Daarna **een tweede, onafhankelijke lezer per taal** die bij elk item de bedoeling van het Nederlands naast de vertaling
  legt en alleen werkelijke betekenisfouten/onnatuurlijke zinnen herstelt (geen smaak-herschrijvingen). Een tweede lezer
  vond eerder bij een andere vertaalronde dat "Dag {naam}" in 20 talen als "dag" was vertaald.
- Werk niet in andere bestanden. Raak `bron/` en `werk/` niet aan.

## Klaar als
`node controleer.mjs klaar/<code>.json` zegt **0 fouten** voor alle zeven, en je geeft een korte lijst van twijfelgevallen
(per taal: sleutel + wat je twijfelde) mee. Meer niet.
