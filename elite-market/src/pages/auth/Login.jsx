import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const loginHandler = async (event) => {
        event.preventDefault()
        setLoading(true)

        if (!email) return setError("Email is required")
        if (!password) return setError("Password is required")

        const data = { email, password };

        await axios.post("", data).then(() => {
            toast.success("login successfully");
            localStorage.set("auth", { email, password })

        }).catch((err) => {
            toast.error(err.response.data.message);
        })
        setLoading(false)
    }

    return (
        <section className='content-center'>
            <div className="md:mx-24">

                <div className="shadow-xl block max-w-xl mx-auto bg-white p-5 rounded-sm">
                    <h3 className='pb-5 text-center text-3xl font-bold'>
                        Login
                        <hr className='border-2 border-red-500 w-1/3 mx-auto my-3' />
                    </h3>
                    <form className=" mx-auto" onSubmit={loginHandler}>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none outline-none focus:border-red-600 peer" placeholder=" " required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Email address
                            </label>
                        </div>


                        <div className="relative z-0 w-full group">
                            <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none outline-none focus:border-red-600 peer" placeholder=" " required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <p className='mb-5'>
                            <button className='btn btn-ghost btn-sm hover:bg-transparent p-0 text-blue-500'>
                                Forgot password?
                            </button>
                        </p>
                        {
                            error &&
                            <div className='text-red-500 mb-3'>{error}</div>
                        }

                        <div>
                            <button type="submit" className="btn btn-ghost text-white bg-red-700 min-w-full hover:bg-red-800 font-bold rounded-sm btn-sm sm:w-auto px-5 py-2 h-10 text-center dark:bg-red-600 dark:hover:bg-red-700 ">
                                {
                                    loading ?
                                        <span>  process...</span>
                                        :
                                        <span>Login</span>
                                }
                            </button>
                        </div>
                        <p className='mt-2'>
                            New account user. <Link className='text-blue-500 underline' to={"/signup"}>Signup</Link>
                        </p>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Login