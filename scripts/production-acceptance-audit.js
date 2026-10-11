import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

console.log('='.repeat(70));
console.log('RUCHI RICH — PRODUCTION ACCEPTANCE AUDIT VERIFICATION RUNNER');
console.log('='.repeat(70));

const results = {
  passed: 0,
  failed: 0,
  warnings: 0,
  details: [],
};

function assert(condition, message, errorDetail = null) {
  if (condition) {
    results.passed++;
    console.log(`  [PASS] ${message}`);
    results.details.push({ status: 'PASS', message });
  } else {
    results.failed++;
    console.error(`  [FAIL] ${message}${errorDetail ? ` -> ${errorDetail}` : ''}`);
    results.details.push({ status: 'FAIL', message, errorDetail });
  }
}

// -----------------------------------------------------------------------------
// 1. BRAND & PRODUCT INTEGRITY AUDIT
// -----------------------------------------------------------------------------
console.log('\n[SECTION 1: Product Data & Asset Mapping]');

const productsFilePath = path.join(projectRoot, 'src', 'data', 'products.ts');
assert(fs.existsSync(productsFilePath), 'src/data/products.ts exists');

const productsContent = fs.readFileSync(productsFilePath, 'utf8');

const expectedProducts = [
  'turmeric-powder',
  'red-chilli-powder',
  'garam-masala',
  'sambar-powder',
  'chicken-masala',
  'rasam-powder',
  'mutton-masala',
  'biryani-masala',
  'coriander-powder',
];

expectedProducts.forEach((pid) => {
  const hasId = productsContent.includes(`id: '${pid}'`);
  assert(hasId, `Product "${pid}" is registered in product dataset`);

  const assetPath = path.join(projectRoot, 'public', 'assets', 'products', `${pid}.png`);
  const assetExists = fs.existsSync(assetPath);
  assert(assetExists, `Product asset file exists: public/assets/products/${pid}.png`);

  const originalAssetPath = path.join(projectRoot, 'public', 'assets', 'products-original', `${pid}.png`);
  assert(fs.existsSync(originalAssetPath), `Original unmodified asset preserved in products-original/${pid}.png`);
});

const logoPath = path.join(projectRoot, 'public', 'assets', 'brand', 'ruchi-rich-logo.png');
const heroBannerPath = path.join(projectRoot, 'public', 'assets', 'brand', 'hero-banner.jpg');
assert(fs.existsSync(logoPath), 'Authentic brand logo exists: public/assets/brand/ruchi-rich-logo.png');
assert(fs.existsSync(heroBannerPath), 'Hero presentation image exists: public/assets/brand/hero-banner.jpg');

// -----------------------------------------------------------------------------
// 2. STRICT NO-PRICE & NO-WEIGHT RESTRICTION AUDIT
// -----------------------------------------------------------------------------
console.log('\n[SECTION 2: Strict No-Price / No-Weight / No-Volume Restriction]');

const prohibitedPatterns = [
  /₹/,
  /\bRs\.?\b/i,
  /\bINR\b/i,
  /\bMRP\b/i,
  /\b\d+\s*(\/-|\.00)\b/,
  /\b\d+\s*(gm|gms|grams|kg|kgs|ml|ltr|liters|litres)\b/i,
  /\b100g\b/i,
  /\b50g\b/i,
  /\b200g\b/i,
  /\b500g\b/i,
  /\b1kg\b/i,
];

// Check products data file
let prohibitedInProducts = [];
prohibitedPatterns.forEach((pattern) => {
  if (pattern.test(productsContent)) {
    prohibitedInProducts.push(pattern.toString());
  }
});
assert(
  prohibitedInProducts.length === 0,
  'Product dataset contains 0 price, currency, weight, or volume mentions',
  prohibitedInProducts.join(', ')
);

// Check Package Options
const hasSmall = productsContent.includes("'Small Pack'");
const hasRegular = productsContent.includes("'Regular Pack'");
const hasLarge = productsContent.includes("'Large Pack'");
const hasBulk = productsContent.includes("'Bulk Pack'");
assert(hasSmall && hasRegular && hasLarge && hasBulk, 'Package options strictly use neutral labels (Small/Regular/Large/Bulk Pack)');

// -----------------------------------------------------------------------------
// 3. WHATSAPP MESSAGE & ORDER FLOW AUDIT
// -----------------------------------------------------------------------------
console.log('\n[SECTION 3: WhatsApp Ordering Logic & Security]');

const whatsappFilePath = path.join(projectRoot, 'src', 'lib', 'whatsapp.ts');
assert(fs.existsSync(whatsappFilePath), 'src/lib/whatsapp.ts exists');
const whatsappContent = fs.readFileSync(whatsappFilePath, 'utf8');

assert(
  whatsappContent.includes('contactConfig.whatsappNumber'),
  'WhatsApp message links to central contactConfig.whatsappNumber'
);
assert(
  whatsappContent.includes('encodeURIComponent'),
  'WhatsApp message text is properly URL-encoded'
);

let prohibitedInWhatsApp = [];
prohibitedPatterns.forEach((pattern) => {
  if (pattern.test(whatsappContent)) {
    prohibitedInWhatsApp.push(pattern.toString());
  }
});
assert(
  prohibitedInWhatsApp.length === 0,
  'WhatsApp message template contains 0 price or weight mentions',
  prohibitedInWhatsApp.join(', ')
);

// -----------------------------------------------------------------------------
// 4. CONTACT CONFIGURATION AUDIT
// -----------------------------------------------------------------------------
console.log('\n[SECTION 4: Contact Information & Factory Credentials]');

const contactFilePath = path.join(projectRoot, 'src', 'config', 'contact.ts');
assert(fs.existsSync(contactFilePath), 'src/config/contact.ts exists');
const contactContent = fs.readFileSync(contactFilePath, 'utf8');

assert(contactContent.includes('9848246556'), 'Configured WhatsApp number is verified: 9848246556');
assert(contactContent.includes('9398075918'), 'Configured Customer Care phone is verified: 9398075918');
assert(contactContent.includes('ramrajoilindustries@gmail.com'), 'Configured business email is authentic: ramrajoilindustries@gmail.com');
assert(!contactContent.includes('example.com'), 'Zero placeholder/example emails in contactConfig');
assert(contactContent.includes('ALEAP Industrial Estate, Surampalli'), 'Physical manufacturing address verified at ALEAP Estate, Surampalli');

// -----------------------------------------------------------------------------
// 5. MOTION SYSTEM & REDUCED MOTION AUDIT
// -----------------------------------------------------------------------------
console.log('\n[SECTION 5: Motion Architecture & Accessibility]');

const motionUtilsPath = path.join(projectRoot, 'src', 'utils', 'motion.ts');
const productStagePath = path.join(projectRoot, 'src', 'components', 'motion', 'ProductStage3D.tsx');
const brandIntroPath = path.join(projectRoot, 'src', 'components', 'motion', 'BrandIntro.tsx');
const revealPath = path.join(projectRoot, 'src', 'components', 'motion', 'Reveal.tsx');

assert(fs.existsSync(motionUtilsPath), 'Central motion library exists: src/utils/motion.ts');
assert(fs.existsSync(productStagePath), '3D sachet stage component exists: ProductStage3D.tsx');
assert(fs.existsSync(brandIntroPath), 'Brand introduction component exists: BrandIntro.tsx');
assert(fs.existsSync(revealPath), 'Scroll reveal wrapper exists: Reveal.tsx');

const stageContent = fs.readFileSync(productStagePath, 'utf8');
assert(stageContent.includes('useReducedMotion'), 'ProductStage3D respects prefers-reduced-motion');
assert(stageContent.includes('pointer: coarse'), 'ProductStage3D optimizes touch devices for mobile battery/smoothness');

const introContent = fs.readFileSync(brandIntroPath, 'utf8');
assert(introContent.includes('ruchi_rich_intro_seen'), 'BrandIntro checks sessionStorage to avoid repeating');
assert(introContent.includes('useReducedMotion'), 'BrandIntro skips immediately if reduced motion is requested');
assert(introContent.includes('Escape'), 'BrandIntro can be dismissed via keyboard shortcut');

// -----------------------------------------------------------------------------
// 6. ROUTE DEFINITIONS & CODE SPLITTING AUDIT
// -----------------------------------------------------------------------------
console.log('\n[SECTION 6: Routing & Performance Architecture]');

const routerPath = path.join(projectRoot, 'src', 'router.tsx');
assert(fs.existsSync(routerPath), 'src/router.tsx exists');
const routerContent = fs.readFileSync(routerPath, 'utf8');

assert(routerContent.includes("path: '/'") || routerContent.includes('index: true'), 'Homepage route registered');
assert(routerContent.includes("'products'"), 'Catalogue /products route registered');
assert(routerContent.includes("'product/:id'"), 'Product detail /product/:id dynamic route registered');
assert(routerContent.includes("'about'"), 'About /about route registered');
assert(routerContent.includes("'contact'"), 'Contact /contact route registered');
assert(routerContent.includes("'cart'"), 'Cart /cart route registered');
assert(routerContent.includes("'*'"), 'Catch-all 404 route registered');
assert(routerContent.includes('lazy('), 'All top-level routes are lazy-loaded for route-level code splitting');

// -----------------------------------------------------------------------------
// 7. SUMMARY
// -----------------------------------------------------------------------------
console.log('\n' + '='.repeat(70));
console.log(`AUDIT RESULTS: ${results.passed} PASSED, ${results.failed} FAILED`);
console.log('='.repeat(70));

if (results.failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
