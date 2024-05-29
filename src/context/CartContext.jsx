// src/context/CartContext.js
import React, { createContext, useReducer } from 'react';

const CartContext = createContext(); // It is to share the cart state across the component tree.

const cartReducer = (state, action) => { // cartReducer is a function that takes the current state and an action, then returns a new state.
  switch (action.type) { // When the action type is 'ADD_TO_CART',then only it adds the new item (from action.payload) to the cart.
    case 'ADD_TO_CART':
      return [...state, action.payload]; // when the addToCart button is triggered all the products gets added in the array (which is declared in the useReducer())
    default:
      return state; // For any other action type, it returns the current state unchanged.
  }
};

export const CartProvider = ({ children }) => { // CartProvider is a component that uses the useReducer hook to manage the cart state.

  // useReducer initializes the cart state as an empty array and provides a dispatch function to send actions to the reducer.
  const [cart, dispatch] = useReducer(cartReducer, []);

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