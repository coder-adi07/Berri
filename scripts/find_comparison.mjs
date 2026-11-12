import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const files = ['homepage.html', 'learn_more.html', 'about_us.html'];

for (const f of files) {
  const content = fs.readFileSync(path.join(dataDir, f), 'utf-8');
  const tableIdx = content.indexOf('<table');
  if (tableIdx !== -1) {
    console.log(`Found table in ${f}:`, content.slice(tableIdx, tableIdx + 2000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  } else {
    // Check for "vs"
    const vsIdx = content.indexOf(' vs ');
    if (vsIdx !== -1) {
      console.log(`Found 'vs' in ${f}:`, content.slice(vsIdx - 200, vsIdx + 400).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
    }
  }
}

