import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const learnHtml = fs.readFileSync(path.join(dataDir, 'learn_more.html'), 'utf-8');
const aboutHtml = fs.readFileSync(path.join(dataDir, 'about_us.html'), 'utf-8');
const givingHtml = fs.readFileSync(path.join(dataDir, 'giving_back.html'), 'utf-8');
const homeHtml = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');

// 1. Ingredients
const ingIdx = learnHtml.indexOf("True-to-Nature Ingredients");
if (ingIdx !== -1) {
  const ingChunk = learnHtml.slice(ingIdx, ingIdx + 12000);
  // Match ingredient names, origins, benefits, and images
  const items = [...ingChunk.matchAll(/<h[2-4][^>]*>(.*?)<\/h[2-4]>[\s\S]*?Origin:\s*([^<]+)[\s\S]*?Benefits:\s*([^<]+)/gi)];
  console.log('Ingredients parsed count:', items.length);
  items.forEach(it => {
    console.log(`\nName: ${it[1].trim()}\nOrigin: ${it[2].trim()}\nBenefits: ${it[3].trim()}`);
  });
  // Also get the images
  const imgMatches = [...ingChunk.matchAll(/<img[^>]+src="([^">]+)"[^>]+alt="([^">]*)"/gi)];
  console.log('Ingredient images:', imgMatches.map(m => ({ alt: m[2], src: m[1] })));
}

// 2. About us text
console.log('\n--- ABOUT US TEXT ---');
const cleanAbout = aboutHtml.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
console.log(cleanAbout.slice(cleanAbout.indexOf('Our Mission'), cleanAbout.indexOf('Our Mission') + 3000));

// 3. Giving back disclosure
console.log('\n--- GIVING BACK DISCLOSURE ---');
const cleanGiving = givingHtml.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
const jfIdx = cleanGiving.indexOf("Dana-Farber");
if (jfIdx !== -1) {
  console.log(cleanGiving.slice(jfIdx - 100, jfIdx + 1500));
}

