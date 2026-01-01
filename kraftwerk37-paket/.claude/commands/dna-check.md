# DNA Check

Prüfe ob der Code konsistent mit der Brand-DNA Architektur arbeitet.

## Was du prüfst

### 1. DNA-Flow
Verfolge wie die Brand-DNA durch den Code fließt:

```
BrandDNA erstellt (BrandMatrix37)
    ↓
DNA validiert (Zod Schema)
    ↓
Event emittiert (EventBus)
    ↓
Andere Organe reagieren
```

**Fragen:**
- [ ] Wird die DNA korrekt validiert bevor sie verwendet wird?
- [ ] Werden Änderungen via EventBus kommuniziert?
- [ ] Ist der Archetyp-Zugriff konsistent?

### 2. Archetyp-Konsistenz
Prüfe ob Archetyp-abhängige Logik korrekt implementiert ist:

```typescript
// RICHTIG: Aus DNA ableiten
const timing = getArchetypeConfig(dna.identity.archetype);

// FALSCH: Hardcoded
const timing = { delay: 2000 }; // Warum 2000?
```

**Fragen:**
- [ ] Keine hardcodierten Werte die von Archetypen abhängen sollten?
- [ ] Archetyp-Config wird verwendet statt Magic Numbers?
- [ ] Timing/Verhalten passt zum Archetyp (Weise = bedacht, Held = direkt)?

### 3. Schema-Integrität
Wenn BrandDNA-Schema betroffen ist:

```typescript
// Immer validieren
const result = BrandDNASchema.safeParse(input);
if (!result.success) {
  throw new ValidationError(result.error);
}
```

**Fragen:**
- [ ] Schema-Änderungen sind abwärtskompatibel?
- [ ] Alle Konsumenten wurden geprüft?
- [ ] Migration-Strategie falls nötig?

### 4. Event-Emission
Prüfe ob wichtige Aktionen Events emittieren:

```typescript
await eventBus.emit({
  organ: 'brand-matrix',
  action: 'dna.created',
  payload: brandDNA,
  meta: {
    confidence: 0.85,
    reasoning: 'High archetype match on 6/7 questions'
  }
});
```

**Fragen:**
- [ ] Wichtige State-Änderungen emittieren Events?
- [ ] Meta enthält confidence + reasoning?
- [ ] Organ ist korrekt angegeben?

## Output

Gib eine Diagnose:

**DNA-Gesundheit:** 🟢 Gesund | 🟡 Leichte Symptome | 🔴 Kritisch

**Befund:**
- Was funktioniert gut
- Was ist inkonsistent
- Konkrete Behandlung (max 3 Punkte)
