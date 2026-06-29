import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../types/product";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  get totalItems(): number;
  get subtotal(): number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const items = get().items;
        const existingItem = items.find((item) => item._id === product._id);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item._id === product._id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          });
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] });
        }
      },
      removeItem: (id) =>
        set({ items: get().items.filter((item) => item._id !== id) }),
      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map((item) =>
            item._id === id
              ? { ...item, quantity: Math.max(1, quantity) }
              : item,
          ),
        }),
      clearCart: () => set({ items: [] }),
      get totalItems() {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      get subtotal() {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
      },
    }),
    { name: "stylehub-cart" },
  ),
);
