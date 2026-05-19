// Copies dist/index.html into every known route directory so GitHub Pages
// serves a 200 directly instead of falling through to 404.html.
import { readFileSync, mkdirSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const src  = join(dist, 'index.html');

function place(route) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(src, join(dir, 'index.html'));
}

// Static routes
place('blog');

// One directory per post slug
const posts = JSON.parse(readFileSync(join(dist, 'blog', 'posts.json'), 'utf-8'));
for (const post of posts) {
  place(`blog/${post.slug}`);
}

console.log(`✓ pre-rendered ${1 + posts.length} routes`);
