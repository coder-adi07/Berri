import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const homeHtml = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');

const idx = homeHtml.indexOf("Thousands of Life Changing Berri Organics Stories!");
const chunk = homeHtml.slice(idx, idx + 8000);
console.log('=== STORIES SLIDER HTML CHUNK ===');
const slides = [...chunk.matchAll(/<li[^>]+class="[^"]*berri-stories[^"]*"[^>]*>([\s\S]*?)<\/li>/gi)];
console.log(`Found ${slides.length} slides`);
slides.forEach((s, i) => {
  console.log(`\n--- SLIDE ${i + 1} ---`);
  const imgs = [...s[1].matchAll(/<img[^>]+src="([^">]+)"/gi)].map(m => m[1]);
  const vids = [...s[1].matchAll(/<source[^>]+src="([^">]+)"|<video[^>]+src="([^">]+)"/gi)].map(m => m[1] || m[2]);
  console.log('Images:', imgs);
  console.log('Videos:', vids);
});

