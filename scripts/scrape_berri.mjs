import fs from 'fs';
import path from 'path';

const pagesToFetch = [
  { url: 'https://berriorganics.com/', name: 'homepage' },
  { url: 'https://berriorganics.com/collections/all', name: 'collection_all' },
  { url: 'https://berriorganics.com/collections/berri-fit-drinks', name: 'collection_fit' },
  { url: 'https://berriorganics.com/collections/berri-lyte-drinks', name: 'collection_lyte' },
  { url: 'https://berriorganics.com/collections/berri-lyte-advanced', name: 'collection_lyte_advanced' },
  { url: 'https://berriorganics.com/collections/samplers', name: 'collection_samplers' },
  { url: 'https://berriorganics.com/pages/about-us', name: 'about_us' },
  { url: 'https://berriorganics.com/pages/giving-back', name: 'giving_back' },
  { url: 'https://berriorganics.com/pages/learn-more', name: 'learn_more' },
  { url: 'https://berriorganics.com/pages/faq', name: 'faq' },
  { url: 'https://berriorganics.com/pages/contact-us', name: 'contact_us' },
  { url: 'https://berriorganics.com/pages/store-locator', name: 'store_locator' },
  { url: 'https://berriorganics.com/blogs/blog', name: 'blogs' }
];

const dataDir = path.resolve('scripts/data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

async function run() {
  for (const page of pagesToFetch) {
    try {
      console.log(`Fetching ${page.name} from ${page.url}...`);
      const res = await fetch(page.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      if (!res.ok) {
        console.error(`Failed ${page.name}: status ${res.status}`);
        continue;
      }
      const text = await res.text();
      fs.writeFileSync(path.join(dataDir, `${page.name}.html`), text, 'utf-8');
      console.log(`Saved ${page.name}.html (${text.length} bytes)`);
    } catch (err) {
      console.error(`Error fetching ${page.name}:`, err.message);
    }
  }
}

run();

