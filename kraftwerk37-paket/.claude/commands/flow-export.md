# Flow Export

Exportiere und dokumentiere n8n Workflows für FlowEngine37.

## Kontext

FlowEngine37 ist das Nervensystem von KRAFTWERK37. Alle Workflows müssen:
- Exportierbar sein (JSON)
- Dokumentiert sein
- Testbar sein
- Archetyp-aware sein (Timing passt zur DNA)

## Ablauf

### 1. Workflow identifizieren
Frage: Welcher Workflow soll exportiert/dokumentiert werden?

### 2. Workflow-Struktur erfassen
```
Name: [workflow-name]
Trigger: [webhook/schedule/event]
Archetyp-Timing: [ja/nein]
```

### 3. Dokumentation erstellen

Erstelle eine Markdown-Datei:

```markdown
# [Workflow Name]

## Zweck
[Was macht dieser Workflow und WARUM?]

## Trigger
- **Typ:** [Webhook/Schedule/Event]
- **Quelle:** [Organ das triggert]

## Archetyp-Anpassung
[Wie passt sich der Flow an verschiedene Archetypen an?]
- Weise: [Verzögertes, bedachtes Verhalten]
- Held: [Direktes, schnelles Handeln]
- ...

## Nodes
1. [Node 1] → [Beschreibung]
2. [Node 2] → [Beschreibung]
...

## Abhängigkeiten
- [Andere Workflows]
- [Externe Services]
- [Organe]

## Test-Szenario
[Wie kann man diesen Workflow testen?]
```

### 4. Export vorbereiten
```bash
# Workflow als JSON exportieren (n8n CLI oder UI)
# Speichern unter: /workflows/[workflow-name].json
```

### 5. Validierung
- [ ] JSON ist valide
- [ ] Dokumentation vollständig
- [ ] Keine hardcodierten Credentials
- [ ] Archetyp-Variablen statt Magic Numbers

## Output

Liefere:
1. Die Dokumentations-Datei
2. Hinweise für den Export-Prozess
3. Eventuelle Probleme (hardcoded values, fehlende Archetyp-Logik)
