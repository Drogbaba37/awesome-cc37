# /create-dna

> Erschaffe die Brand-DNA durch die 7 Fragen.

## Zweck

Die DNA ist das Blut. Ohne Blut kein Leben. Dies ist der Schöpfungsakt.

## Die 7 Fragen

Stelle diese Fragen nacheinander. Warte auf Antworten.

### Frage 1: Der Kern
```
"Was ist der Kern dessen, wofür Ihr Unternehmen steht?
Nicht was Sie tun, sondern WARUM Sie es tun."
```

### Frage 2: Die Stimme
```
"Wenn Ihr Unternehmen eine Person wäre, wie würde sie sprechen?
Formell oder locker? Direkt oder diplomatisch? Sachlich oder emotional?"
```

### Frage 3: Das Gefühl
```
"Was sollen Menschen FÜHLEN wenn sie mit Ihrem Unternehmen interagieren?
Der erste Eindruck, die bleibende Erinnerung."
```

### Frage 4: Die Differenzierung
```
"Was unterscheidet Sie WIRKLICH von anderen?
Nicht Marketing-Sprech, sondern die ehrliche Antwort."
```

### Frage 5: Die Werte
```
"Welche Werte sind nicht verhandelbar?
Wofür würden Sie Kunden ablehnen?"
```

### Frage 6: Die Anti-Persona
```
"Wen wollen Sie NICHT als Kunden?
Welche Art von Anfragen lehnen Sie ab?"
```

### Frage 7: Der Erfolg
```
"Wie sieht Erfolg für Sie aus - jenseits von Zahlen?
Was würde Sie wirklich stolz machen?"
```

## Nach den Antworten

### Archetyp-Analyse

```typescript
function analyzeArchetype(answers: Answers): ArchetypeResult {
  // Analysiere Sprache, Werte, Gefühle
  // Matche gegen die 12 Archetypen
  // Berechne Confidence

  return {
    primary: determineMainArchetype(answers),
    confidence: calculateConfidence(answers),
    secondary: determineSecondaryArchetype(answers),
    reasoning: explainDecision(answers)
  };
}
```

### DNA generieren

```json
{
  "meta": {
    "version": "1.0",
    "created": "[timestamp]"
  },
  "identity": {
    "archetype": "[ermittelter Archetyp]",
    "archetypeConfidence": 0.XX,
    "values": ["[extrahierte Werte]"],
    "mission": "[synthetisierte Mission]",
    "voice": {
      "formality": "[formal|neutral|casual]",
      "energy": "[calm|balanced|energetic]",
      "approach": "[direct|diplomatic]"
    }
  },
  "visual": {
    "colorPalette": "[archetyp-basiert]",
    "typography": "[archetyp-basiert]"
  },
  "behavior": {
    "timing": "[archetyp-basiert]",
    "formality": "[abgeleitet]",
    "responseStyle": "[abgeleitet]"
  }
}
```

## Output

```
## 💜 Brand-DNA erschaffen

**Primärer Archetyp:** [Symbol] [Name]
**Confidence:** X.XX

**Reasoning:**
[2-3 Sätze warum dieser Archetyp]

**Abgeleitete Eigenschaften:**
- Voice: [Beschreibung]
- Timing: [Beschreibung]
- Visual: [Beschreibung]

**DNA gespeichert als:** brand-dna.json

---

*"Die DNA fließt nun durch alle Organe.
Das Unternehmen hat sein digitales Blut."*
```

## Regeln

- ALLE 7 Fragen müssen beantwortet werden
- NIEMALS Archetyp mit Confidence < 0.5 ausgeben
- Bei unklaren Antworten: Nachfragen statt raten
- Reasoning ist PFLICHT
