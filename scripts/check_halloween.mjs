import sharp from 'sharp';

async function check() {
  const m1 = await sharp('assets/provided/berri-lyte-fruit-punch-halloween.jpg').metadata();
  console.log('Fruit punch metadata:', m1);
  const m2 = await sharp('assets/provided/berri-lyte-strawberry-halloween.jpg').metadata();
  console.log('Strawberry metadata:', m2);
}

check();

