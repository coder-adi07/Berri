import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('scripts/data');
const prodDir = path.join(dataDir, 'products');

const collectionLyteAdv = fs.readFileSync(path.join(dataDir, 'collection_lyte_advanced.html'), 'utf-8');
const prodsAdv = [...collectionLyteAdv.matchAll(/href="(\/products\/[^"]+)"/g)].map(m => m[1]);
console.log('Collection Lyte Advanced product links:', [...new Set(prodsAdv)]);

// Now let's inspect all product images from JSON and HTML
const allImages = new Map();
const prodFiles = fs.readdirSync(prodDir);

for (const file of prodFiles) {
  const fullPath = path.join(prodDir, file);
  if (file.endsWith('.json')) {
    const json = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
    const handle = file.replace('.json', '');
    if (json.images) {
      json.images.forEach(img => {
        allImages.set(`${handle}_json_${path.basename(img.split('?')[0])}`, img);
      });
    }
  } else if (file.endsWith('.html')) {
    const html = fs.readFileSync(fullPath, 'utf-8');
    const handle = file.replace('.html', '');
    const imgMatches = [...html.matchAll(/\/\/(berriorganics\.com\/cdn\/shop\/files\/[^"?\s]+\.(?:png|jpg|jpeg|webp))/gi)].map(m => m[1]);
    imgMatches.forEach(img => {
      const bname = path.basename(img);
      allImages.set(`${handle}_html_${bname}`, `https://${img}`);
    });
  }
}

console.log(`Total unique image links gathered: ${allImages.size}`);
console.log('Sample image links:');
for (const [k, v] of Array.from(allImages.entries()).slice(0, 30)) {
  console.log(`  ${k}: ${v}`);
}

