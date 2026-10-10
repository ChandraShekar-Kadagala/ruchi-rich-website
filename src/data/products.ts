import { Product, PackageOption } from '../types/product';

const defaultOptions: PackageOption[] = [
  { id: 'small', label: 'Small Pack' },
  { id: 'regular', label: 'Regular Pack' },
  { id: 'large', label: 'Large Pack' },
  { id: 'bulk', label: 'Bulk Pack' },
];

export const categories = [
  'All',
  'Pure Spices',
  'Blended Spices',
];

export const products: Product[] = [
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder',
    category: 'Pure Spices',
    image: '/assets/products/turmeric-powder.png',
    shortDescription: 'Golden goodness for everyday cooking',
    description: 'Our premium Turmeric Powder is sourced from the finest farms, ground to perfection to retain its natural oils, vibrant color, and rich aroma. An essential in every Indian kitchen for health and flavor.',
    options: defaultOptions,
    available: true,
    badges: ['Bestseller']
  },
  {
    id: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    category: 'Pure Spices',
    image: '/assets/products/red-chilli-powder.png',
    shortDescription: 'Vibrant color and perfect heat',
    description: 'Add the perfect amount of spice and a rich red hue to your dishes. Made from carefully selected, sun-dried red chillies for an authentic taste.',
    options: defaultOptions,
    available: true,
  },
  {
    id: 'garam-masala',
    name: 'Garam Masala',
    category: 'Blended Spices',
    image: '/assets/products/garam-masala.png',
    shortDescription: 'Aromatic blend of whole spices',
    description: 'A signature blend of roasted whole spices that brings warmth, depth, and an irresistible aroma to your curries and gravies.',
    options: defaultOptions,
    available: true,
    badges: ['Premium']
  },
  {
    id: 'sambar-powder',
    name: 'Sambar Powder',
    category: 'Blended Spices',
    image: '/assets/products/sambar-powder.png',
    shortDescription: 'Traditional South Indian flavor',
    description: 'Recreate the authentic taste of traditional South Indian sambar with our expertly crafted blend of roasted lentils and spices.',
    options: defaultOptions,
    available: true,
  },
  {
    id: 'chicken-masala',
    name: 'Chicken Masala',
    category: 'Blended Spices',
    image: '/assets/products/chicken-masala.png',
    shortDescription: 'Rich and robust flavors for chicken dishes',
    description: 'Elevate your chicken curries and fries with this robust, savory blend of spices designed to bring out the best in poultry.',
    options: defaultOptions,
    available: true,
  },
  {
    id: 'rasam-powder',
    name: 'Rasam Powder',
    category: 'Blended Spices',
    image: '/assets/products/rasam-powder.png',
    shortDescription: 'Tangy, spicy, and comforting',
    description: 'The secret to the perfect, comforting bowl of rasam. A balanced mix of pepper, cumin, coriander, and dal.',
    options: defaultOptions,
    available: true,
  },
  {
    id: 'mutton-masala',
    name: 'Mutton Masala',
    category: 'Blended Spices',
    image: '/assets/products/mutton-masala.png',
    shortDescription: 'Deep, intense spice blend for meat',
    description: 'A bold and aromatic spice mix tailored perfectly to tenderize meat and create rich, flavorful mutton gravies.',
    options: defaultOptions,
    available: true,
  },
  {
    id: 'biryani-masala',
    name: 'Biryani Masala',
    category: 'Blended Spices',
    image: '/assets/products/biryani-masala.png',
    shortDescription: 'Royal aroma for the perfect biryani',
    description: 'Infuse your biryani with the royal aroma of premium whole spices. Just a spoonful makes every grain of rice fragrant and delicious.',
    options: defaultOptions,
    available: true,
    badges: ['Chef\'s Choice']
  },
  {
    id: 'coriander-powder',
    name: 'Coriander Powder',
    category: 'Pure Spices',
    image: '/assets/products/coriander-powder.png',
    shortDescription: 'Fresh and earthy culinary staple',
    description: 'Ground from the freshest coriander seeds, this powder adds a mild, earthy, and citrusy flavor to your everyday cooking.',
    options: defaultOptions,
    available: true,
  }
];
