# Twijfelgevallen pakket 3 (werkmodus + 9 spreekteksten)

`controleer.mjs`: 0 fouten voor es, en, it, fr, pt, de, zh, ja; sleutels = `werk/<code>.json` (656 + 9). De waarschuwingen (12–28 per taal) zijn code/CSS/SVG-fragmenten en merknamen die bewust identiek blijven. Eén vertaalronde + één tweede lezer per taal.

**Moet in de code gecontroleerd worden (geldt voor alle talen)**
- `w_laser_papieren_proefmodel_op_war`: `{e2}` staat na "A4-blad" en is in het Nederlands het meervoudsachtervoegsel "en". Levert de code dat nog in, dan ontstaat "hojaen", "foglien", "A4en", enz. Laat `{e2}` voor niet-Nederlandse talen leeg of herschrijf de zin.
- Meervoud in vaste zinnen: `w_laser_de_bak_heeft_opening` ("{e1} opening"), `w_laser_en_losse_eilandjes`, `w_laser_de_zwarte_bewuste_strip_li` ("{e1} kanalen"), `w_verbinding_geen_kanalen`: tellen bij 1 niet correct (ook in het Nederlands).
- Losse zinsdelen waarvan de samenstelling niet zichtbaar is: `w_laser_bij`, `w_laser_van_poort`, `w_laser_een`, `w_laser_met`, `w_laser_je_zei_een`, `w_laser_vanaf`, `w_laser_gemeten_op_een_machine_van`, `w_laser_kan_een_svg_niet_meegeven_`, `w_laser_wil_je_een_andere_maat_of_`, `w_verbinding_heeft_alleen_poort`, `w_verbinding_heeft_het_volledige_kanaal`, `w_familie_is_*_van`, `w_familie_kind_van`. Controleer in de UI woordvolgorde (vooral ja: naam vóór "の親"), lidwoord en spaties.
- Bronfout: `w_laser_deze_beelden_zijn_door_een` + `w_laser_van_hout_kleur_en_licht_ze`: tussen "Ze geven een" en "van hout" ontbreekt een woord (waarschijnlijk "indruk"); is in de vertaling niet op te lossen.
- `w_familie_van_s_actieve_poorten_zijn`: volgorde `{e1}%`/`{e2}` naam/`{e3}` aantal aangenomen zoals in het Nederlands.
- `w_mandala_klik_op_ra_jux_of_la`: "RA, Jux, LA" moet overeenkomen met de knoplabels van de app per taal (es AD/Yux/AI? de Rechtswinkel/Linkswinkel).
- Spaanstalige bronlabels: `w_mandala_iniciacion`, `_civilizacion`, `_dualidad`, `_mutacion` zijn in en/de/… vertaald (Initiation, Zivilisation…); `w_verbinding_sinastria_tekstanalyse_v22` bevat interne tekst ("v22j, decisión del manager A4") die meevertaald is.

**Terminologie buiten de woordenlijst (eigen keuzes)**
- Design/Personality: in Laser-sleutels Engels gelaten; elders vertaald (es Diseño/Personalidad, de Persönlichkeit…). Cruz de Encarnación, Rechter-/Linkerhoek, Juxtapositie, Kwartier, Atoom, hangende poort, "laag"/"laan": per taal consistent maar niet door woordenlijst vastgelegd. de: "Lage" voor lagen (LightBurn-Duits: "Ebenen"); `w_verbinding_gezelschap` "Gesellschaft".
- `w_bib_self_projected_g_keel`: opgevat als G-centrum → keel.
- `w_laser_gedefinieerd` zh 已固定 (woordenlijst: gedefinieerd = vast); 已定义 kan duidelijker zijn voor een filter.
- `w_laser_soort`: en "Kind" (alt. Type).

**Per taal**
- es: Design/Diseño inconsistent met Laser-sleutels. fr: "le laser" (mannelijk) doorgevoerd. pt: Europees Portugees (pre-1990 spelling in de woordenlijst, bv. "activo"); "condiz com" klinkt mogelijk Braziliaans. it: "scacchiera" voor "bord" (spreek.bord) — controleer bedoeling. de: Einfach/Zweifach/Dreifach/Vierfach volgt woordenlijst i.p.v. "binär". ja: veel losse stukken (は/の/ご指定：) hangen af van de volgorde in de code.

**Spreekteksten**: getallen voluit, geen cijfers, geslacht-neutraal waar mogelijk (it/es aangepast). en/ja/zh: "vast" = defined/固定 per woordenlijst. Alle negen lezen goed hardop volgens de tweede lezers.
