import React, { useState } from "react";
import banner from "../assets/banner-img.jpg";
import Banner from "../shared/Banner";
import ShouldRender from "../util/ShouldRender";

const Home = () => {

    const [run, setRun] = useState(false)

    return (
        // Initially the div was at the top @nav so we added margin 28 at the top to lower it.
        <div className="mt-20 p-4 md:px-12 max-w-screen-2xl mx-auto " id="home">

            <ShouldRender when={run}>
                <div className="mt-20 p-4 md:px-14">
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            {/* Heading Sign in to account */}
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">Sign in to your account</h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    {/* Email Label */}
                                    <label htmlFor="signin-email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                    <div className="mt-2">
                                        <input id="signin-email" name="email" type="email" autoComplete="off" required className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        {/* Password Label */}
                                        <label htmlFor="signin-password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                        <div className="text-sm">
                                            <a href="#" className="font-semibold text-secondary hover:text-indigo-500">Forgot password?</a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input id="signin-password" name="password" type="password" autoComplete="new-password" required className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                                </div>
                            </form>

                            {/* Message */}
                            <p className="mt-10 text-center text-sm text-gray-500">
                                Do not have an account?
                                {/* Signup */}
                            </p>
                        </div>
                    </div>
                </div>
            </ShouldRender>

            <Banner banner={banner} heading='Develop your skills without diligence'
                subheading='We emphasize on teaching great skill regarding the course, focusing not only on theoretical knowledge but also on practical application and real-world scenarios.'
                btn1='Get Started' btn2='Discount' dynamicClassName={'gradientBg rounded-xl rounded-br-[90px] md:p-9 px-4 py-9'} />
        </div>
    );
}

export default Home;