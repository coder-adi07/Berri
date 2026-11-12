import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const homeHtml = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');
const learnHtml = fs.readFileSync(path.join(dataDir, 'learn_more.html'), 'utf-8');
const givingHtml = fs.readFileSync(path.join(dataDir, 'giving_back.html'), 'utf-8');
const aboutHtml = fs.readFileSync(path.join(dataDir, 'about_us.html'), 'utf-8');

console.log('--- 1. MEDICAL QUOTE FULL ---');
const docIdx = homeHtml.indexOf("Director of Pediatric Gastroenterology");
if (docIdx !== -1) {
  console.log(homeHtml.slice(docIdx - 400, docIdx + 150).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

console.log('\n--- 2. TRUE-TO-NATURE INGREDIENTS IN LEARN MORE ---');
const ingIdx = learnHtml.indexOf("True-to-Nature Ingredients");
if (ingIdx !== -1) {
  console.log(learnHtml.slice(ingIdx, ingIdx + 3000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

console.log('\n--- 3. GIVING BACK FULL & DISCLOSURE ---');
const jfIdx = givingHtml.indexOf("The Jimmy Fund");
if (jfIdx !== -1) {
  console.log(givingHtml.slice(jfIdx - 200, jfIdx + 2000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

console.log('\n--- 4. FOUNDER STORY IN ABOUT US ---');
console.log(aboutHtml.slice(aboutHtml.indexOf("Our Story"), aboutHtml.indexOf("Our Story") + 2500).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));

console.log('\n--- 5. VIDEOS ON HOMEPAGE ---');
const videoMatches = [...homeHtml.matchAll(/(https?:\/\/[^"'\s]+\.(?:mp4|webm)|https?:\/\/(?:www\.)?(?:youtube\.com|vimeo\.com|tiktok\.com)[^"'\s]+)/gi)].map(m => m[0]);
console.log('Videos found:', [...new Set(videoMatches)]);

