import React from 'react'
import { useDispatch } from 'react-redux'
import { DecrementQuantity, IncrementQuantity, RemoveItem } from '../Redux_toolkit/Features/Cart'
import { Minus, Plus } from 'lucide-react'

const CartItem = ({ id, image, title, price, quantity }) => {
    const dispatch = useDispatch()
    return (
        <div>
            {
                <div className="product w-full min-h-max  max-h-52 py-3 px-1 flex border-t border-t-gray-4 00">

                    <div className="img w-16 h-12 overflow-hidden"><img className="object-cover object-center h-full" src={image} alt="" /></div>
                    <div className="txt w-9/12 px-2 ">
                        <h1 className="line-clamp-5 mb-2 text-gray-700 font-semibold ">{title}</h1>
                        <div className="values  ">
                            <div className="qty flex items-center justify-between">
                                <h1 >QTY:</h1>
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
                            </div>
                            <div className="price flex items-center justify-between">
                                <h1 className=" text-gray-700 text-sm font-semibold">Rs.{price * quantity}</h1>
                                <button onClick={() => {
                                    dispatch(RemoveItem(id))
                                }} className="underline text-gray-700 hover:">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CartItem
