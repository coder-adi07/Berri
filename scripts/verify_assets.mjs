import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const missing = [];

function checkPath(p, context) {
  if (!p || p.startsWith('http')) return;
  const local = path.join(publicDir, p.replace(/^\//, ''));
  if (!fs.existsSync(local)) {
    missing.push({ path: p, context, local });
  } else {
    // console.log(`✓ [${context}] -> ${p}`);
  }
}

// Read products.json
const products = JSON.parse(fs.readFileSync('src/data/products.json', 'utf-8'));
products.forEach(p => {
  checkPath(`/assets/hero-renders/${p.flavor}-hero.webp`, `Hero render: ${p.name}`);
  checkPath(`/assets/cutouts/${p.line}/${p.flavor}.webp`, `Cutout: ${p.name}`);
});

const ingredientNames = [
  'guava', 'coconut_water', 'maca_root', 'sweet_potato',
  'ginseng_root', 'sea_salt', 'amla_fruit', 'maqui_superberries'
];
ingredientNames.forEach(i => {
  checkPath(`/assets/ingredient_${i}.png`, `Ingredient: ${i}`);
});

const pillars = [
  'plant_based', 'less_sugar', 'proven_to_hydrate', 'tastes_great'
];
pillars.forEach(p => {
  checkPath(`/assets/pillar_${p}.svg`, `Pillar: ${p}`);
});

const whys = [
  'less_sugar', 'plant_based', 'powerful_electrolytes', 'fewer_calories'
];
whys.forEach(w => {
  checkPath(`/assets/why_${w}.svg`, `Why: ${w}`);
});

for (let i = 20; i <= 26; i++) {
  checkPath(`/assets/Frame_21472281${i}.png`, `Retailer Frame ${i}`);
}

checkPath('/assets/logo_header.svg', 'Header Logo');
checkPath('/assets/logo_footer.svg', 'Footer Logo');
checkPath('/assets/usda_organic_seal.svg', 'USDA Seal');
checkPath('/assets/element_strawberry_glass.png', 'Glass Element');
checkPath('/assets/element_coconut.png', 'Coconut Element');
checkPath('/assets/element_apple_slices.png', 'Apple Element');

console.log(`\n========================================`);
console.log(`Asset Verification Result: ${missing.length === 0 ? 'SUCCESS' : 'FAILED'}`);
console.log(`Total checked: ${products.length * 2 + ingredientNames.length + pillars.length + whys.length + 7 + 6}`);
console.log(`Total missing: ${missing.length}`);
if (missing.length > 0) {
  console.error('Missing details:', missing);
} else {
  console.log('✅ ALL ASSETS EXIST ON DISK AND RESOLVE CORRECTLY!');
}
console.log(`========================================\n`);
