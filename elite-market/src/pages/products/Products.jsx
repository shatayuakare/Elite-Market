import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
// import ProductFilter from '../../components/ProductFilter';


const Products = () => {

    const [products, setProducts] = useState([]);




    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:4000/products");
                setProducts(res.data)
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
        getProducts();
    }, [])
    console.log(products)

    return (
        <section className='md:px-12 content-center' id='products'>

            {/* <ProductFilter /> */}

            <div className="flex justify-around grid-cols-4 gap-4 flex-wrap">
                {
                    products.map((elem) => {
                        return (
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700" key={elem._id}>
                                <a href="#">
                                    <img className="p-8 rounded-t-lg"
                                        src={elem.img} alt="product image" />
                                </a>
                                <div className="px-5 pb-5">
                                    <Link to={elem._id}>
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            {elem.title}
                                        </h5>
                                    </Link>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse text-orange-400">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                            ₹{elem.price}
                                        </span>
                                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }







            </div>


        </section>
    )
}

export default Products