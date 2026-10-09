# Twijfelgevallen

**Alle talen**
- `u_nl`, `u_nl_nl`: als taal-/localecode vertaald (bv. en / en-US). Controleer in de code of ze zo gebruikt worden; moeten ze letterlijk `nl` / `nl-NL` blijven, zet ze terug.
- `u_plaatst`, `u_of`, `u_bestanden_komen_automatisch_…`, `u_plaatst_of_zodra_je_zelf_een`, `u_atomen_verschijnen_hier_zodr`: zinsdelen die de code aan elkaar plakt. Volgorde is per taal aangepast; bekijk de samengestelde zin in de UI. In it/fr/pt is `u_plaatst` een vrije invulling (" (cartelle).", " par HD-advanced ou l'audio-app.", " (pastas).") omdat de controle een voorspatie eist.
- "Design" en "Personality" staan niet in de woordenlijst: "Design" overal onvertaald, "Personality" vertaald (Persönlichkeit, Personnalité, Personalità, Personalidade, 个性, パーソナリティ).
- Termen buiten de woordenlijst zijn eigen keuze: Signatuur, Niet-Zelf, Determinatie, Perspectief, Definitie, Variabele, Incarnatiekruis, de zes lijnnamen (Onderzoeker, Kluizenaar, Martelaar, Opportunist, Ketter, Rolmodel).
- `u_omgeving` / `exp_omgeving_*` (kring rond Koen) bewust anders vertaald dan `omgeving_lbl` (HD-variabele).
- `exp_omgeving_desc` ("Koens entorno") en `exp_bib_desc` ("NL/ES-status") bevatten Spaanse/taalcode-resten uit de bron.
- `u_laatst` (fr dernière, it ultima) veronderstelt vrouwelijk lidwoord/woord.
- `pagina.van` ("x van y"): sur (fr), "/" (zh, ja); controleer gebruik.
- "Lezing" = reading: en Reading, it Lettura, fr Lecture, pt Leitura, de Lesung, zh/ja リーディング-achtig; fr/de zouden "Lecture"/"Lesung" kunnen lezen als lezing/lecture.
- "Dag {naam}" komt in `bron/nl.json` niet voor.

**en**: `u_zijn_haar_kruis` "his/her cross"; "Known figures" vs "Famous people" (`exp_bekenden_lbl`); `u_plaatst` waarschuwing is opzettelijk.
**it**: "Sacrale" als centrum leest vreemd (woordenlijst); Collega voor "Verbinden".
**fr**: woordenlijst "Sacral" (geen Franse vorm) overgenomen; "GM" voor MG.
**pt**: Portugees van Portugal; "Baço", "Ego (Coração)".
**de**: "Bestimmung" (Determinatie), "Wegweiser" (Gids), "Sakrale" naast "Sakral"; "Kein … auf {taal}" klopt alleen met taalnaam.
**zh**: Persoon n = 人员; 合盘 voor composite/synastrie; percentages/dagen voluit in lopende tekst.
**ja**: さん achter naam-plaatsaanduiding; waarschuwing bij "Human Design:" is opzettelijk (eigennaam); chinese/katakana-keuzes voor Signatuur e.d.
