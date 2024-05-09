import logo from '../assets/logo.png'
// React Icons
import { SlHandbag } from "react-icons/sl";

function NavBar() {
    
    const NavItems = [
        { link: 'Overview', path: 'home' },
        { link: 'About', path: 'about' },
        { link: 'Contact', path: 'contact' },
        { link: 'Activities', path: 'activities' }
    ];

    return (<nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
            {/* Left Side of the Nav bar */}
            <div className='flex items-center space-x-14 '>
                {/* Logo + Icon */}
                <a href="/" className='flex text-3xl items-center font-semibold space-x-3 text-primary'>
                    <img className='w-11 h-11 inline-block items-center' src={logo} alt="Logo" /> <span>Logo</span>
                </a>

                {/* Nav Items */}
                <ul className='md:flex space-x-12 items-center mt-1 hidden'>
                    {
                        // Displaying all the nav items by iterating using map function
                        NavItems.map(({ link, path }) => <a className='block hover:text-gray-300' key={link} href={path} >{link}</a>)
                    }
                </ul>
            </div>

            {/* Right Side of the Nav bar */}
            <div className='md:flex space-x-12 items-center hidden'>
                {/* Products (React Icon) + Sign up button */}
                <a className='md:flex items-center hidden' href="/">
                    <SlHandbag className='mr-2' /> <span className='hover:text-secondary mt-1'>Products</span>
                </a>
                <button className='bg-secondary py-2 px-3 rounded-lg hover:text-white hover:bg-cyan-400 transition-all duration-300'>
                    Sign up
                </button>
            </div>
        </div>
    </nav>);
}

export default NavBar;