import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, dispatch } = useContext(CartContext);

    // Calculating the total amount of all the products added in the cart
    // reduce is a method that processes each item in the array and reduces it to a single value.
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(1); // total is the accumulator that holds the running total of the prices, 0 is the initial value of the accumulator (total).
    // toFixed(1): This method formats the resulting total amount to one decimal place.


    /* SO BASICALLY THESE FUNCTIONS say the reducer that the user whats to increment the quantity of the product in cart, so on recieving this message the reducer updates the state */


    // We are giving props so that the respective function knows to update which product, which depends on the prop 'item'.
    const increment = (item) => { // When the increment function is called, it dispatches an action to the reducer. The reducer then processes this action and updates the state accordingly
        dispatch({ type: 'INCREMENT', payload: item });
    };

    const decrement = (item) => { // After giving the action to the Reducer, CartReducer will then handle this action by finding the item in the cart and decreasing its quantity, but only if the quantity is greater than 1.
        dispatch({ type: 'DECREMENT', payload: item });
    };

    const remove = (item) => { // After giving the action to the Reducer, Cartreducer will handle this action by filtering out the item from the cart, effectively removing it.
        dispatch({ type: 'REMOVE', payload: item });
    };

    // Just for the Clarity
    const handleCheckout = () => { // this function logs the current state of the cart to the console, indicating the items that are being checked out. 
        console.log('Checkout:', cart);
    };

    return (
        <div className='mt-20 md:px-14 my-24 px-4 max-w-screen mx-auto space-y-6'>
            {/* Heading */}
            <h2 className='text-3xl font-semibold text-primary'>My Cart</h2>

            <div className="grid grid-cols-1 gap-6">
                {/* item allows us to access the properties of each product in the cart, while index helps in uniquely identifying and tracking items
                within the array, especially when rendering them in a list. */}
                {cart.map((item, index) => (
                    <div key={index} className="border rounded-md overflow-hidden p-4 shadow-sm">

                        <div className="md:flex items-center space-y-2">
                            {/* Image of the Product */}
                            <img className="md:h-32 md:w-auto md:object-contain" src={item.image} alt={item.title} />

                            <div className="md:ml-4 flex-grow">
                                {/* Displaying the Title */}
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                {/* Displaying the price and quantity */}
                                <p className="text-gray-600">${item.price} x {item.quantity}</p>
                            </div>

                            <div className="flex items-center space-x-4 md:ml-auto">
                                {/* On Decrement */}
                                <button onClick={() => decrement(item)} className="px-4 py-2 bg-gray-200 text-gray-600 rounded">-</button>

                                {/* Displaying the quantity */}
                                <span className="text-xl">{item.quantity}</span>

                                {/* On Increment */}
                                <button onClick={() => increment(item)} className="px-4 py-2 bg-gray-200 text-gray-600 rounded">+</button>

                                {/* Remove button */}
                                <button onClick={() => remove(item)} className="px-4 py-2 bg-red-500 text-white rounded">Remove</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center">
                {/* Displaying the total Amount */}
                <div>
                    <h3 className="text-xl font-semibold text-primary">Total Amount: ${totalAmount}</h3>
                </div>

                {/* Checkout button redirects to checkout page */}
                <Link to='/checkout'>
                    <button onClick={handleCheckout} className="bg-primary text-white py-2 px-6 rounded hover:bg-cyan-400">Checkout</button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;
