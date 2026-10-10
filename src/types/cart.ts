import { Product, PackageOption } from './product';

export type CartItem = {
  id: string; // unique cart item id (e.g. productId-optionId)
  product: Product;
  selectedOption: PackageOption;
  quantity: number;
};
