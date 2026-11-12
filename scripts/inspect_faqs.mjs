import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const faqHtml = fs.readFileSync(path.join(dataDir, 'faq.html'), 'utf-8');

// Search for questions in FAQ
const clean = faqHtml.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
const faqs = [];
const blocks = [...clean.matchAll(/<details[^>]*>([\s\S]*?)<\/details>/gi)];
console.log(`Found ${blocks.length} FAQ details blocks`);

blocks.forEach(b => {
  const qMatch = b[1].match(/<summary[^>]*>([\s\S]*?)<\/summary>/i);
  const aText = b[1].replace(/<summary[\s\S]*?<\/summary>/i, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (qMatch) {
    const qText = qMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    faqs.push({ question: qText, answer: aText });
  }
});

if (faqs.length === 0) {
  // Let's search for FAQ headings or questions
  const matches = [...clean.matchAll(/<h[2-4][^>]*>([^<]+)<\/h[2-4]>[\s\S]{1,500}?<p>([^<]+)<\/p>/gi)];
  console.log('Heading matches count:', matches.length);
  matches.forEach(m => {
    faqs.push({ question: m[1].trim(), answer: m[2].trim() });
  });
}

console.log('Sample FAQs:');
faqs.slice(0, 10).forEach(f => {
  console.log(`\nQ: ${f.question}\nA: ${f.answer.slice(0, 150)}...`);
});

