// src/context/CartContext.js
import React, { createContext, useEffect, useReducer } from 'react';

const CartContext = createContext(); // It is to share the cart state across the component tree.

// 2. declare the cartReducer function
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

// 1. Declare the CartProvider
export const CartProvider = ({ children }) => { // CartProvider is a component that uses the useReducer hook to manage the cart state.

  // useReducer initializes the cart state as an empty array and provides a dispatch function to send actions to the reducer.
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem('cart');
    try {
      // When retrieving data from the local storage (localStorage.getItem()), the data is retrieved as a string. To use it as JavaScript objects, it needs to be converted back from its string representation to the original JavaScript objects.
      return localData ? JSON.parse(localData) : [];
    } catch (e) {
      console.error("Parsing error:", e);
      return [];
    }
  });

  useEffect(() => {
    // JavaScript objects cannot be directly stored; they must be converted to strings first. Serialization converts JavaScript objects into a string representation which can then be stored in the local storage.
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    // CartContext.Provider makes the cart state and dispatch function available to all components within its tree.
    // the children prop represents the components that will be wrapped by the CartProvider and thus have access to the cart context.
    <CartContext.Provider value={{ cart, dispatch }}> 
      {children} 
    </CartContext.Provider>
  );
};

export default CartContext;