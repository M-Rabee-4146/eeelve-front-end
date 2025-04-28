import React from 'react'
import Navbar from '../components/Navbar'
import { Breadcrumb, BreadcrumbItem } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'
import TopProducts from '../components/TopProducts'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import CartPageItem from '../components/CartPageItem'
import { useDispatch, useSelector } from 'react-redux'
import { ClearCart } from '../Redux_toolkit/Features/Cart'
import { useNavigate } from 'react-router-dom'


const CartPage = () => {
    const cart = useSelector((state) => state.CART.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getTotal = () => {
        let totalqty = 0;
        let totalprice = 0;
        cart.forEach(item => {
            totalqty += item.quantity;
            totalprice += item.price * item.quantity
        });
        // console.log(cart)
        return { totalqty, totalprice }

    }

    // if(getTotal().totalqty==0){
    //     return (
    //         <h1>Empty Cart</h1>
    //     )
    // }
    return (
        <div>
            <Navbar />
            <div className="link container mx-auto">

                <Breadcrumb className="my-2 mx-3" aria-label="Default breadcrumb example">
                    <BreadcrumbItem href="/" icon={HiHome}>Home</BreadcrumbItem>
                    <BreadcrumbItem>Cart</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="cart container mx-auto flex flex-col items-center justify-center">
                <h1 className=' text-4xl text-gray-700'>Shopping Cart</h1>
                {getTotal().totalqty !== 0 ?
                    <div className="table_parent my-5">
                        <table>
                            <thead>
                                <tr >
                                    <th className='min-w-20'>

                                    </th>
                                    <th className='min-w-64 text-left px-2 font-semibold h-16'>
                                        Product
                                    </th>
                                    <th className='min-w-28 w-48 font-semibold'>
                                        Price
                                    </th>
                                    <th className='min-w-28 w-48 font-semibold'>
                                        Quantity
                                    </th>
                                    <th className='min-w-28 w-48 font-semibold'>
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            {cart.map((item) => (


                                <CartPageItem
                                    key={item._id}
                                    id={item._id}
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                            ))
                            }
                        </table>
                        <div className="Total my-5 flex justify-end">
                            <div className="btns">
                                <button onClick={() => { navigate('/') }} className='w-52 bg-gray-200 h-12 my-2 rounded-3xl font-semibold text-[15px]  text-gray-700 hover:bg-amber-400 hover:text-black transition-all duration-300'>Continue Shopping</button>
                                <button onClick={() => { dispatch(ClearCart()) }} className='w-52 bg-amber-400 h-12 my-2 rounded-3xl  text-[15px] font-semibold text-gray-700 hover:bg-black hover:text-white transition-all duration-300 mx-5'>Clear Cart</button>
                            </div>
                        </div>
                    </div> : <div className=' my-5 flex flex-col items-center'><h1 className=' text-xl py-2'>Your Cart is Empty</h1>
                        <button onClick={() => { navigate('/') }} className='w-80 bg-gray-200 h-12 my-2 rounded-3xl font-semibold text-gray-700 hover:bg-amber-400 hover:text-black transition-all duration-300 text-[15px]'>Continue Shopping</button></div>}
            </div>
            <div className="cart-divided container flex flex-col md:flex-row mx-5">
                <div className="left-cart md:w-[55%] w-full  px-3">
                    <h1 className='text-2xl mx-5 font-semibold mt-2 mb-4 text-gray-700 hidden md:block'>Estimated Shipping</h1>
                    <div className="  flex-col lg:flex-row justify-center items-center  hidden md:flex">

                        <select className='rounded-3xl w-full mb-3 px-5 mx-5 border border-gray-400' name="flexry" id="">
                            <option value="pakistan">Pakistan</option>
                        </select>
                        <input type="text" className='rounded-3xl w-full  border border-gray-400 px-5' value={30235} />

                    </div>
                    <div className="quote-btn flex justify-end">
                        <button onClick={() => 'hello'} className='w-40 mx-1  bg-gray-200 h-12 my-5 rounded-3xl font-semibold text-[15px]  text-gray-700 hover:bg-amber-400 hover:text-black transition-all duration-300'>Get a Quote</button>
                    </div>
                    <div className="txt mx-5 text-gray-700 ">
                        <h1>There is one shipping rate available for your address.</h1>
                        <h1>Standard Shipping: Rs.200.00</h1>
                    </div>
                    <div className="note mt-3 flex flex-col">
                        <label className='text-xl mx-5 font-semibold  text-gray-700' htmlFor="note">Add a Note to Your Order</label>
                        <textarea name="note" className='rounded-2xl mx-5 my-3 h-36 border-gray-400'></textarea>
                    </div>
                </div>
                <div className="right-cart w-[45%]  pl-3">
                    <div className="total flex justify-between items-center my-2 border-b border-b-gray-300">
                        <h1 className='text-2xl text-gray-700 font-semibold'>Cart Total</h1>
                        <h1 className='text-2xl text-gray-700 font-semibold'>Rs.2000.00</h1>
                    </div>
                    <button onClick={() => { navigate('/') }} className='w-full  mx-auto bg-amber-400  h-12 my-2 rounded-3xl font-semibold text-gray-700 hover:bg-black hover:text-white transition-all duration-300 text-[15px]'>Proceed To Checkout</button>
                </div>

            </div>
            <TopProducts />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default CartPage
