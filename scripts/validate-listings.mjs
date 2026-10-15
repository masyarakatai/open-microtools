import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const required = ['name:', 'slug:', 'category:', 'summary:', 'website:', 'pricing:', 'deployment:', 'privacy:', 'submitted_by:'];
const directory = fileURLToPath(new URL('../tools/', import.meta.url));
const files = (await readdir(directory)).filter(file => file.endsWith('.yml') && file !== '_template.yml');
const failures = [];

for (const file of files) {
  const content = await readFile(join(directory, file), 'utf8');
  for (const field of required) {
    if (!content.includes(`\n${field}`) && !content.startsWith(field)) failures.push(`${file}: missing ${field.slice(0, -1)}`);
  }
  if (!/^slug: [a-z0-9]+(?:-[a-z0-9]+)*$/m.test(content)) failures.push(`${file}: slug must be lowercase kebab-case`);
  if (!/^website: https:\/\//m.test(content)) failures.push(`${file}: website must use https`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Validated ${files.length} listings.`);
