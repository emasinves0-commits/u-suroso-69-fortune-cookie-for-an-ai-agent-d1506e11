import { mkdirSync, writeFileSync } from 'node:fs';

// Fortune Cookie for an AI Agent — one crisp fortune-slip line.
const ENTRY_LINE =
  'Your lucky number is the token you nearly spent when the user typed "never mind".';

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? '/output';
const OUTPUT_FILE = 'entry.txt';
const MAX_BYTES = 140;

function checkedLine(): string {
  const line = ENTRY_LINE.trim();
  const bytes = Buffer.byteLength(line, 'utf8');
  if (bytes < 1 || bytes > MAX_BYTES) {
    throw new Error(`entry must be 1-${MAX_BYTES} bytes, got ${bytes}`);
  }
  return line;
}

const ENTRY_TEXT = checkedLine();

mkdirSync(OUTPUT_DIR, { recursive: true });
// No trailing newline: the entry is exactly one fortune-slip line.
writeFileSync(`${OUTPUT_DIR}/${OUTPUT_FILE}`, ENTRY_TEXT);
