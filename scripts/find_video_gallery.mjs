import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const homeHtml = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');

const idx = homeHtml.indexOf("Life Changing");
if (idx !== -1) {
  console.log('=== LIFE CHANGING SECTION ===');
  console.log(homeHtml.slice(idx - 200, idx + 4000).replace(/<[^>]+>/g, '\n').split('\n').map(s => s.trim()).filter(Boolean).join('\n'));
} else {
  console.log('Searching "Stories"...');
  const sIdx = homeHtml.indexOf("Stories");
  if (sIdx !== -1) {
    console.log(homeHtml.slice(sIdx - 200, sIdx + 4000).replace(/<[^>]+>/g, '\n').split('\n').map(s => s.trim()).filter(Boolean).join('\n'));
  }
}

