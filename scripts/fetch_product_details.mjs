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
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

async function fetchProducts() {
  for (const handle of productUrls) {
    try {
      const url = `https://berriorganics.com/products/${handle}.js`;
      console.log(`Fetching JSON for ${handle}...`);
      const res = await fetch(url);
      if (res.ok) {
        const json = await res.json();
        fs.writeFileSync(path.join(dataDir, `${handle}.json`), JSON.stringify(json, null, 2), 'utf-8');
        console.log(`Saved ${handle}.json (title: ${json.title}, price: ${json.price / 100})`);
      } else {
        console.log(`JSON failed for ${handle}, trying HTML...`);
        const htmlRes = await fetch(`https://berriorganics.com/products/${handle}`);
        const html = await htmlRes.text();
        fs.writeFileSync(path.join(dataDir, `${handle}.html`), html, 'utf-8');
      }
    } catch (e) {
      console.error(`Error on ${handle}:`, e.message);
    }
  }
}

fetchProducts();

