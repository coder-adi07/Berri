import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function extract() {
  const ingDir = path.resolve('assets/ingredients');
  const pubIngDir = path.resolve('public/assets/ingredients');
  [ingDir, pubIngDir].forEach(d => { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); });

  // 1. Glass with strawberry drink from berri-lyte-strawberry-halloween.jpg
  // Box: left 95, top 360, width 165, height 205
  const strawImg = sharp('assets/provided/berri-lyte-strawberry-halloween.jpg');
  const glassCrop = await strawImg.clone()
    .extract({ left: 95, top: 355, width: 165, height: 210 })
    .toBuffer();

  // Remove red background by analyzing RGB and creating alpha mask
  const { data: gData, info: gInfo } = await sharp(glassCrop).raw().toBuffer({ resolveWithObject: true });
  const gAlpha = Buffer.alloc(gInfo.width * gInfo.height * 4);
  for (let i = 0; i < gInfo.width * gInfo.height; i++) {
    const r = gData[i * 3];
    const g = gData[i * 3 + 1];
    const b = gData[i * 3 + 2];
    // Background is dark red/maroon
    const isBg = (r > 60 && g < 30 && b < 30) && (r > (g + b) * 2.0) && (i < gInfo.width * 20 || i % gInfo.width < 10 || i % gInfo.width > gInfo.width - 10);
    gAlpha[i * 4] = r;
    gAlpha[i * 4 + 1] = g;
    gAlpha[i * 4 + 2] = b;
    gAlpha[i * 4 + 3] = isBg ? 0 : 255;
  }

  const glassPng = path.join(ingDir, 'element_strawberry_glass.png');
  await sharp(gAlpha, { raw: { width: gInfo.width, height: gInfo.height, channels: 4 } })
    .webp({ quality: 95 })
    .toFile(glassPng.replace('.png', '.webp'));
  await sharp(gAlpha, { raw: { width: gInfo.width, height: gInfo.height, channels: 4 } })
    .png()
    .toFile(glassPng);
  fs.copyFileSync(glassPng, path.join(pubIngDir, 'element_strawberry_glass.png'));

  // 2. Extract coconut, apple slices, strawberry from fruit punch photo
  const fpImg = sharp('assets/provided/berri-lyte-fruit-punch-halloween.jpg');
  
  // Coconut
  const coconutCrop = await fpImg.clone()
    .extract({ left: 0, top: 270, width: 210, height: 195 })
    .png()
    .toFile(path.join(ingDir, 'element_coconut.png'));
  fs.copyFileSync(path.join(ingDir, 'element_coconut.png'), path.join(pubIngDir, 'element_coconut.png'));

  // Apple slices
  const appleCrop = await fpImg.clone()
    .extract({ left: 355, top: 375, width: 155, height: 180 })
    .png()
    .toFile(path.join(ingDir, 'element_apple_slices.png'));
  fs.copyFileSync(path.join(ingDir, 'element_apple_slices.png'), path.join(pubIngDir, 'element_apple_slices.png'));

  console.log('Extracted real lifestyle and ingredient elements successfully!');
}

extract();

