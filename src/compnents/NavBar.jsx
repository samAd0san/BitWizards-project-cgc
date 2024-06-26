import { useContext, useEffect, useState } from 'react';
import logo from '../assets/logo.png';
// React Icons
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { SlHandbag } from "react-icons/sl";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import ShouldRender from '../util/ShouldRender';
import UserContext from '../context/UserContext';
import CartContext from '../context/CartContext';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    const { cart } = useContext(CartContext); // using 'cart' to display the number of products added

    const onLogout = () => {
        localStorage.removeItem('token');

        // if the user logged out 
        setLoggedIn(false);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    /* This code snippet uses the useEffect hook, which runs after every render. It checks if the user is not logged in (isLoggedIn is false) 
      and if the current page is either the '/activities' or '/products' page. If both conditions are true, it redirects the user to the signin
      page using the navigate function from the react-router-dom package. By including [isLoggedIn, navigate] in the dependencies array, the 
      effect will be triggered whenever the isLoggedIn state or the navigate function changes. This ensures that the redirection logic is 
      applied whenever the user's authentication status or navigation function changes. */
    useEffect(() => {
        const currentPath = window.location.pathname;
        if (!isLoggedIn && (currentPath === '/activities' || currentPath === '/products')) {
            navigate('/signin');
            alert('Sign in is required');
        }
        console.log(currentPath);
    }, [isLoggedIn, navigate]);

    return (
        <>
            {/* Nav Bar Primary */}
            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto font-semibold border-b text-primary fixed top-0 right-0 left-0'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    {/* Nav Bar Primary */}
                    <div className='flex items-center space-x-14 '>
                        {/* Logo + Icon */}
                        <a href="/" className='flex text-3xl items-center font-semibold space-x-3 text-primary'>
                            <img className='w-11 h-11 inline-block items-center' src={logo} alt="Logo" /> <span>Swirl</span>
                        </a>

                        {/* Nav Items */}
                        <ul className='md:flex space-x-12 items-center mt-1 hidden'>
                            <li className='block hover:text-gray-300'><Link to='/'>Home</Link></li>
                            <li className='block hover:text-gray-300'><Link to='/features'>Features</Link></li>
                            <li className='block hover:text-gray-300'><Link to='/about'>About</Link></li>
                            <li className='block hover:text-gray-300'><Link to='/activities'>Activities</Link></li>
                        </ul>
                    </div>

                    {/* Right Side of the Nav bar */}
                    <div className='md:flex sm:ml-12 space-x-12 items-center hidden'>
                        {/* Products (React Icon)*/}
                        <Link to="/products" className='md:flex items-center hidden'>
                            <SlHandbag className='mr-2' /> <span className='hover:text-cyan-400 mt-1'>Products</span>
                        </Link>

                        {/* Added Cart Icon and navigate to Cart.jsx page*/}
                        <Link to="/cart" className='md:flex items-center hidden'>
                            <HiOutlineShoppingCart className='w-6 h-6' />
                            {cart.length > 0 && ( // Display only if the cart length is greater than 0
                                <span className='text-sm rounded-full w-5 h-5 flex items-center justify-center bg-red-500 text-white ml-1'>
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                        <ShouldRender when={!isLoggedIn}>
                            {/* Log in button  */}
                            <Link to="/signin" className='bg-secondary py-2 px-3 rounded-lg text-white hover:bg-cyan-400'>Login</Link>
                        </ShouldRender>
                        <ShouldRender when={isLoggedIn}>
                            {/* Sign up button  */}
                            <Link onClick={onLogout} className='bg-secondary py-2 px-3 rounded-lg text-white hover:bg-cyan-400'>Logout</Link>
                        </ShouldRender>
                    </div>

                    {/* Menu button on mobile device (Nav bar)*/}
                    <div className='md:hidden text-2xl flex space-x-4'>
                        <button className='text-3xl' onClick={toggleMenu}>
                            {isMenuOpen ? <FaXmark /> : <FaBars />}
                        </button>
                    </div>
                </div>
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className='mt-2 space-y-2 text-lg'>
                        {/* Nav Items for Mobile */}
                        <li onClick={toggleMenu} className='block hover:text-gray-300'><Link to='/'>Home</Link></li>
                        <li onClick={toggleMenu} className='block hover:text-gray-300'><Link to='/features'>Features</Link></li>
                        <li onClick={toggleMenu} className='block hover:text-gray-300'><Link to='/about'>About</Link></li>
                        <li onClick={toggleMenu} className='block hover:text-gray-300'><Link to='/activities'>Activities</Link></li>
                        <li onClick={toggleMenu} className='block hover:text-gray-300'><Link to='/products'>Products</Link></li>
                        <li onClick={toggleMenu} className='block hover:text-gray-300'><Link to='/cart'>Cart</Link></li>
                        <ShouldRender when={!isLoggedIn}>
                            <li onClick={toggleMenu} className='block hover:text-gray-300'><Link to='/signin'>Login</Link></li>
                        </ShouldRender>
                        <ShouldRender when={isLoggedIn}>
                            <li className='block hover:text-gray-300'><Link onClick={() => { toggleMenu(); onLogout(); }}>Logout</Link></li>
                        </ShouldRender>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
