# Weniger

Vereinfache den aktuellen Code radikal.

## Philosophie

> "Jede Zeile Code muss ihren Platz verdienen."

Dieser Command ist für Momente wo du spürst: "Das ist zu viel."

## Ablauf

### 1. Scope definieren
Was soll vereinfacht werden?
- Eine Datei?
- Eine Funktion?
- Ein ganzes Modul?

### 2. Inventur machen
Liste auf:
- Anzahl Zeilen
- Anzahl Abstraktionen (Interfaces, Types, Classes)
- Anzahl Abhängigkeiten
- Anzahl Konfigurationsoptionen

### 3. Kritisch fragen

Für jede Abstraktion:
> "Wird das an mehr als einer Stelle verwendet? JETZT, nicht hypothetisch."

Für jede Konfiguration:
> "Wurde das jemals anders als der Default verwendet?"

Für jeden Import:
> "Brauchen wir das wirklich oder ist es nice-to-have?"

### 4. Streichen

**Kandidaten zum Entfernen:**
- Helper-Funktionen die nur einmal verwendet werden → inline
- Interfaces für ein Objekt → direkt tippen
- "Flexible" Configs die nie geändert wurden → hardcoden
- Wrapper um simple Operationen → direkt aufrufen
- Kommentare die das Offensichtliche erklären → löschen

### 5. Vorher/Nachher

Zeige:
```
VORHER: X Zeilen, Y Abstraktionen
NACHHER: A Zeilen, B Abstraktionen
ERSPARNIS: Z%
```

## Regeln

- **Keine neuen Abstraktionen** um zu vereinfachen
- **Keine "TODO: cleanup later"** - jetzt oder nie
- **Lesbarkeit > Kürze** - 3 klare Zeilen > 1 kryptische

## Warnung

Wenn du merkst dass du MEHR Code schreibst um zu vereinfachen, stopp.
Dann ist es keine Vereinfachung.
