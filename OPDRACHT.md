# Opdracht 2: de begrippen van de HDapp-website vertalen (laag 2A — profielgegevens)

Vervolg op de website-vertaling (pakket 1 was de interface). Nu de **begrippen** die uit de profielgegevens komen en nog Nederlands blijven in een vertaalde app:
de variabelen (determinatie, omgeving, motivatie, perspectief, cognitie), signatuur en niet-zelf, oriëntaties, lijnen, planeten, **64 poortnamen, 36 kanaalnamen en 192 kruisnamen**.
Het zijn **~400 korte begrippen** (geen lopende teksten) in **8 talen: es, en, it, fr, pt, de, zh (vereenvoudigd), ja**.

## Wat je levert
`klaar/<code>.json` per taal (es en it fr pt de zh ja en), zelfde structuur als `werk/<code>.json`: `{ "begrippen": { "sleutel": "vertaling", … } }`.
In `werk/` staat telkens het Nederlandse begrip als startpunt (en bij es is het Spaans al ingevuld waar dat bestond, 113 stuks — controleer die, pas aan waar nodig, vul de rest aan).

## Regels (`node controleer.mjs klaar/<code>.json` toetst ze)
1. **Sleutels nooit aanraken** (alles vóór de `:`; de sleutel `kruis.Juxtapositie|1` is een zoekcode).
2. **Lees `context.json`** vóór je een categorie vertaalt — bij sommige begrippen (PHS-variabelen, niet-zelf, oriëntatie, lijnen) is de betekenis niet te raden uit het woord.
3. **Woordenlijst is bindend** (`woordenlijst.json`) voor: types, strategie, autoriteit, definitie, centra, poort/kanaal, "kruis" — ook binnen kruisnamen (bv. "Kruis van …", "Rechterhoek").
4. **Kort en consistent**: dit zijn labels in een kaartweergave. Eén woord of korte frase; dezelfde Nederlandse stam krijgt in dezelfde taal dezelfde vertaling (bv. "Persoonlijkheid" overal gelijk).
5. **Kruisnamen**: poëtische eigennamen (Slapende Feniks, Het Onverwachte, Beperking). Vertaal de betekenis natuurlijk en elegant, niet woord-voor-woord; gebruik waar bestaand de gangbare HD-benaming in die taal (Engels: officieel Jovian Archive/Ra-namen — "Sleeping Phoenix", "Limitation"…). Hoek-type (Rechterhoek/Linkerhoek/Juxtapositie) volgt de woordenlijst.
6. **Poortnamen en kanaalnamen**: korte naamwoorden/frasen (`es_voorbeeld.json` toont de Spaanse); geen uitleg erbij.
7. **zh/ja**: gangbare HD-begrippen waar ze bestaan (de woordenlijst geeft voor centra/types de vorm); anders korte natuurlijke termen.

## Werkwijze
Eén sub-agent per taal, parallel (8). Daarna een tweede onafhankelijke lezer per taal die enkel betekenisfouten en inconsistenties herstelt (met speciale aandacht voor de kruisnamen en de 12 PHS-bijwoorden).
Lever bovendien per taal een korte lijst twijfelgevallen (sleutel + waarom).

## Klaar als
`node controleer.mjs klaar/<code>.json` zegt **0 fouten** voor alle acht.
