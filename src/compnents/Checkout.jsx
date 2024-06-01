import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext'; // Import the CartContext

function Checkout() {
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiry, setExpiry] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);

    const { dispatch } = useContext(CartContext); // Get the dispatch function from the context
    const navigate = useNavigate();

    /*
        This useEffect hook runs whenever orderPlaced changes. If an order has been placed (orderPlaced is true), it clears the cart by dispatching an 
        action to the context, removes the cart from localStorage, and redirects the user to the order confirmation page.
    */
    useEffect(() => {
        if (orderPlaced) {
            // Clear the cart from context
            dispatch({ type: 'SET_CART', payload: [] });
            // Remove cart from localStorage
            localStorage.removeItem('cart');
            // Redirect to the order confirmation page
            navigate('/order-confirmation');
        }
    }, [orderPlaced, dispatch, navigate]);

    const handlePlaceOrder = () => {
        // Implement order placement logic, such as sending the data to a server
        console.log('Order placed with details:', { address1, address2, city, pincode, mobile, email, paymentMethod, cardNumber, cvv, expiry });
        setOrderPlaced(true);
    };

    const formatCardNumber = (value) => {
        // This function removes any existing spaces (value.replace(/\s?/g, '')), then inserts a space after every 4 digits (.replace(/(\d{4})/g, '$1 ')), and trims any trailing spaces (.trim()).
        return value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
    };

    const handleCardNumberChange = (e) => {
        // This function gets called whenever the card number input field changes. It formats the card number using formatCardNumber and then updates the state with the formatted value.
        const formattedCardNumber = formatCardNumber(e.target.value);
        setCardNumber(formattedCardNumber);
    };

    const formatExpiryDate = (value) => {
        // This function removes any non-numeric characters (value.replace(/[^0-9]/g, '')), then inserts a slash after the first two digits (.replace(/(\d{2})(\d{0,2})/, '$1/$2')).
        return value.replace(/[^0-9]/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2');
    };

    const handleExpiryChange = (e) => {
        // This function gets called whenever the expiry date input field changes. It formats the expiry date using formatExpiryDate and then updates the state with the formatted value.
        const formattedExpiry = formatExpiryDate(e.target.value);
        setExpiry(formattedExpiry);
    };

    return (
        <div className="mt-20 md:px-14 md:w-1/2 my-24 px-4 max-w-screen mx-auto space-y-6 shadow-lg p-4 m-4 ">
            {/* Heading */}
            <h2 className="text-3xl font-semibold text-primary">Checkout</h2>
            {/* On Placing the Order */}
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handlePlaceOrder(); }}>
                <div>
                    {/* 1st Label: Address 1 */}
                    <label htmlFor="address1" className="block text-lg font-medium text-gray-700">Address 1</label>
                    <input
                        type="text"
                        id="address1"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        value={address1}
                        onChange={(e) => setAddress1(e.target.value)}
                        required
                    />
                </div>
                <div>
                    {/* 2nd Label: Address 2 */}
                    <label htmlFor="address2" className="block text-lg font-medium text-gray-700">Address 2</label>
                    <input
                        type="text"
                        id="address2"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                    />
                </div>
                <div>
                    {/* 3rd Label: City */}
                    <label htmlFor="city" className="block text-lg font-medium text-gray-700">City</label>
                    <input
                        type="text"
                        id="city"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>
                <div>
                    {/* 4th Label: Pincode */}
                    <label htmlFor="pincode" className="block text-lg font-medium text-gray-700">Pincode</label>
                    <input
                        type="text"
                        id="pincode"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                    />
                </div>
                <div>
                    {/* 5th Label: Mobile Number */}
                    <label htmlFor="mobile" className="block text-lg font-medium text-gray-700">Mobile Number</label>
                    <input
                        type="tel"
                        id="mobile"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                </div>
                <div>
                    {/* 6th Label: Email */}
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    {/* Heading: Payment Method */}
                    <h3 className="text-2xl font-semibold text-primary">Add Payment Method</h3>

                    {/* Select the payment method */}
                    <select
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required
                    >
                        <option value="">Select Payment Method</option>
                        <option value="COD">Cash on Delivery</option>
                        <option value="Card">Card Payment</option>
                    </select>
                </div>
                {/* If the 'Card' option is selected display the below part */}
                {paymentMethod === 'Card' && (
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="cardNumber" className="block text-lg font-medium text-gray-700">Card Number</label>
                            {/* Card Number */}
                            <input
                                type="text"
                                id="cardNumber"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                required
                            />
                        </div>
                        <div className="flex space-x-4">

                            {/* CVV */}
                            <div>
                                <label htmlFor="cvv" className="block text-lg font-medium text-gray-700">CVV</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    required
                                />
                            </div>

                            {/* MM/YY */}
                            <div>
                                <label htmlFor="expiry" className="block text-lg font-medium text-gray-700">MM/YY</label>
                                <input
                                    type="text"
                                    id="expiry"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    value={expiry}
                                    onChange={handleExpiryChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                )}
                <button type="submit" className="bg-primary text-white py-2 px-6 rounded hover:bg-cyan-400 transition-all duration-300">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;
