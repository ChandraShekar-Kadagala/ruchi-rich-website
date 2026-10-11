import { Jimp } from 'jimp';

function getRGBA(img, x, y) {
  const hex = img.getPixelColor(x, y);
  return {
    r: (hex >> 24) & 255,
    g: (hex >> 16) & 255,
    b: (hex >> 8) & 255,
    a: hex & 255
  };
}

function setRGBA(img, x, y, c) {
  const hex = (((c.r & 255) * 16777216) + ((c.g & 255) << 16) + ((c.b & 255) << 8) + (c.a & 255)) >>> 0;
  img.setPixelColor(hex, x, y);
}

async function run() {
  // 1. Red Chilli Powder: sample ribbon 28px to the left
  {
    const img = await Jimp.read('public/assets/products-original/red-chilli-powder.png');
    for (let y = 468; y <= 508; y++) {
      for (let x = 315; x <= 390; x++) {
        const sample = getRGBA(img, x - 28, y);
        setRGBA(img, x, y, sample);
      }
    }
    await img.write('public/assets/products/red-chilli-powder.png');
    console.log('Cleaned red-chilli-powder.png');
  }

  // 2. Coriander Powder: sample green ribbon 28px to the left
  {
    const img = await Jimp.read('public/assets/products-original/coriander-powder.png');
    for (let y = 492; y <= 528; y++) {
      for (let x = 285; x <= 362; x++) {
        const sample = getRGBA(img, x - 28, y);
        setRGBA(img, x, y, sample);
      }
    }
    await img.write('public/assets/products/coriander-powder.png');
    console.log('Cleaned coriander-powder.png');
  }

  // 3. Garam Masala: sample red foil 22px down
  {
    const img = await Jimp.read('public/assets/products-original/garam-masala.png');
    for (let y = 94; y <= 138; y++) {
      for (let x = 60; x <= 122; x++) {
        const sample = getRGBA(img, x, y + 22);
        setRGBA(img, x, y, sample);
      }
    }
    await img.write('public/assets/products/garam-masala.png');
    console.log('Cleaned garam-masala.png');
  }

  // 4. Chicken Masala: sample red foil 22px down
  {
    const img = await Jimp.read('public/assets/products-original/chicken-masala.png');
    for (let y = 94; y <= 138; y++) {
      for (let x = 60; x <= 122; x++) {
        const sample = getRGBA(img, x, y + 22);
        setRGBA(img, x, y, sample);
      }
    }
    await img.write('public/assets/products/chicken-masala.png');
    console.log('Cleaned chicken-masala.png');
  }

  // 5. Turmeric Powder: sample yellow foil 22px down
  {
    const img = await Jimp.read('public/assets/products-original/turmeric-powder.png');
    for (let y = 94; y <= 138; y++) {
      for (let x = 75; x <= 134; x++) {
        const sample = getRGBA(img, x, y + 22);
        setRGBA(img, x, y, sample);
      }
    }
    await img.write('public/assets/products/turmeric-powder.png');
    console.log('Cleaned turmeric-powder.png');
  }

  console.log('Cleaned all 5 images flawlessly!');
}

run();
