// import f1 from '../assets/f1.png'
import f2 from '../assets/featured/f2.png'
import f3 from '../assets/featured/f3.png'
import f4 from '../assets/featured/f4.png'

const Features = () => {
    return (
        <div className='md:px-14 my-24 px-4 max-w-screen mx-auto' id='feature'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                {/* Left side text */}
                <div className='lg:mt-12 cursor-pointer lg:w-1/4'>
                    <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>Why are we better than others</h3>
                    <p className='text-base text-tartiary'>We stand out in the provision of services due to our unwavering commitment to customer satisfaction.
                    Our team goes above and beyond to understand and fulfill the unique needs of each client.We prioritize clear communication, reliability, and 
                    continuous improvement, ensuring that our services not only meet but exceed expectations.</p>
                </div>

                {/* Right side Featured cards*/}
                <div className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-12 gap-8 items-start'>
                        {/* First Featured Card */}
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center
                    hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div>
                                <img src={f4} alt={'Featured card'} className='max-w-100' />
                                <h5 className='text-2xl font-semibold text-primary px-5 mt-5 text-center'>Build your Ideas</h5>
                            </div>
                        </div>

                        {/* Second Featured Card */}
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center
                    hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                            <div>
                                <img src={f2} alt={'Featured card'} className='max-w-100' />
                                <h5 className='text-2xl font-semibold text-primary px-5 mt-5 text-center'>Keep up the progress</h5>
                            </div>
                        </div>

                        {/* Third Featured Card */}
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center
                    hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div>
                                <img src={f3} alt={'Featured card'} className='max-w-100' />
                                <h5 className='text-2xl font-semibold text-primary px-5 mt-5 text-center'>Success!</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>);
}

export default Features;