// src/components/OrderConfirmation.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderConfirmation() {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear the cart
        localStorage.removeItem('cart');
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-green-500 text-6xl">&#10004;</div>
            <h2 className="text-3xl font-semibold text-primary mt-4">Your order has been placed successfully!</h2>
            <button 
                className="bg-primary text-white py-2 px-6 rounded hover:bg-cyan-400 mt-4"
                onClick={() => navigate('/products')}
            >
                Continue Shopping
            </button>
        </div>
    );
}

export default OrderConfirmation;
