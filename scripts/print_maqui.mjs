import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const learnHtml = fs.readFileSync(path.join(dataDir, 'learn_more.html'), 'utf-8');

const amlaIdx = learnHtml.indexOf("Amla Fruit");
const sub = learnHtml.slice(amlaIdx, amlaIdx + 3000);
const lines = sub.split('<').map(s => {
  const parts = s.split('>');
  return parts.length > 1 ? parts.slice(1).join('>') : '';
}).map(s => s.trim()).filter(Boolean);

console.log(lines.slice(0, 40).join('\n'));

