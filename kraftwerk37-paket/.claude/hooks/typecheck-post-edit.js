#!/usr/bin/env node
/**
 * KRAFTWERK37 TypeCheck Hook
 *
 * Prüft nach jedem Edit:
 * 1. TypeScript Fehler
 * 2. Verbotene 'any' Types ohne Kommentar
 *
 * Gibt Feedback an Claude für automatische Fixes.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function main() {
  let input = '';
  for await (const chunk of process.stdin) {
    input += chunk;
  }

  const data = JSON.parse(input);
  const filePath = data.tool_input?.file_path;

  // Nur TypeScript Dateien prüfen
  if (!filePath || !filePath.match(/\.(ts|tsx)$/)) {
    console.log(JSON.stringify({ continue: true, suppressOutput: true }));
    return;
  }

  const issues = [];

  // 1. TypeScript Compiler Check
  try {
    execSync('npx tsc --noEmit --pretty false 2>&1', {
      cwd: process.env.CLAUDE_PROJECT_DIR || process.cwd(),
      encoding: 'utf-8',
      timeout: 30000
    });
  } catch (error) {
    const output = error.stdout || error.message;
    const relevantErrors = output
      .split('\n')
      .filter(line => line.includes(path.basename(filePath)))
      .slice(0, 5); // Max 5 Fehler

    if (relevantErrors.length > 0) {
      issues.push(`TypeScript Fehler:\n${relevantErrors.join('\n')}`);
    }
  }

  // 2. Prüfe auf 'any' ohne Kommentar
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const anyViolations = [];

    lines.forEach((line, index) => {
      // Suche nach 'any' das nicht kommentiert ist
      if (line.match(/:\s*any\b/) && !line.includes('// TODO') && !line.includes('// FIXME') && !line.includes('// any:')) {
        anyViolations.push(`Zeile ${index + 1}: ${line.trim()}`);
      }
    });

    if (anyViolations.length > 0) {
      issues.push(`'any' ohne Begründung gefunden:\n${anyViolations.slice(0, 3).join('\n')}\n→ Entweder tippen oder mit "// any: [grund]" kommentieren`);
    }
  } catch (e) {
    // Datei nicht lesbar, ignorieren
  }

  // Output
  if (issues.length > 0) {
    console.log(JSON.stringify({
      continue: true,
      additionalContext: `⚠️ KRAFTWERK37 TypeCheck:\n\n${issues.join('\n\n')}`
    }));
  } else {
    console.log(JSON.stringify({ continue: true, suppressOutput: true }));
  }
}

main().catch(() => {
  console.log(JSON.stringify({ continue: true, suppressOutput: true }));
});
