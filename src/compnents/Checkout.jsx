import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiry, setExpiry] = useState('');
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        // Implement order placement logic, such as sending the data to a server
        console.log('Order placed with details:', { address1, address2, city, pincode, mobile, email, paymentMethod, cardNumber, cvv, expiry });
        setOrderPlaced(true);

        // Clear the cart
        localStorage.removeItem('cart');

        // Redirect to the '/products' page
        setTimeout(() => {
            // window.location.href = '/products';
            navigate('/products');
        }, 2000); // Adjust the delay as needed
    };

    return (
        <div className="mt-20 md:px-14 md:w-1/2 my-24 px-4 max-w-screen mx-auto space-y-6 shadow-lg p-4 m-4 ">
            <h2 className="text-3xl font-semibold text-primary">Checkout</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handlePlaceOrder(); }}>
                <div>
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
                    <h3 className="text-2xl font-semibold text-primary">Add Payment Method</h3>
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
                {paymentMethod === 'Card' && (
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="cardNumber" className="block text-lg font-medium text-gray-700">Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex space-x-4">
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
                            <div>
                                <label htmlFor="expiry" className="block text-lg font-medium text-gray-700">MM/YY</label>
                                <input
                                    type="text"
                                    id="expiry"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    value={expiry}
                                    onChange={(e) => setExpiry(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                )}
                <button type="submit" className="bg-primary text-white py-2 px-6 rounded hover:bg-cyan-400">Place Order</button>
            </form>
            {orderPlaced && (
                <div className="mt-4 text-green-600 text-xl">
                    Your order has been placed successfully!
                </div>
            )}
        </div>
    );
}

export default Checkout;