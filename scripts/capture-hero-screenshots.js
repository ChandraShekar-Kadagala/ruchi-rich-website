// Screenshot script using puppeteer-core + locally available Edge
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '..', 'dist');
const artifactDir = 'C:\\Users\\k.chandra shekar\\.gemini\\antigravity\\brain\\96811b52-02b3-4dff-ad1d-13f1cfaa2357';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  let filePath = path.join(distDir, reqPath);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, 'index.html');
  }
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, content) => {
    if (err) { res.writeHead(500); res.end('Error'); }
    else { res.writeHead(200, { 'Content-Type': contentType }); res.end(content); }
  });
});

const PORT = 4174;

server.listen(PORT, async () => {
  console.log(`Server on port ${PORT}`);

  try {
    const { default: puppeteer } = await import('puppeteer-core');
    const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

    const browser = await puppeteer.launch({
      executablePath: edgePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    // Desktop 1440
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(artifactDir, 'ruchi_hero_desktop.png'), fullPage: false });
    console.log('Desktop 1440 screenshot saved');

    // Scroll to Heritage section on desktop
    await page.evaluate(() => {
      const el = document.getElementById('heritage') || document.querySelector('section:nth-of-type(3)');
      if (el) el.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(artifactDir, 'ruchi_heritage_desktop.png'), fullPage: false });
    console.log('Heritage section screenshot saved');

    // Mobile 320
    const m320 = await browser.newPage();
    await m320.setViewport({ width: 320, height: 600 });
    await m320.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(r => setTimeout(r, 2000));
    await m320.screenshot({ path: path.join(artifactDir, 'ruchi_hero_mobile320.png'), fullPage: false });
    console.log('Mobile 320 screenshot saved');

    // Mobile 360
    const m360 = await browser.newPage();
    await m360.setViewport({ width: 360, height: 740 });
    await m360.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(r => setTimeout(r, 2000));
    await m360.screenshot({ path: path.join(artifactDir, 'ruchi_hero_mobile360.png'), fullPage: false });
    console.log('Mobile 360 screenshot saved');

    // Mobile 390
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 390, height: 844 });
    await mobilePage.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(r => setTimeout(r, 2000));
    await mobilePage.screenshot({ path: path.join(artifactDir, 'ruchi_hero_mobile390.png'), fullPage: false });
    console.log('Mobile 390 screenshot saved');

    // Mobile 430
    const m430 = await browser.newPage();
    await m430.setViewport({ width: 430, height: 932 });
    await m430.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(r => setTimeout(r, 2000));
    await m430.screenshot({ path: path.join(artifactDir, 'ruchi_hero_mobile430.png'), fullPage: false });
    console.log('Mobile 430 screenshot saved');

    // Product Detail Page
    const pdpPage = await browser.newPage();
    await pdpPage.setViewport({ width: 1440, height: 900 });
    await pdpPage.goto(`http://localhost:${PORT}/product/turmeric-powder`, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(r => setTimeout(r, 2000));
    await pdpPage.screenshot({ path: path.join(artifactDir, 'ruchi_product_detail.png'), fullPage: false });
    console.log('Product detail page screenshot saved');

    // Contact Page
    const contactPage = await browser.newPage();
    await contactPage.setViewport({ width: 1440, height: 900 });
    await contactPage.goto(`http://localhost:${PORT}/contact`, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(r => setTimeout(r, 2000));
    await contactPage.screenshot({ path: path.join(artifactDir, 'ruchi_contact.png'), fullPage: false });
    console.log('Contact page screenshot saved');

    await browser.close();
  } catch (err) {
    console.error('Puppeteer error:', err.message);
  } finally {
    server.close();
    process.exit(0);
  }
});
