const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimize() {
  console.log('--- OPTIMIZING IMAGES WITH SHARP ---');

  const srcDir = path.resolve(__dirname, '../src/assets/images');
  const pubImagesDir = path.resolve(__dirname, '../public/images');

  if (!fs.existsSync(pubImagesDir)) {
    fs.mkdirSync(pubImagesDir, { recursive: true });
  }

  // 1. Hero Banner: from hero-banner1.png (highest source quality)
  const heroSource = fs.existsSync(path.join(srcDir, 'hero-banner1.png'))
    ? path.join(srcDir, 'hero-banner1.png')
    : path.join(srcDir, 'hero-banner1-opt.jpg');

  console.log('Processing Hero Banner from:', heroSource);

  // Desktop WebP (1400w)
  await sharp(heroSource)
    .resize(1400, null, { withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(path.join(pubImagesDir, 'hero-banner-desktop.webp'));

  // Mobile WebP (768w)
  await sharp(heroSource)
    .resize(768, null, { withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(path.join(pubImagesDir, 'hero-banner-mobile.webp'));

  // Fallback Desktop JPG
  await sharp(heroSource)
    .resize(1400, null, { withoutEnlargement: true })
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toFile(path.join(pubImagesDir, 'hero-banner-desktop.jpg'));

  // Fallback Mobile JPG
  await sharp(heroSource)
    .resize(768, null, { withoutEnlargement: true })
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toFile(path.join(pubImagesDir, 'hero-banner-mobile.jpg'));

  // Also update src/assets/images for bundle imports if needed
  await sharp(heroSource)
    .resize(1400, null, { withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(path.join(srcDir, 'hero-banner1-opt.webp'));

  // 2. Jupiter Logo
  const logoSource = path.join(srcDir, 'jupiter-logo-opt.png');
  if (fs.existsSync(logoSource)) {
    console.log('Processing Jupiter Logo...');
    await sharp(logoSource)
      .resize(400, null, { withoutEnlargement: true })
      .webp({ quality: 90, effort: 6 })
      .toFile(path.join(pubImagesDir, 'jupiter-logo.webp'));

    await sharp(logoSource)
      .resize(400, null, { withoutEnlargement: true })
      .webp({ quality: 90, effort: 6 })
      .toFile(path.join(srcDir, 'jupiter-logo-opt.webp'));
  }

  // 3. Machines: Flyash and Performance Machine
  const flyashSrc = path.join(srcDir, 'Machines/flyash-opt.jpg');
  if (fs.existsSync(flyashSrc)) {
    console.log('Processing flyash machine...');
    await sharp(flyashSrc)
      .resize(600, null, { withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(srcDir, 'Machines/flyash-opt.webp'));

    await sharp(flyashSrc)
      .resize(600, null, { withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(pubImagesDir, 'flyash-opt.webp'));
  }

  const perfMachineSrc = path.join(srcDir, 'Machines/performance-machine-opt.jpg');
  if (fs.existsSync(perfMachineSrc)) {
    console.log('Processing performance machine...');
    await sharp(perfMachineSrc)
      .resize(600, null, { withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(srcDir, 'Machines/performance-machine-opt.webp'));

    await sharp(perfMachineSrc)
      .resize(600, null, { withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(pubImagesDir, 'performance-machine-opt.webp'));
  }

  // 4. About Images
  const aboutDir = path.join(srcDir, 'about');
  if (fs.existsSync(path.join(aboutDir, 'about1-opt.jpg'))) {
    console.log('Processing about1 image...');
    await sharp(path.join(aboutDir, 'about1-opt.jpg'))
      .resize(700, null, { withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(aboutDir, 'about1-opt.webp'));
  }
  if (fs.existsSync(path.join(aboutDir, 'mission-opt.jpg'))) {
    console.log('Processing mission image...');
    await sharp(path.join(aboutDir, 'mission-opt.jpg'))
      .resize(700, null, { withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(aboutDir, 'mission-opt.webp'));
  }

  // 5. Optimize public/images existing PNGs (silo, rotary, vertical)
  const pubPngs = ['storage-silo-product.png', 'flyash-4brick-rotary.png', 'flyash-vertical-machine.png'];
  for (const png of pubPngs) {
    const fullPath = path.join(pubImagesDir, png);
    if (fs.existsSync(fullPath)) {
      const outWebp = path.join(pubImagesDir, png.replace('.png', '.webp'));
      console.log('Converting', png, 'to webp...');
      await sharp(fullPath)
        .resize(600, null, { withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(outWebp);
    }
  }

  console.log('\n--- IMAGE OPTIMIZATION SUMMARY ---');
  const pubFiles = fs.readdirSync(pubImagesDir);
  for (const f of pubFiles) {
    const s = fs.statSync(path.join(pubImagesDir, f));
    if (s.isFile()) {
      console.log(`  ${f.padEnd(35)} : ${(s.size / 1024).toFixed(1)} KB`);
    }
  }
}

optimize().catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
