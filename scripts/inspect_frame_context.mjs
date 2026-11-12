import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const aboutHtml = fs.readFileSync(path.join(dataDir, 'about_us.html'), 'utf-8');

const idx = aboutHtml.indexOf("Frame_2147228120");
console.log(aboutHtml.slice(idx - 400, idx + 1200));

