'use client';

const { createContext, useState } = require('react');

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addItems = (item) => {
    const existing = cartItems.find((i) => i.id === item.id);
    if (existing) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const deleteItems = (id) => {
    setCartItems(cartItems.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItems, deleteItems }}>
      {children}
    </CartContext.Provider>
  );
};
