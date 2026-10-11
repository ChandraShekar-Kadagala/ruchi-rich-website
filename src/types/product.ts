export type PackageOption = {
  id: string;
  label: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  shortDescription: string;
  options: PackageOption[];
  available: boolean;
  badges?: string[];
  tagline?: string;
  aromaProfile?: string;
  flavorNotes?: string[];
  culinaryUses?: string[];
};
