import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '../types/cart';
import { Product, PackageOption } from '../types/product';

export interface LastAddedItem {
  product: Product;
  selectedOption: PackageOption;
  quantity: number;
  timestamp: number;
}

interface CartState {
  items: CartItem[];
  isDrawerOpen: boolean;
  lastAdded: LastAddedItem | null;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  addItem: (product: Product, option: PackageOption, quantity: number, openDrawer?: boolean) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  clearLastAdded: () => void;
  getCartCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,
      lastAdded: null,
      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
      clearLastAdded: () => set({ lastAdded: null }),
      addItem: (product, option, quantity, shouldOpenDrawer = false) => {
        set((state) => {
          const id = `${product.id}-${option.id}`;
          const existingItem = state.items.find((item) => item.id === id);

          const newItems = existingItem
            ? state.items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + quantity } : item
              )
            : [...state.items, { id, product, selectedOption: option, quantity }];

          return {
            items: newItems,
            isDrawerOpen: shouldOpenDrawer ? true : state.isDrawerOpen,
            lastAdded: {
              product,
              selectedOption: option,
              quantity,
              timestamp: Date.now(),
            },
          };
        });
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      getCartCount: () => get().items.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: 'ruchi-rich-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
