import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const homeHtml = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');

const idx = homeHtml.indexOf('Powerful electrolytes');
console.log(homeHtml.slice(idx, idx + 2500).replace(/<[^>]+>/g, '\n').split('\n').map(s => s.trim()).filter(Boolean).join('\n'));

