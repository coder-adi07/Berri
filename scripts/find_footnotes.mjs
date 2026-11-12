import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const homeHtml = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');

const matches = [...homeHtml.matchAll(/\*[^*<\n]{10,200}/g)].map(m => m[0]);
console.log('Asterisk footnotes found:', matches);

