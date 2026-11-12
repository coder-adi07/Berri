import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const homeHtml = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');

const idx = homeHtml.indexOf('Why\nBerri Organics is better') !== -1 ? homeHtml.indexOf('Why\nBerri Organics is better') : homeHtml.indexOf('Berri Organics is better');
console.log(homeHtml.slice(idx, idx + 4000).replace(/<[^>]+>/g, '\n').split('\n').map(s => s.trim()).filter(Boolean).join('\n'));

