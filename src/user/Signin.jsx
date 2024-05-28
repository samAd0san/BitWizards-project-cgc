import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";
import UserContext from "../context/UserContext";

function Signin() {

    const [user, setUser] = useState({});
    const [hasError, setError] = useState(false);
    const navigate = useNavigate();

    const { isLoggedIn,setLoggedIn } = useContext(UserContext);

    const onInputChange = (event) => {
        const newUser = { ...user, [event.target.name]: event.target.value };
        setUser(newUser);
    }

    const onLogin = async (event) => {
        event.preventDefault();
        try {
            console.log('user', user);
            const res = await axios.post('https://nodejs-5sib.onrender.com/users/signin', user);

            // Assuming you get a token or some response data
            const token = res.data.token; // Adjust according to your API response
            localStorage.setItem('token', token); // Save the token if necessary

            // If the person logged it should be true
            setLoggedIn(true);

            navigate('/products');
        } catch (err) {
            setError(true)
            console.error(err);

            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    }

    return (
        <div className="mt-10 p-4 md:px-14">
            <form onSubmit={onLogin}>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                    <ShouldRender when={hasError}>
                        <Error msg='Incorrect email or password' />
                    </ShouldRender>

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        {/* Heading Sign in to account */}
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">Sign in to your account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="space-y-6">
                            <div>
                                {/* Email Label */}
                                <label htmlFor="signin-email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input onChange={onInputChange} id="signin-email" name="email" type="email" autoComplete="email" required className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                                    <input onChange={onInputChange} id="signin-password" name="password" type="password" autoComplete="new-password" required className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            {/* Signin button */}
                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </div>

                        {/* Message */}
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Do not have an account?
                            {/* Signup */}
                            <Link to='/signup' className="font-semibold leading-6 text-secondary hover:text-indigo-500">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signin;
