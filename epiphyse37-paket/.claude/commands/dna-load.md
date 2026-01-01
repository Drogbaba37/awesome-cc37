# /dna-load

> Lade die Brand-DNA in den aktiven Kontext.

## Zweck

Bevor die Organe arbeiten können, muss die DNA fließen.

## Ablauf

### 1. DNA-Quelle identifizieren

```
Prüfe:
├── Gibt es eine brand-dna.json im Projekt?
├── Wurde eine Kunden-ID übergeben?
├── Ist DNA bereits im Kontext?
└── Muss DNA erst erstellt werden?
```

### 2. DNA laden

```typescript
// Erwartetes Format
interface BrandDNA {
  meta: {
    version: string;
    customerId: string;
    created: string;
    lastModified: string;
  };
  identity: {
    archetype: Archetyp;
    archetypeConfidence: number;
    values: string[];
    mission: string;
    voice: VoiceTone;
  };
  visual: {
    colorPalette: ColorPalette;
    typography: Typography;
  };
  behavior: {
    timing: TimingConfig;
    formality: FormalityLevel;
    responseStyle: ResponseStyle;
  };
}
```

### 3. Archetyp aktivieren

```
Geladener Archetyp: [Name]
Confidence: [Score]

Implikationen:
├── Timing: [Config]
├── Kommunikation: [Style]
├── Design: [Stil]
└── Content: [Voice]
```

### 4. Output

```
## 💜 Brand-DNA geladen

**Kunde:** [Name/ID]
**Archetyp:** [Symbol] [Name] (Confidence: X.XX)

**Aktive Konfiguration:**
- Timing: [z.B. "bedacht, verzögert"]
- Voice: [z.B. "tiefgründig, reflektiv"]
- Visual: [z.B. "ruhig, viel Whitespace"]

**DNA fließt jetzt durch alle Organe.**

[DNA-Zusammenfassung in 2-3 Sätzen]
```

## Wenn keine DNA existiert

```
⚠️ Keine Brand-DNA gefunden.

Optionen:
1. /create-dna → DNA durch 7 Fragen erstellen
2. DNA-JSON manuell bereitstellen
3. Mit Default-Archetyp fortfahren (nicht empfohlen)

Ohne DNA arbeiten die Organe generisch.
Das widerspricht der KRAFTWERK37-Philosophie.
```

## Regeln

- WARNUNG wenn DNA älter als 6 Monate
- WARNUNG wenn Archetyp-Confidence < 0.7
- DNA bleibt im Kontext für alle folgenden Commands
