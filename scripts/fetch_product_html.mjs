import fs from 'fs';
import path from 'path';

const productUrls = [
  'tropical-punch',
  'dragon-fruit',
  'mango',
  'berrifit-sampler-pack',
  'strawberry',
  'acai-berry',
  'cherry',
  'advanced-strawberry',
  'elderberry-apple',
  'new-fruit-punch-20oz-size',
  'new-berri-lyte-sampler-3-flavors',
  'new-acai-berry-20oz-size',
  'new-wild-berry-20oz-size'
];

const dataDir = path.resolve('scripts/data/products');

async function fetchHtmls() {
  for (const handle of productUrls) {
    const htmlPath = path.join(dataDir, `${handle}.html`);
    if (fs.existsSync(htmlPath)) continue;
    try {
      console.log(`Fetching HTML for ${handle}...`);
      const res = await fetch(`https://berriorganics.com/products/${handle}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (res.ok) {
        const text = await res.text();
        fs.writeFileSync(htmlPath, text, 'utf-8');
        console.log(`Saved ${handle}.html (${text.length} bytes)`);
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

fetchHtmls();

