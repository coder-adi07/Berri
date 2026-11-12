import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const aboutHtml = fs.readFileSync(path.join(dataDir, 'about_us.html'), 'utf-8');
const homeHtml = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');
const faqHtml = fs.readFileSync(path.join(dataDir, 'faq.html'), 'utf-8');
const givingHtml = fs.readFileSync(path.join(dataDir, 'giving_back.html'), 'utf-8');
const contactHtml = fs.readFileSync(path.join(dataDir, 'contact_us.html'), 'utf-8');
const blogsHtml = fs.readFileSync(path.join(dataDir, 'blogs.html'), 'utf-8');

console.log('--- RETAILERS IN ABOUT US ---');
const retailerImgs = [...aboutHtml.matchAll(/\/\/(berriorganics\.com\/cdn\/shop\/files\/[^"?\s]+\.(?:png|jpg|svg))/gi)].map(m => m[1]);
console.log('Retailer / About images:', [...new Set(retailerImgs)].filter(i => /retail|store|logo|whole|sprouts|erewhon|ralphs|heb|target|cvs|bristol|gelsons/i.test(i)));

console.log('\n--- CONTACT US DETAILS ---');
// print contact details
const contactText = contactHtml.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
const contactSnippet = contactText.match(/contact us[\s\S]{1,600}/i);
if (contactSnippet) console.log(contactSnippet[0]);

console.log('\n--- GIVING BACK VERBATIM ---');
const gbText = givingHtml.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
const gbDiscl = gbText.match(/Wish Upon a Teen[\s\S]{1,1200}Jimmy Fund[\s\S]{1,1200}/i);
if (gbDiscl) console.log(gbDiscl[0].slice(0, 800));

console.log('\n--- BLOG TITLES ---');
const blogTitles = [...blogsHtml.matchAll(/<h[2-4][^>]*class="[^"]*article[^"]*"[^>]*>(.*?)<\/h[2-4]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
if (blogTitles.length === 0) {
  const allBlogLinks = [...blogsHtml.matchAll(/href="\/blogs\/blog\/([^"]+)"[^>]*>(.*?)<\/a>/gi)];
  console.log('Blog matches:', allBlogLinks.map(m => ({ slug: m[1], title: m[2].replace(/<[^>]+>/g, '').trim() })).filter(b => b.title.length > 5));
} else {
  console.log('Blog titles:', blogTitles);
}

console.log('\n--- FAQS ---');
const faqQuestions = [...faqHtml.matchAll(/<summary[^>]*>(.*?)<\/summary>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('FAQ questions count:', faqQuestions.length, faqQuestions.slice(0, 10));

