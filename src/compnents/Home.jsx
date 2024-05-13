import React from "react";
import banner from "../assets/banner-img.jpg";
import Banner from "../shared/Banner";

const Home = () => {

    return (
        // Initially the div was at the top @nav so we added margin 28 at the top to lower it.
        <div className="mt-20 p-4 md:px-12 max-w-screen-2xl mx-auto " id="home">
            <Banner banner={banner} heading='Develop your skills without diligence' 
            subheading='We emphasize on teaching great skill regarding the course, focusing not only on theoretical knowledge but also on practical application and real-world scenarios.'
            btn1='Get Started' btn2='Discount' dynamicClassName={'gradientBg rounded-xl rounded-br-[90px] md:p-9 px-4 py-9'}/>
        </div>
    );
}

export default Home;