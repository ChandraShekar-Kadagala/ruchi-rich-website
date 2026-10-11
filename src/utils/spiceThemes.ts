export interface SpiceTheme {
  name: string;
  primary: string;
  secondary: string;
  glow: string;
  particleColors: string[];
}

export const spiceThemes: Record<string, SpiceTheme> = {
  'turmeric-powder': {
    name: 'Turmeric Gold',
    primary: '#F59E0B',
    secondary: '#D97706',
    glow: 'rgba(245, 158, 11, 0.35)',
    particleColors: ['#FBBF24', '#F59E0B', '#D97706', '#FEF3C7'],
  },
  'red-chilli-powder': {
    name: 'Fiery Crimson',
    primary: '#DC2626',
    secondary: '#B91C1C',
    glow: 'rgba(220, 38, 38, 0.35)',
    particleColors: ['#EF4444', '#DC2626', '#F87171', '#FEE2E2'],
  },
  'garam-masala': {
    name: 'Royal Amber',
    primary: '#D97706',
    secondary: '#92400E',
    glow: 'rgba(217, 119, 6, 0.35)',
    particleColors: ['#F59E0B', '#D97706', '#B45309', '#FDE68A'],
  },
  'sambar-powder': {
    name: 'Toasted Ochre',
    primary: '#EA580C',
    secondary: '#C2410C',
    glow: 'rgba(234, 88, 12, 0.35)',
    particleColors: ['#F97316', '#EA580C', '#FB923C', '#FFEDD5'],
  },
  'chicken-masala': {
    name: 'Bold Savory Rust',
    primary: '#C2410C',
    secondary: '#9A3412',
    glow: 'rgba(194, 65, 12, 0.35)',
    particleColors: ['#EA580C', '#C2410C', '#F97316', '#FDE047'],
  },
  'rasam-powder': {
    name: 'Roasted Cumin & Pepper',
    primary: '#CA8A04',
    secondary: '#854D0E',
    glow: 'rgba(202, 138, 4, 0.35)',
    particleColors: ['#EAB308', '#CA8A04', '#78350F', '#FEF08A'],
  },
  'mutton-masala': {
    name: 'Deep Roasted Amber',
    primary: '#9A3412',
    secondary: '#7C2D12',
    glow: 'rgba(154, 52, 18, 0.35)',
    particleColors: ['#C2410C', '#9A3412', '#D97706', '#FED7AA'],
  },
  'biryani-masala': {
    name: 'Regal Saffron Gold',
    primary: '#EAB308',
    secondary: '#CA8A04',
    glow: 'rgba(234, 179, 8, 0.35)',
    particleColors: ['#FDE047', '#EAB308', '#F59E0B', '#FEF9C3'],
  },
  'coriander-powder': {
    name: 'Herbal Citrus Green',
    primary: '#16A34A',
    secondary: '#15803D',
    glow: 'rgba(22, 163, 74, 0.35)',
    particleColors: ['#22C55E', '#16A34A', '#84CC16', '#DCFCE7'],
  },
};

export const defaultSpiceTheme: SpiceTheme = {
  name: 'Golden Spice',
  primary: '#D6A52A',
  secondary: '#B8861B',
  glow: 'rgba(214, 165, 42, 0.35)',
  particleColors: ['#FBBF24', '#D6A52A', '#F59E0B', '#FEF3C7'],
};
