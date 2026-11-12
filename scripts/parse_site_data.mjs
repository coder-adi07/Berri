import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');

function extractData() {
  const homepage = fs.readFileSync(path.join(dataDir, 'homepage.html'), 'utf-8');
  const collectionAll = fs.readFileSync(path.join(dataDir, 'collection_all.html'), 'utf-8');
  const aboutUs = fs.readFileSync(path.join(dataDir, 'about_us.html'), 'utf-8');
  const givingBack = fs.readFileSync(path.join(dataDir, 'giving_back.html'), 'utf-8');
  const faq = fs.readFileSync(path.join(dataDir, 'faq.html'), 'utf-8');
  const blogs = fs.readFileSync(path.join(dataDir, 'blogs.html'), 'utf-8');

  console.log('--- LOGOS & SVGS ---');
  const svgs = [...homepage.matchAll(/<img[^>]+src="([^">]+Layer_1_5\.svg[^">]*)"/gi)];
  console.log('Footer SVG matches:', svgs.map(m => m[1]));
  const allLogos = [...homepage.matchAll(/<img[^>]+src="([^">]+logo[^">]*)"/gi)];
  console.log('Logo matches:', allLogos.map(m => m[1]));

  // Find all svg images in homepage
  const allSvgs = [...homepage.matchAll(/src="([^">]+\.svg(\?[^">]*)?)"/gi)].map(m => m[1]);
  console.log('All SVGs found:', [...new Set(allSvgs)]);

  // Find products in collectionAll
  console.log('\n--- PRODUCTS IN COLLECTION_ALL ---');
  // Match product links: href="/products/..."
  const prodMatches = [...collectionAll.matchAll(/href="(\/products\/[a-z0-9-]+)"[^>]*>/gi)];
  const prodUrls = [...new Set(prodMatches.map(m => m[1]))];
  console.log('Product URLs:', prodUrls);

  // Look for image urls
  const imgMatches = [...collectionAll.matchAll(/src="(\/\/berriorganics\.com\/cdn\/shop\/[a-zA-Z0-9_\-\.\/]+|\/\/cdn\.shopify\.com\/s\/files\/[a-zA-Z0-9_\-\.\/]+)"/gi)];
  console.log('Sample images:', [...new Set(imgMatches.map(m => m[1]))].slice(0, 20));

  // Find reviews / quotes on homepage
  console.log('\n--- QUOTES & TESTIMONIALS ---');
  const testimonials = [];
  const reviewMatches = [...homepage.matchAll(/Rebekah|Cole|Sarah|Gagnon|Boston Children|Pediatric/gi)];
  console.log(`Found ${reviewMatches.length} testimonial keyword occurrences`);

  // Giving back text
  console.log('\n--- GIVING BACK SNIPPET ---');
  const gbSnippet = givingBack.match(/Wish Upon a Teen[\s\S]{1,1000}Jimmy Fund[\s\S]{1,1000}/i);
  if (gbSnippet) {
    console.log('Giving back excerpt:', gbSnippet[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 500));
  }
}

extractData();

