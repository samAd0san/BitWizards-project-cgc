import React from "react";
import logo from "../assets/logo-removebg.png"
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
            <div className="my-12 flex flex-col md:flex-row gap-10">
                {/* Footer Left Side */}
                <div className="md:w-1/2 space-y-2">
                    {/* Logo */}
                    <a href="/" className='flex text-3xl items-center font-semibold space-x-3'>
                        <img className='w-11 h-11 inline-block items-center' src={logo} alt="Logo" /> <span>Swirl</span>
                    </a>

                    {/* Text Content below logo */}
                    <p className="md:h-1/2">Connect with Us: Follow for updates and exclusive offers, or reach out for assistance.</p>

                    {/* Input Email */}
                    <input type="email" name="email" id="email" placeholder="Your email"
                        className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none" />

                    {/* Email Submit Button */}
                    <input type="submit" value={'Subscribe'} className="px-4 py-2 bg-secondary rounded-md ml-2 cursor-pointer
                    hover:bg-white hover:text-primary duration-300 transition-all" />
                </div>

                {/* Footer Right Side */}
                <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 item-start">
                    {/* 1st coloumn */}
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Platforms</h4>
                        <ul className="space-y-3">
                            <a href="/" className="block hover:text-gray-300">Overview</a>
                            <a href="/" className="block hover:text-gray-300">Features</a>
                            <a href="/" className="block hover:text-gray-300">About</a>
                            <a href="/" className="block hover:text-gray-300">Activites</a>
                        </ul>
                    </div>

                    {/* 2nd coloumn */}
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Help</h4>
                        <ul className="space-y-3">
                            <a href="/" className="block hover:text-gray-300">How does it work?</a>
                            <a href="/" className="block hover:text-gray-300">Where to ask question?</a>
                            <a href="/" className="block hover:text-gray-300">How to play?</a>
                            <a href="/" className="block hover:text-gray-300">What is needed for this?</a>
                        </ul>
                    </div>

                    {/* 3rd coloumn */}
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Contacts</h4>
                        <ul className="space-y-3">
                            <p className="block hover:text-gray-300">+123-456-7890</p>
                            <p className="block hover:text-gray-300">123 xyz xyz</p>
                            <p className="block hover:text-gray-300">Swirl@gmail.com</p>
                            <p className="block hover:text-gray-300">Silicon Valley, Hi-tech city</p>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

                {/* Footer Bottom */}
            <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
                <p>Copyright © 2003 Swirl. All rights reserved.</p>
                {/* Social Media Links */}
                <div className="flex item-center space-x-5">
                    <FaFacebookSquare className="h-8 w-8 cursor-pointer hover:translate-y-1 transition-all duration-300"/>
                    <TiSocialTwitter className="h-8 w-8 cursor-pointer hover:translate-y-1 transition-all duration-300"/>
                    <TiSocialInstagram className="h-8 w-8 cursor-pointer hover:translate-y-1 transition-all duration-300"/>
                    <TiSocialLinkedin className="h-8 w-8 cursor-pointer hover:translate-y-1 transition-all duration-300"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;