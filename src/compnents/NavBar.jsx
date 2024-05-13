import { useState } from 'react';
import logo from '../assets/logo.png'
// React Icons
import { SlHandbag } from "react-icons/sl";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            {/* Nav Bar Primary */}
            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto font-semibold border-b text-primary fixed top-0 right-0 left-0'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    {/* Left Side of the Nav bar */}
                    <div className='flex items-center space-x-14 '>
                        {/* Logo + Icon */}
                        <a href="/" className='flex text-3xl items-center font-semibold space-x-3 text-primary'>
                            <img className='w-11 h-11 inline-block items-center' src={logo} alt="Logo" /> <span>Swirl</span>
                        </a>

                        {/* Nav Items */}
                        <ul className='md:flex space-x-12 items-center mt-1 hidden'>
                            {/* {
                                // Displaying all the nav items by iterating using map function
                                NavItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-90} className='block hover:text-gray-300' key={link} to={path} >{link}</Link>)
                            } */}

                            <li className='block hover:text-gray-300'><Link to='/'>Home</Link></li>
                            <li className='block hover:text-gray-300'><Link to='/features'>Features</Link></li>
                            <li className='block hover:text-gray-300'><Link to='/about'>About</Link></li>
                            <li className='block hover:text-gray-300'><Link to='/activities'>Activities</Link></li>
                        </ul>
                    </div>

                    {/* Right Side of the Nav bar */}
                    <div className='md:flex sm:ml-12 space-x-12 items-center hidden'>
                        {/* Products (React Icon)*/}
                        <Link className='md:flex items-center hidden' to="/products">
                            <SlHandbag className='mr-2' /> <span className='hover:text-cyan-400 mt-1'>Products</span>
                        </Link>

                        {/* Sign up button  */}
                        <Link to="/signup" className='bg-secondary py-2 px-3 rounded-lg text-white hover:bg-cyan-400 transition-all duration-300'>
                            Sign in
                        </Link>
                    </div>

                    {/* Menu button on mobile device (Nav bar)*/}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white'>
                            {
                                isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary' />)
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* Nav Items for Mobile */}
            <div className={`md:hidden space-y-4 px-4 pt-24 pb-5 bg-secondary text-2xl ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'} `}>
                <li onClick={toggleMenu} className='block hover:text-gray-300'><Link to='/'>Home</Link></li>
                <li onClick={toggleMenu} className='block hover:text-gray-300'><Link to='/features'>Features</Link></li>
                <li onClick={toggleMenu} className='block hover:text-gray-300'><Link to='/about'>About</Link></li>
                <li onClick={toggleMenu} className='block hover:text-gray-300'><Link to='/activities'>Activities</Link></li>
                <li onClick={toggleMenu} className='block hover:text-gray-300'><Link to='/products'>Products</Link></li>
                <li onClick={toggleMenu} className='block hover:text-gray-300'><Link to='/signup'>Signin</Link></li>
            </div>
        </>
    );
}

export default NavBar;