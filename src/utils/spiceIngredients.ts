export type CutoutType =
  | 'turmeric-root'
  | 'chilli'
  | 'cardamom'
  | 'coriander'
  | 'cinnamon'
  | 'pepper'
  | 'spices';

export interface ProductIngredientProfile {
  id: string;
  name: string;
  spiceColor: string;
  spiceHighlight: string;
  ambientGlow: string;
  accentBg: string;
  storyTitle: string;
  storySubtitle: string;
  storyDescription: string;
  ingredientBadges: string[];
  cutoutLeft: CutoutType;
  cutoutRight: CutoutType;
}

export const spiceIngredientProfiles: Record<string, ProductIngredientProfile> = {
  'turmeric-powder': {
    id: 'turmeric-powder',
    name: 'Turmeric Powder',
    spiceColor: '#D97706',
    spiceHighlight: '#FBBF24',
    ambientGlow: 'rgba(245, 158, 11, 0.35)',
    accentBg: 'from-amber-950/40 via-amber-900/20 to-transparent',
    storyTitle: 'Golden Vitality & Sun-Dried Rhizomes',
    storySubtitle: 'Pure Salem & Nizamabad Turmeric Varieties',
    storyDescription:
      'Carefully harvested fresh turmeric roots are dried under direct sunlight and slowly ground in low-temperature stone mills to retain active curcumin, deep earthy warmth, and natural golden brightness.',
    ingredientBadges: ['Sun-Dried Rhizomes', 'High Curcumin Content', 'Zero Artificial Dyes'],
    cutoutLeft: 'turmeric-root',
    cutoutRight: 'pepper',
  },
  'red-chilli-powder': {
    id: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    spiceColor: '#DC2626',
    spiceHighlight: '#F87171',
    ambientGlow: 'rgba(220, 38, 38, 0.35)',
    accentBg: 'from-red-950/40 via-red-900/20 to-transparent',
    storyTitle: 'Fiery Warmth & Crimson Depth',
    storySubtitle: 'Stemless Guntur & Byadgi Chillies',
    storyDescription:
      'Whole dried red chillies are carefully destemmed, cleaned of impurities, and cold-milled to preserve natural capsaicin and radiant deep red colour without any synthetic food dyes or coloring agents.',
    ingredientBadges: ['Stemless Whole Chillies', 'Balanced Pungency', 'Natural Radiant Colour'],
    cutoutLeft: 'chilli',
    cutoutRight: 'spices',
  },
  'garam-masala': {
    id: 'garam-masala',
    name: 'Garam Masala',
    spiceColor: '#B45309',
    spiceHighlight: '#F59E0B',
    ambientGlow: 'rgba(217, 119, 6, 0.35)',
    accentBg: 'from-amber-950/40 via-yellow-900/20 to-transparent',
    storyTitle: 'The Royal Bouquet of Whole Spices',
    storySubtitle: 'Generational Stone-Ground Formulation',
    storyDescription:
      'An artisanal secret ratio of whole green cardamom, Ceylon cinnamon, black peppercorns, cloves, and star anise, gently slow-roasted to awaken volatile essential oils before fine milling.',
    ingredientBadges: ['Green Cardamom & Cloves', 'Ceylon Cinnamon Quill', 'Slow-Roasted Blending'],
    cutoutLeft: 'cardamom',
    cutoutRight: 'spices',
  },
  'sambar-powder': {
    id: 'sambar-powder',
    name: 'Sambar Powder',
    spiceColor: '#EA580C',
    spiceHighlight: '#FB923C',
    ambientGlow: 'rgba(234, 88, 12, 0.35)',
    accentBg: 'from-orange-950/40 via-orange-900/20 to-transparent',
    storyTitle: 'Heritage Lentils & Toasted Spices',
    storySubtitle: 'Traditional South Indian Culinary Recipe',
    storyDescription:
      'Golden roasted toor dal and chana dal paired with whole coriander, fenugreek, and roasted red chillies create the thick, comforting aroma that defines authentic homestyle sambar.',
    ingredientBadges: ['Toasted Dal Bases', 'Fenugreek & Coriander', 'Homestyle South Indian'],
    cutoutLeft: 'coriander',
    cutoutRight: 'chilli',
  },
  'chicken-masala': {
    id: 'chicken-masala',
    name: 'Chicken Masala',
    spiceColor: '#C2410C',
    spiceHighlight: '#F97316',
    ambientGlow: 'rgba(194, 65, 12, 0.35)',
    accentBg: 'from-orange-950/40 via-red-900/20 to-transparent',
    storyTitle: 'Robust Savory Warmth & Aromatics',
    storySubtitle: 'Deep Pungency with Whole Spices',
    storyDescription:
      'Specially crafted with roasted cumin, black pepper, garlic hints, and toasted coriander to lock in rich, savory gravy depth and aromatic tender meat infusions.',
    ingredientBadges: ['Roasted Whole Cumin', 'Tellicherry Black Pepper', 'Savory Gravy Body'],
    cutoutLeft: 'pepper',
    cutoutRight: 'cinnamon',
  },
  'rasam-powder': {
    id: 'rasam-powder',
    name: 'Rasam Powder',
    spiceColor: '#CA8A04',
    spiceHighlight: '#EAB308',
    ambientGlow: 'rgba(202, 138, 4, 0.35)',
    accentBg: 'from-yellow-950/40 via-amber-900/20 to-transparent',
    storyTitle: 'Roasted Cumin & Crushed Pepper',
    storySubtitle: 'Invigorating Digestive Broth Spices',
    storyDescription:
      'Fresh whole cumin seeds, black peppercorns, and roasted coriander create an invigorating, tangy broth designed to soothe and refresh with generational Ayurvedic goodness.',
    ingredientBadges: ['Crushed Black Pepper', 'Whole Cumin Seeds', 'Traditional Broth Balance'],
    cutoutLeft: 'pepper',
    cutoutRight: 'coriander',
  },
  'mutton-masala': {
    id: 'mutton-masala',
    name: 'Mutton Masala',
    spiceColor: '#9A3412',
    spiceHighlight: '#EA580C',
    ambientGlow: 'rgba(154, 52, 18, 0.35)',
    accentBg: 'from-red-950/40 via-amber-950/20 to-transparent',
    storyTitle: 'Deep Roasted Amber & Rich Spices',
    storySubtitle: 'Intense Slow-Cooked Meat Aromas',
    storyDescription:
      'Dark slow-roasted whole cloves, black cardamom, star anise, and cinnamon create an intense, deeply penetrating aroma suited for rich, slow-simmered meat curries.',
    ingredientBadges: ['Black Cardamom & Cloves', 'Dark Roasted Cinnamon', 'Deep Gravy Penetration'],
    cutoutLeft: 'cinnamon',
    cutoutRight: 'spices',
  },
  'biryani-masala': {
    id: 'biryani-masala',
    name: 'Biryani Masala',
    spiceColor: '#EAB308',
    spiceHighlight: '#FDE047',
    ambientGlow: 'rgba(234, 179, 8, 0.35)',
    accentBg: 'from-yellow-950/40 via-amber-900/20 to-transparent',
    storyTitle: 'Regal Saffron & Whole Royal Spices',
    storySubtitle: 'Nawabi Dum Pukht Formulation',
    storyDescription:
      'Fragrant whole green cardamom, bay leaves, mace, cinnamon quills, and cloves ground to infuse basmati rice grains with the unmistakable perfume of royal Indian banquets.',
    ingredientBadges: ['Green Cardamom & Mace', 'Aromatic Bay Leaves', 'Regal Basmati Infusion'],
    cutoutLeft: 'cardamom',
    cutoutRight: 'cinnamon',
  },
  'coriander-powder': {
    id: 'coriander-powder',
    name: 'Coriander Powder',
    spiceColor: '#16A34A',
    spiceHighlight: '#86EFAC',
    ambientGlow: 'rgba(22, 163, 74, 0.35)',
    accentBg: 'from-emerald-950/40 via-green-900/20 to-transparent',
    storyTitle: 'Citrus Herbal Freshness & Whole Dhaniya',
    storySubtitle: 'Sun-Cured Green Coriander Seeds',
    storyDescription:
      'Plump sun-cured golden-green coriander seeds milled to retain their natural sweet, citrusy fragrance, acting as the quintessential aromatic foundation of everyday curries.',
    ingredientBadges: ['Sun-Cured Whole Seeds', 'Natural Citrus Aroma', 'Pure Ground Dhaniya'],
    cutoutLeft: 'coriander',
    cutoutRight: 'turmeric-root',
  },
};

export const defaultIngredientProfile: ProductIngredientProfile =
  spiceIngredientProfiles['garam-masala'];
