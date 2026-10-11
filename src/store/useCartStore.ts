import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '../types/cart';
import { Product, PackageOption } from '../types/product';

interface CartState {
  items: CartItem[];
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  addItem: (product: Product, option: PackageOption, quantity: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,
      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
      addItem: (product, option, quantity) => {
        set((state) => {
          const id = `${product.id}-${option.id}`;
          const existingItem = state.items.find((item) => item.id === id);

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + quantity } : item
              ),
              isDrawerOpen: true,
            };
          }

          return {
            items: [...state.items, { id, product, selectedOption: option, quantity }],
            isDrawerOpen: true,
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
