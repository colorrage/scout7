#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const stateDirArg = process.argv[2];
if (!stateDirArg) {
  console.error('Usage: node scripts/validate-scout-state.mjs <path-to-.scout>');
  process.exit(1);
}

const stateDir = resolve(stateDirArg);
console.log(`Validating Scout state at: ${stateDir}`);

let errors = 0;
let warnings = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`  ❌ ${message}`);
    errors++;
  } else {
    console.log(`  ✅ ${message}`);
  }
}

function warn(condition, message) {
  if (!condition) {
    console.warn(`  ⚠️  ${message}`);
    warnings++;
  } else {
    console.log(`  ✅ ${message}`);
  }
}

assert(existsSync(stateDir), `State root ${stateDir} exists`);

const contextDir = join(stateDir, 'context');
assert(existsSync(contextDir), 'context/ directory exists');
if (existsSync(contextDir)) {
  warn(existsSync(join(contextDir, 'capability.md')), 'context/capability.md exists');
  warn(existsSync(join(contextDir, 'territory-checks-log.md')), 'context/territory-checks-log.md exists');
}

const batchesDir = join(stateDir, 'batches');
if (existsSync(batchesDir)) {
  const entries = readdirSync(batchesDir);
  console.log(`Found ${entries.length} batch directories/files.`);
  for (const entry of entries) {
    const fullPath = join(batchesDir, entry);
    if (statSync(fullPath).isDirectory()) {
      const promptsDir = join(fullPath, 'prompts');
      const hasPrompts = existsSync(promptsDir) && readdirSync(promptsDir).length > 0;
      warn(hasPrompts, `Batch ${entry} has saved prompts in prompts/`);
    }
  }
}

console.log(`\nState validation complete: ${errors} error(s), ${warnings} warning(s).`);
if (errors > 0) {
  process.exit(1);
}
