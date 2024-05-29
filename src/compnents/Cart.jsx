// src/components/Cart.js
import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

function Cart() {
    const { cart } = useContext(CartContext); // The cart array is extracted from the context, which contains the items in the cart.

    return (
        <div className='mt-20 md:px-14 my-24 px-4 max-w-screen mx-auto space-y-2'>
            <h2 className='text-3xl font-semibold text-primary'>My Cart</h2>
            <ol>
                {cart.map((item, index) => ( // Iterates over the cart array.
                    <li key={index}> 
                        <div className='text-xl text-gray-800 border-b-2 border-gray-300'>
                            {index + 1}. {item.title} - ${item.price}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Cart;
