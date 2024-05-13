import React from "react";
import Banner from "../shared/Banner";
import f1 from "../assets/featured/f1-removebg.png"

const NewsLetter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
            <Banner banner={f1} heading={'Each student can share their discount code to friends'} 
            subheading={'Empower your network: Share your unique student discount code with friends and unlock exclusive savings together!'}
            btn1={'WhatsApp'} btn2={'Facebook'} dynamicClassName={'gradientBgI rounded-xl rounded-br-[90px] md:p-9 px-4 py-9'}/>
        </div>
    );
}

export default NewsLetter;