// Simple internal link checker for the Astro Starlight content.
// Usage: npm run check-links  (runs from docs/)
// Checks: markdown syntax basics + relative/absolute internal links resolve.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'src', 'content', 'docs');

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (/\.(md|mdx)$/.test(e)) out.push(p);
  }
  return out;
}

function slugToFile(slug) {
  // slug like /modules/cdd/fbl/ -> modules/cdd/fbl/index.md or .md
  let s = slug.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!s) return join(contentDir, 'index.mdx');
  const candidates = [
    join(contentDir, s + '.md'),
    join(contentDir, s + '.mdx'),
    join(contentDir, s, 'index.md'),
    join(contentDir, s, 'index.mdx'),
  ];
  return candidates.find((c) => existsSync(c));
}

const files = walk(contentDir);
let errors = 0;
let links = 0;
const linkRe = /\[([^\]]*)\]\(([^)\s]+)\)/g;

for (const f of files) {
  const text = readFileSync(f, 'utf8');
  // frontmatter check
  if (!/^---\ntitle:/m.test(text)) {
    console.error(`MISSING frontmatter title: ${f}`);
    errors++;
  }
  // unbalanced code fences
  const fences = (text.match(/```/g) || []).length;
  if (fences % 2 !== 0) {
    console.error(`UNBALANCED code fence: ${f}`);
    errors++;
  }
  let m;
  while ((m = linkRe.exec(text)) !== null) {
    const url = m[2];
    if (/^(https?:|mailto:|#|data:)/i.test(url)) continue;
    const clean = url.split('#')[0].split('?')[0];
    if (!clean) continue;
    links++;
    if (clean.startsWith('/')) {
      if (!slugToFile(clean)) {
        console.error(`BROKEN absolute link in ${f}: ${url}`);
        errors++;
      }
    } else if (clean.endsWith('.md') || clean.endsWith('.mdx') || !/\.[a-z0-9]+$/i.test(clean)) {
      // relative link — resolve against file dir
      const target = resolve(dirname(f), clean);
      const relCandidates = [target, target + '.md', target + '.mdx', join(target, 'index.md')];
      if (!relCandidates.some((c) => existsSync(c)) && !existsSync(target)) {
        // allow links to repo files outside docs (../../BSW/...) — check from repo root
        const repoTarget = resolve(dirname(f), clean);
        if (!existsSync(repoTarget)) {
          console.error(`BROKEN relative link in ${f}: ${url}`);
          errors++;
        }
      }
    }
  }
}

console.log(`Checked ${files.length} markdown files, ${links} internal links.`);
if (errors) {
  console.error(`${errors} problem(s) found.`);
  process.exit(1);
} else {
  console.log('OK: no broken internal links or frontmatter issues.');
}
