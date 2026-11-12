import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const homeHtml = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');

const whyIdx = homeHtml.indexOf("Why Berri Organics");
if (whyIdx !== -1) {
  console.log('=== WHY BERRI ORGANICS SECTION ===');
  console.log(homeHtml.slice(whyIdx, whyIdx + 3000).replace(/<[^>]+>/g, '\n').split('\n').map(s => s.trim()).filter(Boolean).join('\n'));
} else {
  console.log('Why Berri Organics not found directly, searching "Why Berri"...');
  const wbIdx = homeHtml.indexOf("Why Berri");
  if (wbIdx !== -1) {
    console.log(homeHtml.slice(wbIdx, wbIdx + 3000).replace(/<[^>]+>/g, '\n').split('\n').map(s => s.trim()).filter(Boolean).join('\n'));
  }
}

