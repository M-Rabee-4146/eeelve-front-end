import React from 'react'
import { Minus, Plus, X } from 'lucide-react'
import { DecrementQuantity, IncrementQuantity, RemoveItem } from '../Redux_toolkit/Features/Cart'
import { useDispatch } from 'react-redux'

const CartPageItem = ({ id, image, title, price, quantity }) => {
    const dispatch = useDispatch()
    return (
        <tbody className='border-y border-y-gray-300'>
            <tr>
                <td >
                    <div className='flex justify-center items-cente'>
                        <button onClick={() => {
                            dispatch(RemoveItem(id))
                        }} > <X className='size-4 text-gray-700 hover:text-amber-400 transition-all duration-300' /></button>

                    </div>
                </td>
                <td className='min-h-52 h-44'>
                    <div className="product w-full min-h-max  max-h-52 py-3 px-1 flex justify-between ">
                        <div className="img w-20 h-20 overflow-hidden">
                            <img className="object-cover object-center w-full h-full" src={image} alt="" />
                        </div>
                        <div className="txt w-9/12 px-2 ">
                            <h1 className=" mb-2 text-gray-700 font-semibold ">{title}</h1>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="px-2 py-2 flex flex-col  items-center">
                        <p className="leading-relaxed mx-1 text-red-600 font-semibold ">Rs.{(price).toFixed(2)}</p>
                        {/* <del className="leading-relaxed mx-1 text-gray-500 font-normal">Rs.{(pricedis)}</del> */}
                    </div>
                </td>
                <td>   <div className="qty flex items-center justify-center">
                    <div className="quantity border border-gray-500 p-4 flex items-center justify-between rounded-3xl w-36 h-9">

                        <h1 className="mb-1 text-gray-700 text-sm  ">{quantity}</h1>
                        <div className="btns flex">
                            <button onClick={() => {
                                dispatch(IncrementQuantity(id))
                            }}><Plus className='size-3 mx-2 hover:text-black' /></button>
                            <button onClick={() => {
                                dispatch(DecrementQuantity(id))
                            }}> <Minus className='size-3 mx-2 hover:text-black' /></button>
                        </div>
                    </div>
                </div></td>
                <td>
                    <div className="total-price flex justify-center items-center">
                        <h1>Rs. {(price * quantity).toFixed(2)}</h1>
                    </div>
                </td>
            </tr>
        </tbody>
    )
}

export default CartPageItem
