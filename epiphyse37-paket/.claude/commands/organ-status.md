# /organ-status

> Zeige den Status aller Organe im System.

## Output

```
## 🔮 KRAFTWERK37 Organ-Status

**DNA-Status:** [Geladen/Nicht geladen]
**Aktiver Archetyp:** [Name] (Confidence: X.XX)

---

### Organe

| Status | Organ | Letzte Aktivität | Gesundheit |
|--------|-------|------------------|------------|
| 💜 | BrandMatrix37 | [Zeit] | 🟢 |
| 👁️ | PageForge37 | [Zeit] | 🟢 |
| 🤲 | FormCraft37 | [Zeit] | 🟡 |
| ⚡ | FlowEngine37 | [Zeit] | 🟢 |
| 🧠 | TrackPulse37 | [Zeit] | 🟢 |
| 🌬️ | CommsFlow37 | [Zeit] | 🟢 |
| 🗣️ | VoiceOut37 | [Zeit] | 🔴 |
| 📚 | MemoryVault37 | [Zeit] | 🟢 |
| 🔮 | Epiphyse37 | jetzt | 🟢 |

---

### Gesundheitsindikatoren

🟢 **Gesund:** Organ funktioniert, DNA fließt
🟡 **Warnung:** Organ aktiv, aber Attention needed
🔴 **Kritisch:** Organ braucht Intervention

---

### Letzte Orchestrations

1. [Zeit] - [Anfrage] → [Organ] (Confidence: X.XX)
2. [Zeit] - [Anfrage] → [Organ] (Confidence: X.XX)
3. [Zeit] - [Anfrage] → [Organ] (Confidence: X.XX)

---

### DNA-Flow

```
BrandMatrix37 ──DNA──→ PageForge37
                   └──→ FormCraft37
                   └──→ CommsFlow37
                   └──→ VoiceOut37

FlowEngine37 ──Events──→ TrackPulse37
                     └──→ MemoryVault37

Epiphyse37 ──Orchestrates──→ [Alle]
```
```

## Prüfungen

### DNA-Gesundheit
- [ ] DNA vorhanden?
- [ ] DNA nicht älter als 6 Monate?
- [ ] Archetyp-Confidence > 0.7?

### Organ-Gesundheit
- [ ] Subagent-Definition vorhanden?
- [ ] Letzte erfolgreiche Aktion?
- [ ] Keine Fehler im Log?

### Flow-Gesundheit
- [ ] Events werden emittiert?
- [ ] Workflows sind aktiv?
- [ ] Keine Deadlocks?

## Bei Problemen

```
⚠️ Organ [Name] zeigt Probleme:

Symptom: [Beschreibung]
Mögliche Ursache: [Vermutung]
Empfohlene Aktion: [Konkreter Schritt]
```
