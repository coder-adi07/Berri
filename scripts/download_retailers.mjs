import fs from 'fs';
import path from 'path';

const frames = [
  'Frame_2147228120.png',
  'Frame_2147228121.png',
  'Frame_2147228122.png',
  'Frame_2147228123.png',
  'Frame_2147228124.png',
  'Frame_2147228125.png',
  'Frame_2147228126.png'
];

async function downloadRetailers() {
  const targetDir = path.resolve('assets/retailers');
  for (const f of frames) {
    const url = `https://berriorganics.com/cdn/shop/files/${f}`;
    console.log(`Downloading ${f}...`);
    try {
      const res = await fetch(url);
      if (res.ok) {
        const buf = await res.arrayBuffer();
        fs.writeFileSync(path.join(targetDir, f), Buffer.from(buf));
        console.log(`Saved ${f} (${buf.byteLength} bytes)`);
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

downloadRetailers();

