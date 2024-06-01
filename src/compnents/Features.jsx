// import f1 from '../assets/f1.png'
import f2 from '../assets/featured/a2.avif'
import f3 from '../assets/featured/a3.jpg'
import f4 from '../assets/featured/a1.png'

const Features = () => {
    return (
        <div className='md:px-14 my-24 px-4 max-w-screen mx-auto' id='feature'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                {/* Left side text */}
                <div className='lg:mt-12 cursor-pointer lg:w-1/4'>
                    <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>Why Shop with Us?</h3>
                    <p className='text-base text-tartiary'><br/>From the latest gadgets to everyday essentials, our diverse catalog has something for everyone.<br/><br/>
                    Navigate our platform with ease, thanks to our intuitive and well-designed interface.<br/><br/>Your security is our priority. We ensure safe and secure transactions every step of the way.<br/></p>
                </div>

                {/* Right side Featured cards*/}
                <div className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-12 gap-8 items-start'>
                        {/* First Featured Card */}
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center
                    hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div>
                                <img src={f4} alt={'Featured card'} className='max-w-100' />
                                <h5 className='text-2xl font-semibold text-primary px-5 mt-5 text-center'>Todos App</h5>
                            </div>
                        </div>

                        {/* Second Featured Card */}
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center
                    hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                            <div>
                                <img src={f2} alt={'Featured card'} className='max-w-100' />
                                <h5 className='text-2xl font-semibold text-primary px-5 mt-5 text-center'>Shopping</h5>
                            </div>
                        </div>

                        {/* Third Featured Card */}
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center
                    hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div>
                                <img src={f3} alt={'Featured card'} className='max-w-100' />
                                <h5 className='text-2xl font-semibold text-primary px-5 mt-5 text-center'>Secured</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>);
}

export default Features;