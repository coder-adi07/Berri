import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Source bottles
const bottleSources = [
  // Fit
  {
    line: 'fit',
    flavor: 'dragon-fruit',
    name: 'Dragon Fruit',
    src: 'assets/provided/berri-fit-dragon-fruit.png',
    color: '#FF2E93',
    glowColor: 'rgba(255, 46, 147, 0.45)',
    accentGradient: 'from-pink-500 to-rose-600',
    type: 'Berri Fit®',
    size: '16 fl oz (473 mL)',
    calories: '35 cal / serving',
    sugar: '6g natural sugar',
    desc: 'A smooth, refreshing tropical blend of coconut, dragon fruit, and raspberries.'
  },
  {
    line: 'fit',
    flavor: 'tropical-punch',
    name: 'Tropical Punch',
    src: 'assets/downloaded/bottles/fit_tropical_punch.png',
    color: '#FF5E3A',
    glowColor: 'rgba(255, 94, 58, 0.45)',
    accentGradient: 'from-orange-500 to-red-600',
    type: 'Berri Fit®',
    size: '16 fl oz (473 mL)',
    calories: '35 cal / serving',
    sugar: '6g natural sugar',
    desc: 'An invigorating burst of organic pineapple, passionfruit, and island botanicals.'
  },
  {
    line: 'fit',
    flavor: 'mango',
    name: 'Mango',
    src: 'assets/downloaded/bottles/fit_mango.png',
    color: '#FFB300',
    glowColor: 'rgba(255, 179, 0, 0.45)',
    accentGradient: 'from-amber-400 to-orange-500',
    type: 'Berri Fit®',
    size: '16 fl oz (473 mL)',
    calories: '35 cal / serving',
    sugar: '6g natural sugar',
    desc: 'Lush organic tropical mango packed with restorative plant electrolytes and maca.'
  },
  {
    line: 'fit',
    flavor: 'fit-sampler',
    name: 'Berri Fit Sampler Pack',
    src: 'assets/downloaded/bottles/fit_sampler.png',
    color: '#00838F',
    glowColor: 'rgba(0, 131, 143, 0.45)',
    accentGradient: 'from-teal-500 to-cyan-600',
    type: 'Berri Fit®',
    size: 'Multi-pack',
    calories: '35 cal / serving',
    sugar: '6g natural sugar',
    desc: 'Experience all 3 plant-powered active hydration flavors in one convenient pack.'
  },

  // Lyte
  {
    line: 'lyte',
    flavor: 'strawberry',
    name: 'Strawberry',
    src: 'assets/downloaded/bottles/lyte_strawberry.png',
    color: '#E63946',
    glowColor: 'rgba(230, 57, 70, 0.45)',
    accentGradient: 'from-rose-500 to-red-600',
    type: 'Berri Lyte®',
    size: '33.8 fl oz (1 L)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    desc: 'Pediatrician-approved oral electrolyte solution crafted with real organic strawberries.'
  },
  {
    line: 'lyte',
    flavor: 'fruit-punch',
    name: 'Fruit Punch',
    src: 'assets/downloaded/bottles/lyte_fruit_punch_20oz.png',
    color: '#FF4757',
    glowColor: 'rgba(255, 71, 87, 0.45)',
    accentGradient: 'from-red-500 to-pink-600',
    type: 'Berri Lyte®',
    size: '20 fl oz (591 mL)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    desc: 'Juicy organic apples, grapes, and strawberries formulated for rapid rehydration.'
  },
  {
    line: 'lyte',
    flavor: 'elderberry-apple',
    name: 'Elderberry Apple',
    src: 'assets/provided/berri-lyte-elderberry-apple.png',
    color: '#7B2CBF',
    glowColor: 'rgba(123, 44, 191, 0.45)',
    accentGradient: 'from-purple-600 to-indigo-700',
    type: 'Berri Lyte®',
    size: '20 fl oz (591 mL)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    desc: 'Antioxidant-rich organic elderberry paired with crisp organic apple juice.'
  },
  {
    line: 'lyte',
    flavor: 'acai-berry',
    name: 'Acai Berry',
    src: 'assets/downloaded/bottles/lyte_acai_berry.png',
    color: '#5A189A',
    glowColor: 'rgba(90, 24, 154, 0.45)',
    accentGradient: 'from-purple-700 to-violet-900',
    type: 'Berri Lyte®',
    size: '33.8 fl oz (1 L)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    desc: 'Superberry hydration fueled by antioxidant organic acai from the Amazon rainforest.'
  },
  {
    line: 'lyte',
    flavor: 'cherry',
    name: 'Cherry',
    src: 'assets/downloaded/bottles/lyte_cherry.png',
    color: '#9D0208',
    glowColor: 'rgba(157, 2, 8, 0.45)',
    accentGradient: 'from-red-700 to-rose-900',
    type: 'Berri Lyte®',
    size: '33.8 fl oz (1 L)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    desc: 'Rich, authentic tart organic cherry packed with bioavailable electrolytes.'
  },
  {
    line: 'lyte',
    flavor: 'wild-berry',
    name: 'Wild Berry',
    src: 'assets/downloaded/bottles/lyte_wild_berry_20oz.png',
    color: '#C71585',
    glowColor: 'rgba(199, 21, 133, 0.45)',
    accentGradient: 'from-pink-600 to-purple-700',
    type: 'Berri Lyte®',
    size: '20 fl oz (591 mL)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    desc: 'A vibrant blend of organic berries formulated for rapid response oral hydration.'
  },
  {
    line: 'lyte',
    flavor: 'lyte-sampler',
    name: 'Berri Lyte Sampler (3 Flavors)',
    src: 'assets/downloaded/bottles/lyte_sampler_3_bottles.png',
    color: '#0077B6',
    glowColor: 'rgba(0, 119, 182, 0.45)',
    accentGradient: 'from-blue-600 to-cyan-700',
    type: 'Berri Lyte®',
    size: '3 x 33.8 fl oz',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    desc: 'The pediatrician-approved rehydration trio: Strawberry, Acai Berry, and Cherry.'
  },

  // Lyte Advanced
  {
    line: 'lyte-advanced',
    flavor: 'advanced-strawberry',
    name: 'Advanced Strawberry',
    src: 'assets/downloaded/bottles/lyte_advanced_strawberry.png',
    color: '#D90429',
    glowColor: 'rgba(217, 4, 41, 0.45)',
    accentGradient: 'from-red-600 to-rose-800',
    type: 'Berri Lyte® Advanced',
    size: '33.8 fl oz (1 L)',
    calories: '25 cal / serving',
    sugar: '4g natural sugar',
    desc: 'Advanced formula provides rapid response hydration + the power of real elderberry.'
  }
];

async function processAll() {
  console.log('Processing bottle cutouts and generating hero renders...');

  const cutoutsDir = path.resolve('assets/cutouts');
  const heroRendersDir = path.resolve('assets/hero-renders');
  const publicCutouts = path.resolve('public/assets/cutouts');
  const publicHero = path.resolve('public/assets/hero-renders');

  [cutoutsDir, heroRendersDir, publicCutouts, publicHero].forEach(d => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });

  for (const item of bottleSources) {
    const srcPath = path.resolve(item.src);
    if (!fs.existsSync(srcPath)) {
      console.warn(`File not found: ${srcPath}`);
      continue;
    }

    const lineDir = path.join(cutoutsDir, item.line);
    const pubLineDir = path.join(publicCutouts, item.line);
    if (!fs.existsSync(lineDir)) fs.mkdirSync(lineDir, { recursive: true });
    if (!fs.existsSync(pubLineDir)) fs.mkdirSync(pubLineDir, { recursive: true });

    const cutoutWebp = path.join(lineDir, `${item.flavor}.webp`);
    const cutoutPubWebp = path.join(pubLineDir, `${item.flavor}.webp`);
    const cutoutPubPng = path.join(pubLineDir, `${item.flavor}.png`);

    // 1. Trim transparent borders, resize to a consistent high-res standard height (1000px)
    const img = sharp(srcPath).trim();
    const meta = await img.metadata();
    console.log(`Processing ${item.name}: original ${meta.width}x${meta.height}`);

    // High quality WebP cutout
    await img.clone()
      .resize({ height: 1000, withoutEnlargement: false, fit: 'inside' })
      .webp({ quality: 95, alphaQuality: 100, lossless: false })
      .toFile(cutoutWebp);
    
    fs.copyFileSync(cutoutWebp, cutoutPubWebp);

    // Also save PNG
    await img.clone()
      .resize({ height: 1000, withoutEnlargement: false, fit: 'inside' })
      .png({ quality: 95 })
      .toFile(cutoutPubPng);

    // 2. Build Hero Render with contact shadow and liquid color glow
    // Canvas: 800 x 1000
    // Bottle: centered, height ~ 820px, positioned near bottom
    const bottleBuffer = await sharp(cutoutPubPng)
      .resize({ height: 800, fit: 'inside' })
      .toBuffer();
    
    const bottleMeta = await sharp(bottleBuffer).metadata();
    const canvasWidth = 900;
    const canvasHeight = 1100;
    const bottleX = Math.round((canvasWidth - bottleMeta.width) / 2);
    const bottleY = 120; // leaves space at bottom for shadow and glow

    // SVG for contact shadow, colored floor pool, and subtle highlight reflection
    const shadowY = bottleY + bottleMeta.height - 25;
    const shadowRx = Math.round(bottleMeta.width * 0.42);
    const shadowRy = 22;

    const svgOverlay = Buffer.from(`
      <svg width="${canvasWidth}" height="${canvasHeight}" viewBox="0 0 ${canvasWidth} ${canvasHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Floor soft shadow -->
          <radialGradient id="contactShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#000000" stop-opacity="0.55" />
            <stop offset="50%" stop-color="#000000" stop-opacity="0.25" />
            <stop offset="100%" stop-color="#000000" stop-opacity="0" />
          </radialGradient>
          <!-- Liquid color pool glow -->
          <radialGradient id="liquidGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="${item.color}" stop-opacity="0.45" />
            <stop offset="60%" stop-color="${item.color}" stop-opacity="0.18" />
            <stop offset="100%" stop-color="${item.color}" stop-opacity="0" />
          </radialGradient>
          <!-- Ambient soft aura -->
          <radialGradient id="ambientAura" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stop-color="${item.color}" stop-opacity="0.18" />
            <stop offset="70%" stop-color="${item.color}" stop-opacity="0.04" />
            <stop offset="100%" stop-color="${item.color}" stop-opacity="0" />
          </radialGradient>
        </defs>
        <!-- Ambient aura behind bottle -->
        <circle cx="${canvasWidth / 2}" cy="${bottleY + bottleMeta.height / 2}" r="${Math.round(bottleMeta.height * 0.48)}" fill="url(#ambientAura)" />
        <!-- Floor liquid glow -->
        <ellipse cx="${canvasWidth / 2}" cy="${shadowY + 12}" rx="${shadowRx * 1.5}" ry="${shadowRy * 1.8}" fill="url(#liquidGlow)" />
        <!-- Contact shadow -->
        <ellipse cx="${canvasWidth / 2}" cy="${shadowY}" rx="${shadowRx}" ry="${shadowRy}" fill="url(#contactShadow)" />
      </svg>
    `);

    // Create composite hero render
    const heroRenderPath = path.join(heroRendersDir, `${item.flavor}-hero.webp`);
    const pubHeroRenderPath = path.join(publicHero, `${item.flavor}-hero.webp`);
    const pubHeroRenderPng = path.join(publicHero, `${item.flavor}-hero.png`);

    await sharp({
      create: {
        width: canvasWidth,
        height: canvasHeight,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([
        { input: svgOverlay, top: 0, left: 0 },
        { input: bottleBuffer, top: bottleY, left: bottleX }
      ])
      .webp({ quality: 95, alphaQuality: 100 })
      .toFile(heroRenderPath);

    fs.copyFileSync(heroRenderPath, pubHeroRenderPath);

    await sharp(heroRenderPath)
      .png({ quality: 95 })
      .toFile(pubHeroRenderPng);

    console.log(`Saved hero render: ${item.flavor}-hero.webp (${canvasWidth}x${canvasHeight})`);
  }

  // Save the product manifest data
  fs.writeFileSync('src/data/products.json', JSON.stringify(bottleSources, null, 2), 'utf-8');
  console.log('Saved src/data/products.json successfully!');
}

processAll();

