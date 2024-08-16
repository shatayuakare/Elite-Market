
import React from 'react'
import { Link } from 'react-router-dom'


const First = () => {
    return (
        <section className='p-0 bg-[url("https://png.pngtree.com/background/20230518/original/pngtree-business-person-working-in-an-office-with-papers-and-papers-on-picture-image_2647153.jpg")] bg-cover bg-center bg-fixed'>

            <section className="bg-black text-zinc-400 bg-opacity-75 content-center">
                <div className="text-center w-3/5 mx-auto">
                    <h5 className='text-[5rem] font-extrabold'>
                        Lorem ipsum dolor sit
                    </h5>
                    <hr className='border-2 border-blue-500 w-1/5 mx-auto mb-4 mt-1 ' />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, suscipit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim in aperiam! Natus, beatae vero?
                    </p>

                    <Link to={'/products'} className="btn btn-ghost border-2 border-blue-500 hover:bg-blue-500 rounded-full  mt-6 flex items-center font-bold mx-auto md:w-1/4 hover:text-white">
                        Get Starting
                        <i className='bx text-2xl bx-right-arrow-alt'></i>
                    </Link>

                </div>
            </section>

        </section>
    )
}

export default First