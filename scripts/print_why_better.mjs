import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const homeHtml = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');

const idx = homeHtml.indexOf('berri-why-better');
if (idx !== -1) {
  console.log('=== BERRI WHY BETTER SECTION ===');
  console.log(homeHtml.slice(idx - 200, idx + 4000).replace(/<[^>]+>/g, '\n').split('\n').map(s => s.trim()).filter(Boolean).join('\n'));
}

