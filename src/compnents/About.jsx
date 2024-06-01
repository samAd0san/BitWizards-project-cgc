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
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>More <span className='text-secondary'>about us.</span> </h2>
                    <p className='text-tartiary text-large mb-7'>Swirl was founded with the vision of revolutionizing the way people shop. What started as a small idea has grown into a dynamic platform serving thousands of satisfied customers. Our journey is fueled by the passion and dedication of our team, who work tirelessly to bring you the best in retail.</p>
                    <button className='bg-primary text-white py-2 px-6 rounded-lg hover:bg-cyan-400 transition-all duration-300'>Learn more</button>
                </div>
            </div>
        </div>
     );
}

export default About;   