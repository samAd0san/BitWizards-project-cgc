import aboutI from '../assets/about/aboutI.png';
import aboutII from '../assets/about/aboutII.png';

function About() {
    return ( 
        <div className='md:px-14 p-4 max-w-s mx-auto space-y-10' id='about'>
            {/* 1st About Page */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                {/* Image */}
                <div className='md:w-1/2 pt-4'>
                    <img src={aboutI} alt="About Image"/>
                </div>

                {/* About Content */}
                <div className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <span className='text-secondary'>for many years.</span> </h2>
                    <p className='text-tartiary text-large mb-7'>Our journey has been marked by continuous improvement and a relentless pursuit of perfection. Through feedback, iteration, and a deep 
                    understanding of our users' needs, we've evolved into a trusted industry leader.</p>
                    <button className='btnPrimary'>Get Started</button>
                </div>
            </div>

            {/* 2nd About Page */}
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                {/* Image */}
                <div className='md:w-1/2'>
                    <img src={aboutII} alt="About Image"/>
                </div>

                {/* About Content */}
                <div className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>You can practise at any <span className='text-secondary'>time convinient for you.</span> </h2>
                    <p className='text-tartiary text-large mb-7'>Our flexible practice schedule empowers you to hone your skills at your convenience, ensuring that learning fits seamlessly into your
                    busy lifestyle. Whether it's early morning or late at night, our platform is available 24/7, allowing you to practice whenever inspiration strikes.</p>
                    <button className='btnPrimary'>Learn more</button>
                </div>
            </div>
        </div>
     );
}

export default About;   