import React from "react";

const Banner = ({ banner, heading, subheading, btn1, btn2, dynamicClassName }) => {
    return (
        // Initially the div was at the top @nav so we added margin 28 at the top to lower it.
        <div className={dynamicClassName}>
            <div className='flex flex-col md:flex-row-reverse items-center justify-between gap-10'>

                {/* Right part (Image) */}
                <div>
                    <img src={banner} alt="Image" className='lg:h-[321px] rounded-full' />
                </div>

                {/* Left part (Content) */}
                <div className='md:w-3/5'>
                    {/* Heading and paragraph */}
                    <h2 className='md:text-7xl text-5xl font-medium text-white mb-6 leading-relaxed'>{heading}</h2>
                    <p className='text-[#EBEBEB] text-lg mb-8'>{subheading}</p>

                    {/* Buttons */}
                    <div className="space-x-5 space-y-4">
                        <button className='btnPrimary font-medium'>{btn1}</button>
                        <button className='btnSecondary font-medium'>{btn2}</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Banner;