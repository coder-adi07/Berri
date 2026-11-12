import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const homeHtml = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');
const dragonHtml = fs.readFileSync(path.join(dataDir, 'products/dragon-fruit.html'), 'utf-8');
const learnHtml = fs.readFileSync(path.join(dataDir, 'learn_more.html'), 'utf-8');
const givingHtml = fs.readFileSync(path.join(dataDir, 'giving_back.html'), 'utf-8');
const aboutHtml = fs.readFileSync(path.join(dataDir, 'about_us.html'), 'utf-8');

function cleanHtml(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, '')
             .replace(/<style[\s\S]*?<\/style>/gi, '')
             .replace(/<[^>]+>/g, ' ')
             .replace(/&amp;/g, '&')
             .replace(/&quot;/g, '"')
             .replace(/&#39;/g, "'")
             .replace(/&nbsp;/g, ' ')
             .replace(/\s+/g, ' ')
             .trim();
}

console.log('--- EXTRACTING MEDICAL QUOTE & REVIEWS ---');
const homeClean = cleanHtml(homeHtml);

// Boston Children quote
const bcMatch = homeClean.match(/([^"]{0,200}(?:Director of Pediatric Gastroenterology|Boston Children)[^.!?]{0,200}[.!?]?)/i);
if (bcMatch) console.log('Boston Children quote context:', bcMatch[0]);

// Look for quotes around Rebekah D, Cole L, Sarah M
['Rebekah D', 'Cole L', 'Sarah M', 'Nikki Gagnon'].forEach(name => {
  const idx = homeClean.indexOf(name);
  if (idx !== -1) {
    console.log(`\nReview ${name}:`, homeClean.slice(Math.max(0, idx - 250), Math.min(homeClean.length, idx + 100)));
  } else {
    const lIdx = cleanHtml(learnHtml).indexOf(name);
    if (lIdx !== -1) {
      console.log(`\nReview in Learn ${name}:`, cleanHtml(learnHtml).slice(Math.max(0, lIdx - 250), Math.min(cleanHtml(learnHtml).length, lIdx + 100)));
    }
  }
});

// True-to-nature ingredients from dragon-fruit.html or homepage
console.log('\n--- TRUE TO NATURE INGREDIENTS ---');
const dragonClean = cleanHtml(dragonHtml);
const ingMatch = dragonClean.match(/True-to-Nature Ingredients[\s\S]{1,1500}Nutrition/i) || dragonClean.match(/Ingredients[\s\S]{1,1500}/i);
if (ingMatch) {
  console.log('Ingredients section snippet:', ingMatch[0].slice(0, 1000));
}

// Giving back disclosure
console.log('\n--- GIVING BACK DISCLOSURE ---');
const gbClean = cleanHtml(givingHtml);
const discMatch = gbClean.match(/(?:Commercial Co-Venturer|Wish Upon a Teen|Jimmy Fund)[\s\S]{1,1500}/i);
if (discMatch) {
  console.log('Giving back snippet:', discMatch[0].slice(0, 800));
}

// Comparison table or Rapid Response
console.log('\n--- RAPID RESPONSE / COMPARISON ---');
const compMatch = homeClean.match(/(?:Rapid Response|Berri vs|Sports Drinks|Comparison)[\s\S]{1,1000}/i);
if (compMatch) {
  console.log('Comparison snippet:', compMatch[0].slice(0, 800));
}

