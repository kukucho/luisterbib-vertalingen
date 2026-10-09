# Overdracht: nakijken van de HDapp-vertalingen

Voor de Claude Code die dit overneemt. De vertaling is af; jouw taak is **nakijken wat er nog mis kan zijn en dat doorgeven aan de CC die de vertalingen in de HDapp-code zet** (of aan Koen).

## Stand
- `klaar/{en,it,fr,pt,de,zh,ja}.json`: 372 items elk, `node controleer.mjs klaar/<code>.json` = 0 fouten.
- Eén vertaalronde door een agent per taal + één onafhankelijke tweede lezer per taal. Niemand heeft de UI gezien of de code gelezen; alles is gedaan op basis van `bron/nl.json`.
- Twijfels van de vertalers: `twijfelgevallen.md`. Hulpmiddel: `node nakijk.mjs [sleutel…]` toont NL + alle talen naast elkaar (zonder argumenten: de risicosleutels).
- Raak `bron/` en `werk/` niet aan. Wijzig `klaar/` alleen voor aantoonbare fouten en draai daarna `controleer.mjs`.

## Wat je moet nakijken (volgorde van risico)
1. **Aaneengeplakte zinnen** (hoogste risico, vereist de HDapp-code): `u_bestanden_komen_automatisch_…`, `u_of`, `u_plaatst`, `u_plaatst_of_zodra_je_zelf_een`, `u_atomen_verschijnen_hier_zodr`. Zoek in de code hoe ze samengevoegd worden (volgorde, wat er tussen komt, spaties). Controleer dat elke taal dan een grammaticaal zin geeft. Bekend: it/fr/pt hebben een verzonnen invulling van `u_plaatst` (" (cartelle).", " par HD-advanced ou l'audio-app.", " (pastas)."), ja heeft " 。" (spatie vóór punt), en heeft ".".
2. **`u_nl`, `u_nl_nl`** en andere codes: zoek in de code of ze taal-/localecodes zijn (dan klopt de vertaling) of herkenningswoorden (dan moeten ze `nl`/`nl-NL` blijven). Idem `pagina.van` ("x van y": zh/ja zijn "/", fr is "sur"), `u_laatst` (fr "dernière", it "ultima": geslacht hangt van het volgende woord af) en `{taal}` in `geen_bib_in_taal` / `geen_audio_in_taal` (de: "Kein … auf {taal}" klopt alleen met een taalnaam).
3. **Sleutels als herkenningswoorden**: de 5 object-items (types, "Wachten op respons", "1"…) — de sleutels zijn onaangeroerd (controleer.mjs toetst dat), maar test in de app dat elke taal ze nog vindt.
4. **Lengte in de UI**: knoppen en labels zijn kort gehouden, maar de, fr en pt zijn langer. Kijk of niets afbreekt (`btn.*`, tabbladen, menulabels).
5. **Terminologie die niet in `woordenlijst.json` staat** (eigen keuze van de vertalers): Design/Personality (Design onvertaald, Personality wel), Signatuur, Niet-Zelf, Determinatie, Perspectief, Definitie, Variabele, Incarnatiekruis, de zes lijnnamen, Gids (de "Wegweiser"), Omgeving als kring rond Koen (u_omgeving, exp_omgeving_*) versus HD-variabele (omgeving_lbl). Woordenlijst-lacunes: voeg ze toe aan `woordenlijst.json` ALS Koen het goedkeurt, zodat latere rondes consistent blijven.
6. **Bronrestanten**: "Koens entorno" (exp_omgeving_desc) en "NL/ES-status" (exp_bib_desc) komen uit de Nederlandse bron zelf; beslis of de bron aangepast moet worden. De bron heeft ook een typefout "Geboortgegevens".
7. **Per taal een native-achtige steekproef** van ±30 items met veel lopende tekst (`u_generator_*`, `u_wachten_op_respons_*`, `u_1_onderzoeker_*`, `exp_*_desc`): leest het als een mens die dit schrijft? Let op valse vrienden: Lezing = reading (fr "Lecture", de "Lesung" zijn de gekozen termen; twijfel), Poort = gate, Kanaal = channel, "Dag {naam}" komt niet voor in de bron.
8. **Getallen**: zh heeft in lopende tekst "百分之一"/"二十八天"; het Engels heeft "21,140", zh/ja "21140" in plaats van "21.140". Dit zijn bewuste keuzes.

## Terugmelden
Schrijf je bevindingen in `NAKIJK_RESULTAAT.md` (per punt hierboven: ok / probleem + sleutel + taal + voorstel). Pas `klaar/` alleen aan voor duidelijke fouten en vermeld elke wijziging. Commit en push naar `hdapp-vertaling`.
