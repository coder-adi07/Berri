import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const aboutHtml = fs.readFileSync(path.join(dataDir, 'about_us.html'), 'utf-8');
const storeHtml = fs.readFileSync(path.join(dataDir, 'store_locator.html'), 'utf-8');

// Find all image tags in aboutHtml
const imgMatches = [...aboutHtml.matchAll(/<img[^>]+src="([^">]+)"[^>]*alt="([^">]*)"/gi)];
console.log('About images count:', imgMatches.length);
imgMatches.forEach(m => {
  console.log(`Src: ${m[1]}, Alt: ${m[2]}`);
});

// Look in store locator for retail mentions
console.log('\n--- STORE LOCATOR TEXT ---');
const cleanStore = storeHtml.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
console.log(cleanStore.slice(0, 1000));

