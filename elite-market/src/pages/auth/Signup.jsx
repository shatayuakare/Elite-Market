import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { toast } from "react-toastify"


const Signup = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [conformPassword, setConformPassword] = useState("");


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const signUpHandler = async (event) => {
        event.preventDefault()
        setLoading(true)

        if (!fname || !lname) return setError("Name is required")
        if (!phone) return setError("Phone is required")
        if (!email) return setError("Email address is required")
        if (!password) return setError("Password is required")
        if (!conformPassword) return setError("Conform password is required")

        if (password !== conformPassword) return setError("Password not matched")

        const data = {
            name: fname + " " + lname,
            email,
            phone,
            password
        }


        await axios.post("", data).then(() => {
            toast.success("Sign up Successfully");
            setLoading(false);
        }).catch((err) => {
            toast.error(err.response.data.message)
            console.error(err)
        })

        // console.log(data)
        setLoading(false)
    }
    return (
        <section className="content-center">
            <div className="md:mx-24">
                <div className="shadow-xl block max-w-xl mx-auto bg-white p-5 rounded-sm">
                    <h3 className='pb-5 text-center text-3xl font-bold'>
                        Sign up
                        <hr className='border-2 border-red-500 w-1/3 mx-auto my-3' />
                    </h3>
                    <form className="w-full" onSubmit={signUpHandler}>
                        <div className="grid md:grid-cols-2 md:gap-6">

                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none outline-none focus:border-red-600 peer" placeholder=" " required autoFocus
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)} />
                                <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="last_name" id="last_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none outline-none focus:border-red-600 peer" placeholder=" " required
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)} />
                                <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{3}" name="phone" id="phone"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none outline-none focus:border-red-600 peer" placeholder=" " required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)} />
                                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-4567-890)</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="underline_select" className="sr-only">Account Role</label>
                                <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none outline-none focus:border-red-600 peer" defaultValue={'buyer'}>
                                    <option >--select--</option>
                                    <option value="buyer"> Buyer</option>
                                    <option value="seller">Seller</option>
                                </select>
                            </div>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none outline-none focus:border-red-600 peer" placeholder=" " required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Email address
                            </label>
                        </div>


                        <div className="relative z-0 w-full mb-5 group">
                            <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none outline-none focus:border-red-600 peer" placeholder=" " required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none outline-none focus:border-red-600 peer" placeholder=" " required
                                value={conformPassword}
                                onChange={(e) => setConformPassword(e.target.value)} />
                            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Confirm password
                            </label>
                        </div>
                        {
                            error &&
                            <div className='text-red-500 mb-3'>{error}</div>
                        }

                        <button type="submit" className="btn btn-ghost text-white bg-red-700 min-w-full hover:bg-red-800 font-bold rounded-sm btn-sm sm:w-auto px-5 py-2 h-10 text-center dark:bg-red-600 dark:hover:bg-red-700 ">
                            {
                                loading ?
                                    <span>loading</span>
                                    :
                                    <span>Sign up</span>
                            }
                        </button>



                        <p className='mt-2'>
                            Already have account. <Link className='text-blue-500 underline' to={"/login"}>Login</Link>
                        </p>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Signup