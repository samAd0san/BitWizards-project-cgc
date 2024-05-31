// src/components/ProductItem.jsx
import React, { useContext } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';

function Actions({ product }) { // declaring the props, The Actions component takes a product prop.
  const { dispatch } = useContext(CartContext); // It uses the useContext hook to access the dispatch function from CartContext.
  const navigate = useNavigate();

  const addToCart = () => { // addToCart is a function that dispatches an action to add the product to the cart.
    // dispatch is used to send actions that describe changes to the state
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1} }); // Added quantity property when adding a product to the cart.
    console.log(product);
  };

  const redirect = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1} });
    navigate('/checkout');
  }

  return (
    <div className="mt-2 flex font-medium">
      <button
        onClick={addToCart}
        className="border gap-1 btnPrimary rounded-lg m-2 p-2 h-12 flex items-center whitespace-nowrap"
      >
        Add to cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </button>
      <button
        onClick={redirect}
        className="border btnSecondary rounded-lg m-2 p-2 h-12 flex items-center whitespace-nowrap"
      >
        Buy Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

function ProductItem({ product }) { // 1. props coming to this func via ProductList
  return (
    <div className="flex m-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div>
        <Link to={"/products/" + product.id}>
          <img
            className="p-8 h-64 w-30"
            src={product.image}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-primary">
            {product.title}
          </h5>
          <div className="text-xl m-4 ml-0 font-bold text-tartiary pl-3">
            Price ${product.price}
          </div>
          <Actions product={product} /> {/* 2. The props is recieved via ProductItem */}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;