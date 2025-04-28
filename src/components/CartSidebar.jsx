import { X } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const CartSidebar = ({sidebar,setsidebar,totalprc}) => {
    const cart=useSelector((state)=>state.CART.cart)
  return (
    <div className='relative'>
      <div onClick={() => setsidebar(false)} className={` transition-all duration-300 sidebar-bg fixed bg-[#423f3f8f] w-screen h-screen ${sidebar == true ? 'z-[99] opacity-100' : '-z-20 opacity-0'} `}></div>
              <div onClick={(e)=>{e.preventDefault()}} className={`  transition-all duration-300 sidebar-body  fixed right-0 w-[350px] h-screen bg-white ${sidebar == true ? 'z-[110] translate-x-0' : '-z-30 translate-x-[350px] text-gray-700'} `}>
                <div className="yellow-ribbon relative bg-amber-400 h-12 w-full flex items-center justify-center">
                  <h1 className="font-bold uppercase text-gray-700">My Cart</h1>
                  <button onClick={() => setsidebar(false)}><X className="text-gray-700 absolute left-5 bottom-3" /></button>
                </div>
                <div className="product-space w-full h-3/5  px-4 overflow-y-scroll">
                {cart?.map((item)=>(
                  <CartItem
                  key={item._id}
                  title={item.title}
                  id={item._id}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}/>
                  )) }
                  
                </div>
                <div className="checkout bg-white pt-4 pb-8 px-4 border  h-full">
                  <hr className=" border-t-gray-400" />
                  <div className="total flex justify-between items-center my-1 text-xl text-gray-700 mb-2">
                    <h1 className="font-semibold">Cart Total</h1>
                    <h1 className="font-bold text-2xl">Rs.{(totalprc).toFixed(2)}</h1>
                  </div>
                 <Link to={'/product/Cart'}>
                 <button className="w-full bg-gray-200 h-12 my-2 rounded-3xl font-semibold text-gray-700 hover:bg-amber-400 hover:text-black transition-all duration-300">View Cart</button></Link>
                  <button className="w-full bg-amber-400 h-12 my-2 rounded-3xl font-semibold text-gray-700 hover:bg-black hover:text-white transition-all duration-300">Checkout</button>
                </div>
              </div>
    </div>
  )
}

export default CartSidebar
