// src/context/CartContext.js
import React, { createContext, useEffect, useReducer } from 'react';

const CartContext = createContext(); // It is to share the cart state across the component tree.

const cartReducer = (state, action) => { // cartReducer is a function that takes the current state and an action, then returns a new state.
  switch (action.type) { // When the action type is 'ADD_TO_CART',then only it adds the new item (from action.payload) to the cart.
    case 'ADD_TO_CART':
      const existingProductIndex = state.findIndex(item => item.id === action.payload.id);
      
      if (existingProductIndex !== -1) {
        const updatedCart = state.map((item, index) =>
          index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        return updatedCart;
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case 'INCREMENT':
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case 'DECREMENT':
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );

    case 'REMOVE':
      return state.filter(item => item.id !== action.payload.id);

    case 'SET_CART':
      return action.payload;

    default:
      return state; // For any other action type, it returns the current state unchanged.
  }
};

export const CartProvider = ({ children }) => { // CartProvider is a component that uses the useReducer hook to manage the cart state.

  // useReducer initializes the cart state as an empty array and provides a dispatch function to send actions to the reducer.
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem('cart');
    try {

      return localData ? JSON.parse(localData) : [];
    } catch (e) {
      console.error("Parsing error:", e);

      return [];
    }
  });


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    // CartContext.Provider makes the cart state and dispatch function available to all components within its tree.
    <CartContext.Provider value={{ cart, dispatch }}>

      {/* In the CartProvider component, the children prop represents the components that will be wrapped by the CartProvider and thus have 
      access to the cart context. The children prop is automatically passed to the CartProvider when you wrap your application or parts of 
      your application with the CartProvider. */}
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;