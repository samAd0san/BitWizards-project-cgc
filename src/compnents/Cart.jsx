import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, dispatch } = useContext(CartContext);
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(1);

    const increment = (item) => {
        dispatch({ type: 'INCREMENT', payload: item });
    };

    const decrement = (item) => {
        dispatch({ type: 'DECREMENT', payload: item });
    };

    const remove = (item) => {
        dispatch({ type: 'REMOVE', payload: item });
    };

    const handleCheckout = () => {
        console.log('Checkout:', cart);
    };

    return (
        <div className='mt-20 md:px-14 my-24 px-4 max-w-screen mx-auto space-y-6'>
            <h2 className='text-3xl font-semibold text-primary'>My Cart</h2>
            <div className="grid grid-cols-1 gap-6">
                {cart.map((item, index) => (
                    <div key={index} className="border rounded-md overflow-hidden p-4 shadow-sm">
                        <div className="md:flex items-center space-y-2">
                            <img className="md:h-32 md:w-auto md:object-contain" src={item.image} alt={item.title} />
                            <div className="md:ml-4 flex-grow">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-gray-600">${item.price} x {item.quantity}</p>
                            </div>
                            <div className="flex items-center space-x-4 md:ml-auto">
                                <button onClick={() => decrement(item)} className="px-4 py-2 bg-gray-200 text-gray-600 rounded">-</button>
                                <span className="text-xl">{item.quantity}</span>
                                <button onClick={() => increment(item)} className="px-4 py-2 bg-gray-200 text-gray-600 rounded">+</button>
                                <button onClick={() => remove(item)} className="px-4 py-2 bg-red-500 text-white rounded">Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-semibold text-primary">Total Amount: ${totalAmount}</h3>
                </div>
                <Link to='/checkout'>
                    <button onClick={handleCheckout} className="bg-primary text-white py-2 px-6 rounded hover:bg-cyan-400">Checkout</button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;
