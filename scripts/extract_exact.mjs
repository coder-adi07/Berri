import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const learnHtml = fs.readFileSync(path.join(dataDir, 'learn_more.html'), 'utf-8');
const givingHtml = fs.readFileSync(path.join(dataDir, 'giving_back.html'), 'utf-8');
const aboutHtml = fs.readFileSync(path.join(dataDir, 'about_us.html'), 'utf-8');

// Print ingredients section raw text
const ingIdx = learnHtml.indexOf("True-to-Nature Ingredients");
console.log('=== RAW INGREDIENTS TEXT ===');
console.log(learnHtml.slice(ingIdx, ingIdx + 3500).replace(/<[^>]+>/g, '\n').split('\n').map(s => s.trim()).filter(Boolean).join('\n'));

// Print giving back disclosure complete
console.log('\n=== COMPLETE GIVING BACK DISCLOSURE ===');
const discIdx = givingHtml.indexOf("For every bottle sold, Berri Organics makes a donation");
console.log(givingHtml.slice(discIdx, discIdx + 1200).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));

// Print about us text
console.log('\n=== ABOUT US FULL TEXT ===');
console.log(aboutHtml.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, '\n').split('\n').map(s => s.trim()).filter(s => s.length > 20).join('\n'));

