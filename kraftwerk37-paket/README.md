# KRAFTWERK37 Claude Code Paket

> Maßgeschneiderte Commands und Hooks für die KRAFTWERK37-Philosophie.

---

## Was ist drin?

### Slash Commands

| Command | Zweck |
|---------|-------|
| `/organ-review` | Prüft ob Code zur Organ-Philosophie passt |
| `/commit` | KRAFTWERK37-konforme Commits mit Organ-Tags |
| `/dna-check` | Prüft Brand-DNA Konsistenz im Code |
| `/flow-export` | n8n Workflow-Dokumentation für FlowEngine37 |
| `/weniger` | Radikale Vereinfachung nach "Weniger ist Mehr" |

### Hooks

| Hook | Typ | Zweck |
|------|-----|-------|
| `typecheck-post-edit.js` | PostToolUse | TypeScript Fehler + `any` Warnung |
| `gdpr-guard.js` | PreToolUse | Blockiert Cloud LLM APIs |

---

## Installation

### 1. Commands kopieren

```bash
# In deinem KRAFTWERK37 Projekt
cp -r kraftwerk37-paket/.claude/commands/* .claude/commands/
```

### 2. Hooks kopieren

```bash
cp -r kraftwerk37-paket/.claude/hooks/* .claude/hooks/
chmod +x .claude/hooks/*.js
```

### 3. Settings mergen

Füge folgendes zu deiner `.claude/settings.json` hinzu:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": { "tool": ["Edit", "Write"] },
        "command": "node $CLAUDE_PROJECT_DIR/.claude/hooks/typecheck-post-edit.js"
      }
    ],
    "PreToolUse": [
      {
        "matcher": { "tool": "Bash" },
        "command": "node $CLAUDE_PROJECT_DIR/.claude/hooks/gdpr-guard.js"
      }
    ]
  }
}
```

---

## Nutzung

```bash
# Code-Review gegen Organ-Philosophie
/organ-review

# Commit mit Organ-Tags
/commit

# Brand-DNA Konsistenz prüfen
/dna-check

# n8n Workflow dokumentieren
/flow-export

# Radikal vereinfachen
/weniger
```

---

## Philosophie-Alignment

Dieses Paket ist designed für:

| Prinzip | Umsetzung |
|---------|-----------|
| **WENIGER IST MEHR** | `/weniger` Command, minimale Hooks |
| **TRUST BUT VERIFY** | TypeCheck Hook mit Feedback |
| **GDPR BY DESIGN** | GDPR Guard blockiert Cloud APIs |
| **EMERGENZ ÜBER PLANUNG** | Commands sind Werkzeuge, keine Vorschriften |

---

## Anpassung

Die Commands sind Markdown-Templates. Du kannst sie jederzeit anpassen:

```bash
# Öffne und editiere
vim .claude/commands/organ-review.md
```

---

*Mundus Sumus*
