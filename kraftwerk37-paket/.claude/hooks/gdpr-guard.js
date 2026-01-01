#!/usr/bin/env node
/**
 * KRAFTWERK37 GDPR Guard
 *
 * Blockiert Bash-Commands die gegen GDPR BY DESIGN verstoßen könnten:
 * - Cloud LLM API Calls (OpenAI, Anthropic Cloud, etc.)
 * - Daten an externe Services senden
 *
 * Erlaubt: Ollama (lokal), Supabase (konfiguriert)
 */

async function main() {
  let input = '';
  for await (const chunk of process.stdin) {
    input += chunk;
  }

  const data = JSON.parse(input);
  const command = data.tool_input?.command || '';

  // Verbotene Patterns
  const forbidden = [
    { pattern: /api\.openai\.com/i, reason: 'OpenAI Cloud API' },
    { pattern: /api\.anthropic\.com/i, reason: 'Anthropic Cloud API' },
    { pattern: /OPENAI_API_KEY/i, reason: 'OpenAI API Key Nutzung' },
    { pattern: /ANTHROPIC_API_KEY/i, reason: 'Anthropic API Key Nutzung' },
    { pattern: /curl.*api\.(openai|anthropic|cohere|replicate)/i, reason: 'Cloud LLM API Call' },
  ];

  // Erlaubte Patterns (override)
  const allowed = [
    /ollama/i,        // Lokale LLMs
    /localhost/i,     // Lokale Services
    /127\.0\.0\.1/i,  // Lokale Services
    /supabase/i,      // Konfigurierter DB Service
  ];

  // Prüfen
  for (const { pattern, reason } of forbidden) {
    if (pattern.test(command)) {
      // Prüfe ob erlaubt
      const isAllowed = allowed.some(a => a.test(command));
      if (!isAllowed) {
        console.log(JSON.stringify({
          continue: false,
          additionalContext: `🛡️ GDPR Guard: Blockiert wegen "${reason}"\n\nKRAFTWERK37 Philosophie: Lokale LLMs über Cloud.\nNutze Ollama für lokale Inferenz.\n\nWenn du Cloud brauchst, frage Öktem explizit um Erlaubnis.`
        }));
        process.exit(2); // Block
      }
    }
  }

  // Alles OK
  console.log(JSON.stringify({ continue: true, suppressOutput: true }));
}

main().catch(() => {
  console.log(JSON.stringify({ continue: true, suppressOutput: true }));
});
