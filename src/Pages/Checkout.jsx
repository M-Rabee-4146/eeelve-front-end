import { QuestionMarkCircleIcon } from '@heroicons/react/16/solid'
import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <div className='relative'>
            <nav className='border-b border-b-gray-300 '>
                <div className="icons container px-5  lg:px-16 flex h-16 justify-between items-center mx-auto">
                    <h1 className='text-lg text-gray-700 font-semibold'>Eveen.pk</h1>
                    <Link to={'/product/Cart'}> <ShoppingBag className='text-amber-400 size-5 hover:text-black transition-all duration-300' /></Link>
                </div>
            </nav>
            <div className="container px-5 lg:px-16  mx-auto min-h-max md:flex-row flex flex-col ">
                <div className="left-side bg-white border-r-gray-300 md:border-r w-full md:w-[55%] pt-7 md:pr-5">
                    <div className="heading flex justify-between items-center mb-4 ">
                        <h1 className='text-2xl text-gray-900 font-semibold'>Contact</h1>
                        <Link className='text-sm text-amber-500 underline mr-3' to={'/login'}>Login</Link>
                    </div>
                    <form  className='border-b border-b-gray-300 mb-7'>
                        <input className='rounded-md w-full mb-2 border-gray-300 h-12' type="text" placeholder='Email or Mobile Phone Number' />
                        <div className="news flex items-center mb-7">
                            <input type="checkbox" name="news" className='mx-2 size-3 ' /><label htmlFor="news" className='text-gray-900 text-sm'>Email me With News and Offers</label>
                        </div>
                        <div className="heading flex justify-start items-center mb-4 ">
                            <h1 className='text-2xl text-gray-900 font-semibold'>Delivery</h1>
                        </div>
                        <div className="country">
                            <select className='rounded-md w-full mb-4 border-gray-300 h-12' name="Country" id="">
                                <option value="pakistan">Pakistan</option>
                            </select>
                        </div>
                        <div className="name flex">
                            <input className='rounded-md w-full mb-4 mr-2 border-gray-300 h-12' type="text" placeholder='First Name' />
                            <input className='rounded-md w-full mb-4  border-gray-300 h-12' type="text" placeholder='Last Name' />
                        </div>
                        <input className='rounded-md w-full mb-4 border-gray-300  h-12' type="text" placeholder='Address' />
                        <input className='rounded-md w-full mb-4 border-gray-300  h-12' type="text" placeholder='Appartment ,Suite,etc. Optional' />
                        <div className="name flex relative">
                            <input className='rounded-md w-full mb-4 mr-2 border-gray-300 h-12' type="text" placeholder='City' />
                            {/* <label htmlFor="postal" className='absolute pointer-events-auto text-gray-600 text-[13px] right-32'>Postal Code (optional)</label> */}
                            <input name='postal' className='rounded-md w-full mb-4  border-gray-300 h-12' type="text" placeholder='Postal Code' />
                        </div>
                        <div className="with-tooltip relative">
                            <input className='rounded-md w-full mb-4 border-gray-300 h-12 ' type="text" placeholder='Appartment ,Suite,etc. Optional' />
                            <abbr title="In Case We Need to Contact You About Your Order"><QuestionMarkCircleIcon className='size-5 absolute top-3 right-5 text-gray-500' />
                            </abbr>
                        </div>
                        <div className="news flex items-center mb-2">
                            <input type="checkbox" name="news" className='mx-2 size-3' /><label htmlFor="news" className='text-gray-900 text-sm'>Save This Information For Next Time</label>

                        </div>
                        <div className="news flex items-center mb-7">
                            <input type="checkbox" name="news" className='mx-2 size-3' /><label htmlFor="news" className='text-gray-900 text-sm'>Text me With News and Offers</label>

                        </div>
                        <div className="heading flex justify-start items-center mb-4 ">
                            <h1 className='text-lg text-gray-900 font-semibold'>Shipping Method</h1>
                        </div>
                        <div className="input-like-box rounded-md w-full mb-7 border-amber-300 h-12 border bg-red-100 flex  justify-between items-center p-3">
                            <h1 className='text-base text-gray-700 '>Standard Shipping</h1>
                            <h1 className='text-base text-gray-700 font-semibold'>Rs.200.00</h1>

                        </div>
                        <div className="heading flex flex-col justify-start items-start mb-4 ">
                            <h1 className='text-lg text-gray-900 font-semibold mb-2'>Payment</h1>
                            <h1 className='text-sm text-gray-900 '>All transactions are secure and encrypted.</h1>
                        </div>
                        <div className="input-like-box rounded-md w-full mb-7 border-amber-300 h-12 border bg-red-100 flex  justify-between items-center p-3">
                            <h1 className='text-base text-gray-700 '>Cash on Delivery (COD)</h1>
                            {/* <h1 className='text-base text-gray-700 font-semibold'>Rs.200.00</h1> */}

                        </div>
                        {/* <div className="heading flex justify-start items-center mb-4 ">
                            <h1 className='text-lg text-gray-900 font-semibold'>Billing Address</h1>
                        </div>
                        <div className="billing-box  rounded-md w-full mb-4 border ">

                            <div className="input-like-box rounded-t-md w-full  border-amber-30 h-12 border bg-red-100 flex   items-center p-3">
                                <input type="radio" name="billing" id="same-as" />
                                <label for='same-as' className='text-base text-gray-700 mx-2'>Same As Billing Address</label>

                            </div>
                            <div className="input-like-box rounded-b-md w-full  border-amber-300 h-12 border bg-red-100 flex   items-center p-3">
                                <input type="radio" name="billing" id="diff" />
                                <label for='diff' className='text-base text-gray-700 mx-2'>Same As Billing Address</label>

                            </div>
                        </div> */}
                        <button type="submit" className='bg-amber-400 rounded-md h-12 w-full  hover:text-white hover:bg-black transition-all duration-300 font-semibold mb-12'>Complete Order</button>
                    </form>
                </div>
                <div className="right-side  bg-[#f5f5f5]  sticky h-32
                
                  w-[45%] py-4"></div>
            </div>
        </div>
    )
}

export default Checkout
