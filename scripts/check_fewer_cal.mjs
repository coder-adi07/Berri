import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const homeHtml = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');

const fcIdx = homeHtml.indexOf("Fewer calories*");
console.log(homeHtml.slice(fcIdx, fcIdx + 800));

