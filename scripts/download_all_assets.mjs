import fs from 'fs';
import path from 'path';

const downloadDir = path.resolve('assets/downloaded');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

// 1. Download official SVGs from homepage
const officialSvgs = [
  { url: 'https://berriorganics.com/cdn/shop/files/Layer_1_4.svg', name: 'logo_header.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/Layer_1_5.svg', name: 'logo_footer.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/RT_OrganicFourColorOrganicSeal_1.svg', name: 'usda_organic_seal.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/Group_1484581561.svg', name: 'pillar_plant_based.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/Group_1484581562.svg', name: 'pillar_less_sugar.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/Group_1484581563.svg', name: 'pillar_proven_to_hydrate.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/Group_1484581564.svg', name: 'pillar_tastes_great.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/Group_1484581542.svg', name: 'why_plant_based.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/Group_1484581547.svg', name: 'why_less_sugar.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/Group_1484581546.svg', name: 'why_powerful_electrolytes.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/Group_1484581548.svg', name: 'why_fewer_calories.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/Group_1437256084.svg', name: 'icon_plant.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/Group_1484581543.svg', name: 'icon_sugar.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/Group_1437256083.svg', name: 'icon_hydrate.svg' },
  { url: 'https://berriorganics.com/cdn/shop/files/Group_1437256084_1.svg', name: 'icon_taste.svg' }
];

// 2. Ingredient images from learn_more
const ingredientImages = [
  { url: 'https://berriorganics.com/cdn/shop/files/af292ca9aef8d3a2f4704ce3ad41123e314e834a.png', name: 'ingredient_guava.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/Rectangle_6503_5.png', name: 'ingredient_coconut_water.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/Rectangle_6503_6.png', name: 'ingredient_maca_root.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/Rectangle_6503_7.png', name: 'ingredient_sweet_potato.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/2b573cf18c4c98c5f74d2153fcb1ed1809dea7bd.png', name: 'ingredient_ginseng_root.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/87d568bbabe4aa1f523800d01b83a21345805bd9.png', name: 'ingredient_sea_salt.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/2accd44422f8732d5a86550c8e005dea124e5c1f.png', name: 'ingredient_amla_fruit.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/0f2a8a60653dd784bda54e1e9d1240bf15351302.png', name: 'ingredient_maqui_superberries.png' }
];

// 3. Product bottle images from CDN
const bottleImages = [
  // Fit
  { url: 'https://berriorganics.com/cdn/shop/files/11.png', name: 'fit_tropical_punch.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/9.png', name: 'fit_mango.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/10.png', name: 'fit_dragon_fruit_alt.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/Frame_2147227985.png', name: 'fit_sampler.png' },
  // Lyte
  { url: 'https://berriorganics.com/cdn/shop/files/33.8_Strawberry_NEW.png', name: 'lyte_strawberry.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/33.8_Acai_Berry_NEW.png', name: 'lyte_acai_berry.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/33.8_Cherry_NEW.png', name: 'lyte_cherry.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/33.8_ADV_Strawberry_NEW.png', name: 'lyte_advanced_strawberry.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/elderberryberry_2.png', name: 'lyte_elderberry_apple.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/fruit_punch.png', name: 'lyte_fruit_punch_20oz.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/wild_berry.png', name: 'lyte_wild_berry_20oz.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/acai_20z_ca9d26ac-8644-4b59-948a-54820c9e442d.png', name: 'lyte_acai_20oz.png' },
  { url: 'https://berriorganics.com/cdn/shop/files/bl_sampler_3_bottles_1608a558-a8fa-4de0-a50c-2c917868ae02.png', name: 'lyte_sampler_3_bottles.png' }
];

async function downloadFile(item, subDir = '') {
  const targetDir = subDir ? path.join(downloadDir, subDir) : downloadDir;
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
  const targetPath = path.join(targetDir, item.name);
  if (fs.existsSync(targetPath)) {
    console.log(`Already exists: ${item.name}`);
    return;
  }
  try {
    console.log(`Downloading ${item.name} from ${item.url}...`);
    const res = await fetch(item.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    if (!res.ok) {
      console.error(`Failed ${item.name}: ${res.status}`);
      return;
    }
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(targetPath, Buffer.from(buffer));
    console.log(`Saved ${item.name} (${buffer.byteLength} bytes)`);
  } catch (e) {
    console.error(`Error downloading ${item.name}:`, e.message);
  }
}

async function run() {
  for (const s of officialSvgs) await downloadFile(s, 'svg');
  for (const ing of ingredientImages) await downloadFile(ing, 'ingredients');
  for (const b of bottleImages) await downloadFile(b, 'bottles');
  console.log('All downloads completed!');
}

run();

