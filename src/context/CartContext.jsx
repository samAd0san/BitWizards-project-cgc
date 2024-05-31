// src/context/CartContext.js
import React, { createContext, useEffect, useReducer } from 'react';

const CartContext = createContext(); // It is to share the cart state across the component tree.

// 2. declare the cartReducer function
const cartReducer = (state, action) => { // cartReducer is a function that takes the current state and an action, then returns a new state.
  switch (action.type) {

    case 'ADD_TO_CART': //  Handles adding items to the cart
    // Checks if the item being added (action.payload) already exists in the cart by finding its index in the state array using findIndex.
    // We are checking this bcoz we don't want to add the duplicate products more than one time rather just increase its quantity
      const existingProductIndex = state.findIndex(item => item.id === action.payload.id);
      
      // If the item already exists (existingProductIndex !== -1), it updates the quantity of that item by mapping over the state array and incrementing the quantity of the item found at the existingProductIndex.
      if (existingProductIndex !== -1) {
        const updatedCart = state.map((item, index) =>
          // For each item in the state array, this checks if the current index matches the existingProductIndex
          index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        // return this to the state
        return updatedCart;
      }
      // If the item doesn't exist in the cart, it adds a new entry to the state array with a quantity of 1 using the spread operator (...) to create a new array with the existing state plus the new item and quantity.
      return [...state, { ...action.payload, quantity: 1 }];

    case 'INCREMENT':
      return state.map((item) =>
        // This increases the quantity by 1
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case 'DECREMENT':
      return state.map((item) =>
        // This decreases the quantity by 1
        item.id === action.payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );

    case 'REMOVE':
      // Removes the particular item
      return state.filter(item => item.id !== action.payload.id); //  filters the current state to remove the item that matches the id provided in action.payload.
      // check README for more info.

    case 'SET_CART': // The 'SET_CART' case is used to replace the current cart state entirely with the data provided in action.payload.
      // Check README for more info.
      return action.payload;

    default:
      return state; // For no any other action type, it returns the current state unchanged.
  }
};

// 1. Declare the CartProvider
export const CartProvider = ({ children }) => { // CartProvider is a component that uses the useReducer hook to manage the cart state.

  // This code block initializes the cart state by checking that any updates to the cart state are automatically synchronized with the local storage 
  // and retrieving any existing cart data from the local storage when the component is first rendered.
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
    // We are retrieving the existing 'cart' data if it is present in the localStorage
    const localData = localStorage.getItem('cart');
    try {
      // When retrieving data from the local storage (localStorage.getItem()), the data is retrieved as a string. To use it as JavaScript objects, it needs to be converted back from its string representation to the original JavaScript objects.
      return localData ? JSON.parse(localData) : [];
    } catch (e) {
      console.error("Parsing error:", e);
      return [];
    }
  });

  // SAVING THE STATE IN THE LOCAL STORAGE, BY CONVERTING IT INTO A STRING.
  //  This useEffect hook ensures that every time the cart state changes, the new cart state is serialized and saved to local storage.
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