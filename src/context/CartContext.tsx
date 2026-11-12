import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/berriData';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  totalCount: number;
  subtotal: number;
  freeShippingThreshold: number;
  remainingForFreeShipping: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Initial sample items for realistic demo
    return [
      {
        product: {
          id: 'dragon-fruit',
          name: 'Dragon Fruit',
          line: 'fit',
          lineLabel: 'Berri Fit® Active Hydration',
          price: '$14.99',
          size: '16 fl oz (473 mL)',
          calories: '35 cal / serving',
          sugar: '6g natural sugar',
          color: '#FF2E93',
          glowColor: 'rgba(255, 46, 147, 0.45)',
          secondaryColor: '#00B4D8',
          textColor: '#880E4F',
          heroRender: '/assets/hero-renders/dragon-fruit-hero.webp',
          cutout: '/assets/cutouts/fit/dragon-fruit.webp',
          description: 'A smooth, refreshing tropical blend of coconut, dragon fruit, and raspberries.',
          officialUrl: 'https://berriorganics.com/products/dragon-fruit',
          keyIngredients: ['Organic Dragon Fruit', 'Coconut Water', 'Maca Root'],
          benefits: ['Plant-Based Electrolytes']
        },
        quantity: 1
      },
      {
        product: {
          id: 'strawberry',
          name: 'Strawberry',
          line: 'lyte',
          lineLabel: 'Berri Lyte® Pediatrician Approved',
          price: '$16.99',
          size: '33.8 fl oz (1 L)',
          calories: '25 cal / serving',
          sugar: '4g natural sugar',
          color: '#E63946',
          glowColor: 'rgba(230, 57, 70, 0.45)',
          secondaryColor: '#00B4D8',
          textColor: '#B71C1C',
          heroRender: '/assets/hero-renders/strawberry-hero.webp',
          cutout: '/assets/cutouts/lyte/strawberry.webp',
          description: 'Pediatrician-approved oral electrolyte solution crafted with real organic strawberries.',
          officialUrl: 'https://berriorganics.com/products/strawberry',
          keyIngredients: ['Organic Strawberry Puree', 'Organic Coconut Water'],
          benefits: ['Meets WHO Oral Rehydration Criteria']
        },
        quantity: 2
      }
    ];
  });

  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen(prev => !prev);

  const addToCart = (product: Product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce((sum, item) => {
    const numericPrice = parseFloat(item.product.price.replace('$', '')) || 0;
    return sum + numericPrice * item.quantity;
  }, 0);

  const freeShippingThreshold = 75.0;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalCount,
        subtotal,
        freeShippingThreshold,
        remainingForFreeShipping
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

