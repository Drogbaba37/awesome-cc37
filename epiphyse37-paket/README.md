# EPIPHYSE37 - Die Zirbeldrüse

> *Das dritte Auge von KRAFTWERK37*

---

## Was ist das?

Epiphyse37 ist der **Meta-Orchestrator** für das KRAFTWERK37 Ökosystem.

Es ist kein Tool. Es ist das **Bewusstsein** das alle Organe verbindet.

```
                    🔮 EPIPHYSE37
                         │
         ┌───────────────┼───────────────┐
         │               │               │
    ┌────┴────┐    ┌────┴────┐    ┌────┴────┐
    │ 💜 Herz │    │ 👁️ Gesicht│    │ ⚡ Nerven │
    │ Matrix  │    │  Forge   │    │ Engine  │
    └────┬────┘    └────┬────┘    └────┬────┘
         │               │               │
         └───────────────┼───────────────┘
                         │
                    Brand-DNA (Das Blut)
```

---

## Struktur

```
epiphyse37-paket/
├── CLAUDE.md                    # Haupt-Instruktionen
├── organs/
│   └── registry.json            # Alle 9 Organe + 12 Archetypen
├── .claude/
│   ├── commands/
│   │   ├── orchestrate.md       # Delegiere an Organe
│   │   ├── dna-load.md          # Lade Brand-DNA
│   │   ├── create-dna.md        # Erstelle DNA (7 Fragen)
│   │   └── organ-status.md      # System-Status
│   └── subagents/
│       ├── brand-matrix.md      # 💜 Identität
│       ├── page-forge.md        # 👁️ Website
│       ├── flow-engine.md       # ⚡ Automation
│       ├── comms-flow.md        # 🌬️ Email
│       └── voice-out.md         # 🗣️ Content
└── README.md
```

---

## Installation

### 1. In dein KRAFTWERK37 Projekt kopieren

```bash
cp epiphyse37-paket/CLAUDE.md /path/to/kraftwerk37/CLAUDE.md
cp -r epiphyse37-paket/.claude/* /path/to/kraftwerk37/.claude/
cp -r epiphyse37-paket/organs /path/to/kraftwerk37/
```

### 2. Organ-Registry anpassen

Editiere `organs/registry.json` für deine spezifischen Pfade.

---

## Nutzung

### Orchestrieren
```
/orchestrate Erstelle eine Landing Page für unseren neuen Service
```
→ Epiphyse analysiert, delegiert an PageForge37 + BrandMatrix37

### DNA laden
```
/dna-load
```
→ Lädt Brand-DNA in den aktiven Kontext

### DNA erstellen
```
/create-dna
```
→ Führt durch die 7 Fragen, generiert Brand-DNA

### Status prüfen
```
/organ-status
```
→ Zeigt Gesundheit aller Organe

---

## Die 9 Organe

| Symbol | Organ | Metapher | Zuständigkeit |
|--------|-------|----------|---------------|
| 💜 | BrandMatrix37 | Herz | Identität, DNA, Archetypen |
| 👁️ | PageForge37 | Gesicht | Website, Sichtbarkeit |
| 🤲 | FormCraft37 | Hände | Formulare, Kontakt |
| ⚡ | FlowEngine37 | Nervensystem | Automation, n8n |
| 🧠 | TrackPulse37 | Bewusstsein | Analytics, Patterns |
| 🌬️ | CommsFlow37 | Lunge | Email, Kommunikation |
| 🗣️ | VoiceOut37 | Stimme | Content, Social |
| 📚 | MemoryVault37 | Gedächtnis | Knowledge Base |
| 🔮 | Epiphyse37 | Zirbeldrüse | KI-Intuition, Orchestration |

---

## Die 12 Archetypen

Jeder Archetyp beeinflusst wie ALLE Organe arbeiten:

| Archetyp | Timing | Kommunikation |
|----------|--------|---------------|
| Der Weise | Bedacht, verzögert | Tiefgründig |
| Der Held | Schnell, direkt | Kraftvoll |
| Der Jedermann | Normal, verlässlich | Bodenständig |
| Der Rebell | Spontan | Provokativ |
| Der Entdecker | Variabel | Inspirierend |
| Der Schöpfer | Kreativ-zyklisch | Visionär |
| Der Herrscher | Pünktlich | Autoritär |
| Der Magier | Mystisch | Geheimnisvoll |
| Der Liebende | Persönlich | Warmherzig |
| Der Narr | Verspielt | Humorvoll |
| Der Betreuer | Aufmerksam | Empathisch |
| Der Unschuldige | Optimistisch | Einfach |

---

## Philosophie-Alignment

| Prinzip | Wie Epiphyse37 es lebt |
|---------|------------------------|
| **WENIGER IST MEHR** | Delegiert präzise, kein Overhead |
| **TRUST BUT VERIFY** | Confidence + Reasoning bei jeder Entscheidung |
| **GDPR BY DESIGN** | Lokale LLMs, keine Cloud-Calls ohne Erlaubnis |
| **EMERGENZ ÜBER PLANUNG** | Lässt Organe selbst entscheiden im Rahmen |

---

## Erweiterung

### Neues Organ hinzufügen

1. In `organs/registry.json` eintragen
2. Subagent-Definition erstellen: `.claude/subagents/[organ].md`
3. In CLAUDE.md referenzieren

### Neuen Archetyp hinzufügen

1. In `organs/registry.json` unter `archetypes` eintragen
2. Timing/Voice-Config in allen Subagents erweitern

---

*Mundus Sumus - Wir sind die Welt die wir bauen.*
