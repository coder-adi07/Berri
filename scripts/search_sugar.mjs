import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const homeHtml = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');

const matches = [...homeHtml.matchAll(/less\s*sugar/gi)];
console.log('Matches for less sugar:', matches.length);
matches.forEach(m => {
  console.log('--- MATCH ---');
  console.log(homeHtml.slice(Math.max(0, m.index - 100), Math.min(homeHtml.length, m.index + 500)).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
});

