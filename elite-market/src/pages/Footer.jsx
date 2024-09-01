import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className='bg-slate-950 md:p-24 sm:p-5'>
            <div className="flex md:justify-around gap-4 md:flex-row sm:flex-col">
                <div className="md:w-2/4 sm:w-full">
                    <h4 className='text-3xl text-slate-200 mb-4'>
                        <Link to={'/'}>Elite Market</Link>
                    </h4>
                    <p className='text-md text-slate-600 md:w-2/3 sm:w-full'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum quae dicta debitis animi eos consequuntur ipsum nam illum nemo. Ullam odit explicabo nam tempore.
                    </p>
                </div>
                <div className="flex md:flex-row sm:flex-col sm:justify-center md:justify-around md:w-3/4 sm:w-full">
                    <div className="flex-1">
                        <h5 className='text-slate-300 text-lg mb-4'>Company</h5>
                        <ul className='text-slate-600 text-md' type="none">
                            <li className='hover:text-slate-500 pb-2'>
                                <Link to={'/about'}>About</Link>
                            </li>
                            <li className='hover:text-slate-500 pb-2'>
                                <Link to={'/contact'}>Contact Us</Link>
                            </li>
                            <li className='hover:text-slate-500 pb-2'>
                                <Link to={'/support'}>Support</Link>
                            </li>
                            <li className='hover:text-slate-500 pb-2'>
                                <Link to={'/career'}>Career</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h5 className='text-slate-300 text-lg mb-4'>Quick Link</h5>
                        <ul className='text-slate-600 text-md' type="none">
                            <li className='hover:text-slate-500 pb-2'>
                                <Link to={'/about'}>Share Location</Link>
                            </li>
                            <li className='hover:text-slate-500 pb-2'>
                                <Link to={'/contact'}>Order Tracking</Link>
                            </li>
                            <li className='hover:text-slate-500 pb-2'>
                                <Link to={'/guide'}>Size Guide</Link>
                            </li>
                            <li className='hover:text-slate-500 pb-2'>
                                <Link to={'/faq'}>FAQ's</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h5 className='text-slate-300 text-lg mb-4'>Quick Link</h5>
                        <ul className='text-slate-600 text-md' type="none">
                            <li className='hover:text-slate-500 pb-2'>
                                <a>Terms and Conditions</a>
                            </li>
                            <li className='hover:text-slate-500 pb-2'>
                                <a>Privacy Policy</a>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer