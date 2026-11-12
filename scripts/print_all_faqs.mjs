import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const faqHtml = fs.readFileSync(path.join(dataDir, 'faq.html'), 'utf-8');

const blocks = [...faqHtml.matchAll(/<details[^>]*>([\s\S]*?)<\/details>/gi)];
blocks.forEach((b, i) => {
  const qMatch = b[1].match(/<summary[^>]*>([\s\S]*?)<\/summary>/i);
  const q = qMatch ? qMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
  const a = b[1].replace(/<summary[\s\S]*?<\/summary>/i, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (q.length > 5 && !q.includes('Shop') && !q.includes('Berri Lyte') && !q.includes('Search')) {
    console.log(`\n[FAQ ${i}]`);
    console.log(`Q: ${q}`);
    console.log(`A: ${a}`);
  }
});

