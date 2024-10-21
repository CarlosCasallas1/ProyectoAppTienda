import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../../UI/Inventory'; // Asegúrate de ajustar la ruta según tu proyecto

// Definir la interfaz del contexto del carrito
interface CartItem {
  item: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  totalValue: number;
  addItemToCart: (item: Product) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItemFromCart: (id: number) => void; // Agregada la función para eliminar el item completamente
}

// Crear el contexto del carrito
const CartContext = createContext<CartContextType>({
  cartItems: [],
  totalValue: 0,
  addItemToCart: () => {},
  decreaseItemQuantity: () => {},
  removeItemFromCart: () => {}, // Función vacía inicial
});

// Proveedor del contexto del carrito
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);

  useEffect(() => {
    const calculateTotalValue = () => {
      const total = cartItems.reduce(
        (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
        0
      );
      setTotalValue(total);
    };
    calculateTotalValue();
  }, [cartItems]);

  const addItemToCart = (item: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.item.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { item, quantity: 1 }];
      }
    });
  };

  const decreaseItemQuantity = (id: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((cartItem) =>
          cartItem.item.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        return prevItems.filter((cartItem) => cartItem.item.id !== id);
      }
    });
  };

  const removeItemFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalValue,
        addItemToCart,
        decreaseItemQuantity,
        removeItemFromCart, // Proveer la función para eliminar un item
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del carrito
export const useCart = () => useContext(CartContext);
