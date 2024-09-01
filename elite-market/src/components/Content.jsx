import React from 'react'
import { Link } from 'react-router-dom'

const Content = ({ className, children, page, heading }) => {
    return (
        <div className={`sm:px-4 sm:my-6 md:px-20 md:py-6 ${className}`}>
            <div className='p-2'>
                <h4 className='text-lg md:text-xl font-bold text-red-500'> <span className='w-4 bg-red-500 pe-2 rounded-sm me-4'></span>
                    {page}
                </h4>
                <div className='text-xl md:text-[1.7rem] flex justify-between p-2 ps-0 text-zinc-700 font-bold'>
                    <div>
                        {heading}
                    </div>
                    <div className='sm:gap-2 md:gap-4 sm:flex-shrink-0 md:flex'>
                        <button className="btn btn-ghost bg-transparent border-2 border-black rounded-sm text-red-500 btn-sm w-10 h-10 hover:bg-red-500 hover:text-white duration-0">
                            <i className='bx bx-chevrons-left text-3xl'></i>
                        </button>
                        <button className="btn btn-ghost bg-transparent border-2 border-black rounded-sm text-red-500 btn-sm w-10 h-10 hover:bg-red-500 hover:text-white duration-0">
                            <i className='bx bx-chevrons-right text-3xl'></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='p-3 border'>
                {children}
            </div>
            <div className='text-center p-2 mt-2'>
                <Link className='btn btn-ghost bg-red-500 hover:bg-red-600 text-white rounded-sm'>
                    View More
                    <i className="bx bx-right-arrow-alt text-xl"></i>
                </Link>
            </div>
        </div>
    )
}

export default Content