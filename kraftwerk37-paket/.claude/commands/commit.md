# Commit (KRAFTWERK37)

Erstelle einen sauberen Commit der zur Projekt-DNA passt.

## Ablauf

1. **Prüfe was sich geändert hat:**
   ```bash
   git status
   git diff --staged
   ```

2. **Wenn nichts gestaged:** Stage alle relevanten Änderungen
   ```bash
   git add -A
   ```

3. **Analysiere die Änderungen:**
   - Welches Organ ist betroffen?
   - Was ist die Intention (nicht was, sondern WARUM)?
   - Ist es eine logische Einheit oder sollte es gesplittet werden?

4. **Erstelle Commit-Message:**

   Format: `<emoji> <type>(<organ>): <beschreibung>`

   **Types:**
   - ✨ `feat` - Neue Funktionalität
   - 🐛 `fix` - Bugfix
   - ♻️ `refactor` - Code-Umstrukturierung
   - 📝 `docs` - Dokumentation
   - 🧪 `test` - Tests
   - 🔧 `chore` - Tooling, Config
   - 🗃️ `db` - Datenbank/Schema
   - 🔮 `ai` - KI/LLM-bezogen

   **Organe (kurz):**
   - `matrix` - BrandMatrix37
   - `forge` - PageForge37
   - `form` - FormCraft37
   - `flow` - FlowEngine37
   - `pulse` - TrackPulse37
   - `comms` - CommsFlow37
   - `voice` - VoiceOut37
   - `vault` - MemoryVault37
   - `epiphyse` - Epiphyse37
   - `core` - Shared/Kern

   **Beispiele:**
   ```
   ✨ feat(matrix): Archetyp-Confidence aus Antworten berechnen
   🐛 fix(flow): n8n Webhook-Trigger für Weise-Timing korrigiert
   ♻️ refactor(core): Event-Bus Types vereinfacht
   🔮 ai(epiphyse): Ollama-Integration für lokale Inferenz
   ```

5. **Commit erstellen:**
   ```bash
   git commit -m "<message>"
   ```

## Regeln

- **Atomare Commits:** Ein Commit = eine logische Änderung
- **Imperativ:** "Füge hinzu" nicht "Hinzugefügt"
- **Erste Zeile:** Max 72 Zeichen
- **Deutsche Beschreibung:** Für Business-Logik
- **Kein --no-verify** ohne explizite Erlaubnis

## Wenn mehrere Änderungen

Schlage vor, die Änderungen in separate Commits aufzuteilen:
1. Zeige welche Dateien zu welchem Commit gehören
2. Frage ob so gewünscht
3. Führe sequentiell aus
