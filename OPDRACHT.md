# Opdracht 3: de werkmodus van de HDapp vertalen + de 9 spreekteksten van de rondleiding

Twee soorten tekst, in **8 talen: es, en, it, fr, pt, de, zh (vereenvoudigd), ja**. Bron: het Nederlands (`bron/nl.json`).
Lees eerst `context.json` (wat elk experiment is) en `woordenlijst.json` (bindende vaktermen: type, autoriteit, centra, poort, kanaal, kruis…).

## Wat je levert
Per taal één bestand `klaar/<code>.json`, met precies dezelfde structuur en sleutels als `werk/<code>.json`:
`{ "werk": { "<sleutel>": "tekst", … }, "spreek": { "<id>": "tekst", … } }`. In `werk/` staat het Nederlands als startpunt: je vervangt de **waarden**, nooit de sleutels.

## A · `werk` — 656 interface-zinnen (knoppen, uitleg, meldingen van zeven experimenten)
Het sleutel-voorvoegsel zegt waar de zin staat: `w_verbinding_…`, `w_laser_…`, `w_bib_…`, `w_factoren_…`, `w_familie_…`, `w_astro_…`, `w_mandala_…` (zie `context.json`).
1. **Plaatshouders** `{e1}`, `{e2}`… blijven **letterlijk** staan, evenveel keer; je mag ze in de zin verplaatsen. Ze worden door het programma ingevuld (een naam, getal, poortnummer, stukje opmaak).
2. **HTML-entiteiten** (`&nbsp;`, `&amp;`, `&middot;`), emoji en symbolen (✓ ✗ ⚠ → ◈ ⊕) blijven staan. Spaties of leestekens aan begin/einde van een waarde blijven.
3. **Woordenlijst is bindend** voor Human Design-begrippen; gebruik dezelfde vertaling in elke zin. Productnamen niet vertalen: HDapp, Human Design, LightBurn, MDF, Bodygraph, Astro-Databank, Gauquelin, Rodden, Mandala.
4. **Kort en consistent**: dit zijn knoplabels, tabelkoppen en korte uitleg. Een knop mag in de vertaling niet veel langer worden dan het Nederlands.
5. **Losse zinsdelen**: sommige waarden zijn een stuk van een zin dat het programma aan andere stukken plakt (bv. `alleen via {e1}`, `heeft het volledige kanaal,`). Vertaal zo dat het deel bruikbaar blijft op die plek; verander de volgorde van de stukken niet.
6. **Meervoud**: zie `context.json` → `meervoud`. Schrijf neutraal ("channel(s)") of herformuleer.
7. **Toon**: helder, nuchter, vakkundig; het publiek is een begeleider die met mensen werkt. De Laser-zinnen zijn werkinstructies voor een machine: praktisch en exact, geen mooie taal.

## B · `spreek` — 9 spreekteksten van de rondleiding "Je kaart lezen" (±50 woorden elk)
Deze teksten worden **hardop ingesproken** (stem: warm, rustig, verteller). Ze horen bij de stappen: het bord · negen centra · gedefinieerd en open · kanalen · poorten · definitie · hangende poorten · variabelen · slot.
1. **Getallen voluit**, in woorden — nooit cijfers (`controleer.mjs` keurt cijfers af). Ook "88 dagen" wordt "achtentachtig dagen", "64" wordt "vierenzestig". Schrijf ze zoals je ze zegt in die taal.
2. **Spreektaal, niet schrijftaal**: korte zinnen, natuurlijk ritme, aangesproken in de je-vorm (du / tu / you / 你 / あなた of weglaten — kies wat in die taal warm en natuurlijk klinkt).
3. **Geen opmaak, geen afkortingen** (geen bijv., enz., etc.), geen haakjes en geen opsommingstekens. Eén alinea per tekst, zoals het Nederlands.
4. **Geen eigennamen** van personen; de teksten zijn algemeen en gelden voor iedereen.
5. Gebruik de **woordenlijst** voor centra, poort, kanaal, type, strategie; leg niets nieuws uit en laat niets weg.
6. Lengte: ongeveer gelijk aan het Nederlands (± 30%).
7. **zh/ja**: schrijf natuurlijk Chinees (vereenvoudigd) en Japans in beleefde vorm (です/ます); getallen als woorden/hanzi/kanji (二, 三十六, …), niet met cijfers.

## Werkwijze
Eén sub-agent per taal, parallel (8). Daarna een tweede onafhankelijke lezer per taal, die alleen betekenisfouten en onnatuurlijke zinnen herstelt (bij de spreekteksten ook: leest het goed hardop?). `node controleer.mjs klaar/<code>.json` moet **0 fouten** geven voor alle acht. Lever ook een korte lijst twijfelgevallen. Raak `bron/` en `werk/` niet aan.
