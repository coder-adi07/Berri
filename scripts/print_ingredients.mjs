import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const learnHtml = fs.readFileSync(path.join(dataDir, 'learn_more.html'), 'utf-8');

const ingIdx = learnHtml.indexOf("True-to-Nature Ingredients");
const sub = learnHtml.slice(ingIdx, ingIdx + 12000);
// Let's print out all texts with their tags stripped cleanly
const lines = sub.split('<').map(s => {
  const parts = s.split('>');
  return parts.length > 1 ? parts.slice(1).join('>') : '';
}).map(s => s.trim()).filter(Boolean);

console.log(lines.slice(0, 80).join('\n'));

