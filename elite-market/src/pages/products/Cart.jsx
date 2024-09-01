import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {
    const [order, setOrder] = useState(1);
    return (
        <section className="md:px-24 flex gap-6 md:pt-20">

            <div className="w-3/4">
                <div className="bg-white flex justify-between p-4 items-end">
                    <span className='text-2xl text-zinc-800 font-semibold'>
                        Shopping Cart
                    </span>
                    <span className='pe-6 text-blue-500'>
                        Price
                    </span>
                </div>


                <div className="pt-4 gap-3 grid sm:grid-cols-1">

                    <div className='card flex sm:flex-col md:flex-row bg-white rounded-sm'>
                        <figure className='min-w-56 h-60 rounded-sm'>
                            <img className='w-56 bg-transparent'
                                src="https://flowbite.com/docs/images/blog/image-4.jpg"
                                alt="" />
                        </figure>
                        <div className="card-body p-3 relative">
                            <h4 className="text-xl p-1 text-gray-900 font-semibold">
                                Card Title
                            </h4>
                            <p className=''>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, distinctio!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eveniet eum itaque
                            </p>
                            <div className='absolute bottom-2 left-4'>
                                <div className="relative flex items-center ">
                                    <span className='text-gray-800 me-3 ps-3'>
                                        Quantity :
                                    </span>
                                    <button type="button" className="bg-zinc-100 btn-sm dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:border-zinc-600 hover:bg-zinc-200 border border-zinc-300 rounded-s-md p-0 px-1"
                                        onClick={() => setOrder(order => order - 1)}>
                                        <i className='bx bx-minus font-bold text-xl'></i>
                                    </button>
                                    <input type="text" className="text-xl p-1 w-10 text-center bg-transparent text-zinc-700 focus:outline-0 " placeholder="" value={order}
                                        onChange={(event) => setOrder(event.target.value)} required />

                                    <button type="button" className="bg-zinc-100 btn-sm dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:border-zinc-600 hover:bg-zinc-200 border border-zinc-300 rounded-e-md p-0 px-1"
                                        onClick={() => setOrder(order => order + 1)}
                                    >
                                        <i className='bx bx-plus text-xl font-bold' ></i>
                                    </button>
                                </div>

                                <div className='flex items-center float-start'>
                                    <button className="btn btn-ghost hover:bg-transparent text-blue-400 hover:text-red-500 focus:text-red-500 btn-sm hover:underline">
                                        Delete
                                    </button>
                                    |
                                    <button className="btn btn-ghost hover:bg-transparent text-blue-400 hover:text-green-500 focus:blue-green-500 btn-sm hover:underline">
                                        Save for later
                                    </button>
                                    |
                                    <Link to={'products'} className="btn btn-ghost hover:bg-transparent text-blue-400 hover:text-blue-500 hover:underline focus:text-blue-500 btn-sm">
                                        See more like this
                                    </Link>
                                    |
                                    <button className="btn btn-ghost hover:bg-transparent text-blue-400 hover:text-blue-500 focus:text-blue-500 hover:underline btn-sm">
                                        Share
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="p-2 content-end min-w-44 pb-8">
                            <img className='w-20 mx-auto mb-2' src="https://cdn-icons-png.flaticon.com/512/4289/4289742.png" alt="" />
                            <div className='font-bold text-3xl text-green-500'>
                                <span className='text-xl'>₹</span>999.00/-
                            </div>
                            <p className='text-blue-400'>
                                Free Home Delivery
                            </p>
                        </div>
                    </div>


                </div>


            </div>
            <aside className='w-1/4'>
                <div className="card bg-white">
                    <div className="card-body">

                    </div>
                </div>
            </aside>
        </section>
    )
}

export default Cart