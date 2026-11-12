import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');

function scanFile(fileName) {
  const content = fs.readFileSync(path.join(dataDir, fileName), 'utf-8');
  console.log(`\n=================== FILE: ${fileName} ===================`);

  // Look for quotes: Boston Children, Nikki Gagnon, Cole, Rebekah, Sarah
  const quotes = [...content.matchAll(/([^.!?\n<>]*(?:Rebekah|Cole|Sarah|Gagnon|Boston Children|Pediatric Gastroenterology|Pediatrician Approved|45 Day Money)[^.!?\n<>]*)/gi)].map(m => m[1].trim());
  console.log('Quotes / Mentions count:', quotes.length);
  if (quotes.length > 0) {
    console.log('Sample mentions:', quotes.slice(0, 10));
  }

  // Look for retailer names: Whole Foods, Sprouts, etc.
  const retailers = [...content.matchAll(/([^.!?\n<>]*(?:Whole Foods|Sprouts|Erewhon|Ralphs|HEB|Target|Kroger|Bristol Farms|Gelson's|Albertsons|Safeway)[^.!?\n<>]*)/gi)].map(m => m[1].trim());
  if (retailers.length > 0) {
    console.log('Retailers mentioned:', [...new Set(retailers)].slice(0, 10));
  }
}

scanFile('homepage.html');
scanFile('about_us.html');
scanFile('faq.html');
scanFile('learn_more.html');
scanFile('contact_us.html');
scanFile('giving_back.html');

