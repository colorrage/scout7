#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

console.log('Running Scout7 package validation...');
let errors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`  ❌ ${message}`);
    errors++;
  } else {
    console.log(`  ✅ ${message}`);
  }
}

// 1. Verify required skills exist
const requiredSkills = [
  'scout',
  'scout-screen',
  'scout-discover',
  'scout-licence',
  'scout-cost',
  'scout-challenge',
  'scout-log'
];

const skillsDir = join(rootDir, 'skills');
assert(existsSync(skillsDir), 'skills/ directory exists');

for (const skill of requiredSkills) {
  const skillFile = join(skillsDir, skill, 'SKILL.md');
  const exists = existsSync(skillFile);
  assert(exists, `Skill ${skill} has SKILL.md`);
  if (exists) {
    const content = readFileSync(skillFile, 'utf8');
    assert(content.startsWith('---'), `Skill ${skill}/SKILL.md starts with YAML frontmatter`);
    assert(content.includes('name:'), `Skill ${skill}/SKILL.md declares name`);
    assert(content.includes('description:'), `Skill ${skill}/SKILL.md declares description`);
  }
}

// 2. Verify orchestrator reference docs and templates
const refDir = join(skillsDir, 'scout', 'reference');
const requiredRefs = ['checks.md', 'gates.md', 'lessons.md', 'provenance.md'];
for (const ref of requiredRefs) {
  assert(existsSync(join(refDir, ref)), `Reference doc scout/reference/${ref} exists`);
}

const tplDir = join(skillsDir, 'scout', 'templates');
const requiredTpls = ['batch.md', 'candidate.md', 'frame.md', 'screen-report.md'];
for (const tpl of requiredTpls) {
  assert(existsSync(join(tplDir, tpl)), `Template scout/templates/${tpl} exists`);
}

// 3. Verify installer script
const installScript = join(rootDir, 'scripts', 'install.sh');
assert(existsSync(installScript), 'scripts/install.sh exists');

// 4. Verify documentation
assert(existsSync(join(rootDir, 'README.md')), 'README.md exists');
assert(existsSync(join(rootDir, 'AGENTS.md')), 'AGENTS.md exists');

if (errors > 0) {
  console.error(`\nValidation failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('\nAll Scout7 package checks passed successfully!');
}
