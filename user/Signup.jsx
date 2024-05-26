import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="mt-10 p-4 md:px-14">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* Heading Create an account */}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">Create an account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" autoComplete="off">
                        <div>
                            {/* Email Label */}
                            <label htmlFor="signup-email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="signup-email" name="email" type="email" autoComplete="off" required className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                {/* Password Label */}
                                <label htmlFor="signup-password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input id="signup-password" name="password" type="password" autoComplete="new-password" required className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                {/* Confirm Password Label */}
                                <label htmlFor="signup-password-confirm" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
                            </div>
                            <div className="mt-2">
                                <input id="signup-password-confirm" name="password" type="password" autoComplete="new-password" required className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                        </div>
                    </form>

                    {/* Message */}
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?
                        {/* Sign in */}
                        <Link to='/signin' className="font-semibold leading-6 text-secondary hover:text-indigo-500">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
