import React from 'react'
import { useState, useEffect } from "react"
import { ChevronRight, Share, MessageCircle, ShoppingBag, ShoppingCart } from "lucide-react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getsingleproduct } from '../Redux_toolkit/Features/Product'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { addToCart, ClearCart } from '../Redux_toolkit/Features/Cart'

const Product_detail = () => {
  const { id } = useParams('')
  const dispatch = useDispatch();
  // console.log(id)
  // console.log(dispatch)
 useEffect(()=>{
  // console.log(id)
  dispatch(getsingleproduct(id))
 },[id,dispatch])
 const [quantityH,setquantityH]=useState(1)
  const { selectedProduct, error } = useSelector((state) => state.prod)
  const cartdata=selectedProduct
  var{_id,title,image,price,quantity}=cartdata
  // console.log(error)
  // console.log(selectedProduct)

  const [selectedColor, setSelectedColor] = useState("blue")
  const [countdown, setCountdown] = useState({ hours: 24, minutes: 11, seconds: 25 })
  const [selectedImage, setSelectedImage] = useState(0)

  // Countdown timer effect
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCountdown((prev) => {
  //       if (prev.seconds > 0) {
  //         return { ...prev, seconds: prev.seconds - 1 }
  //       } else if (prev.minutes > 0) {
  //         return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
  //       } else if (prev.hours > 0) {
  //         return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
  //       }
  //       return prev
  //     })
  //   }, 1000)

  //   return () => clearInterval(timer)
  // }, [])

  // Product images
  const productImages =selectedProduct?.image? [
    selectedProduct.image
  ]:[]
  
  const quantityHandler=(qty)=>{
    // ({...selectedProduct,quantity:qty})
    setquantityH(parseInt(qty))
    quantity=quantityH
    // console.log(quantity)
}
// Categories
const categories = [
  { name: "HOME & LIVING", hasSubmenu: true },
    { name: "KITCHEN ESSENTIALS", hasSubmenu: true },
    { name: "HOUSEHOLD", hasSubmenu: false },
    { name: "ORGANIZERS", hasSubmenu: true },
    { name: "KIDS", hasSubmenu: true },
    { name: "PARTY SUPPLY", hasSubmenu: true },
    { name: "MEN", hasSubmenu: true },
    { name: "WOMEN", hasSubmenu: true },
    { name: "MOBILE", hasSubmenu: true },
    { name: "BEAUTY", hasSubmenu: true },
    { name: "RAMADAN NEEDS", hasSubmenu: false },
    { name: "EIDI ENVELOPES", hasSubmenu: false },
    { name: "PRINTED SUIT", hasSubmenu: false },
    { name: "SALE", hasSubmenu: false },
  ]

  const originalPrice = selectedProduct?.price? selectedProduct.price:[];
  const discountedPrice = selectedProduct.discountedPrice;
  const discount = Math.floor(((originalPrice - discountedPrice) / originalPrice) * 100);


  if (!selectedProduct || Object.keys(selectedProduct).length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading product...</p>
      </div>
    );
  }
  if (error === 'Product not found') {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500">
        Product not found.
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row">
          {/* Categories Sidebar */}
          <div className="w-full hidden md:flex md:w-64 mb-6 md:mb-0 md:mr-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 font-semibold text-gray-700">Categories</div>
              <div className="divide-y">
                {categories.map((category, index) => (
                  <div key={index} className="px-4 py-2 flex items-center justify-between hover:bg-gray-50">
                    <span className="text-gray-700">{category.name}</span>
                    {category.hasSubmenu && <ChevronRight className="h-4 w-4 text-gray-400" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="product-detail">

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Images */}
                <div>
                  <div className="relative mb-4">
                    <div className="absolute top-2 left-2 bg-yellow-400 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center">
                      {discount}%
                    </div>
                    <img
                      src={selectedProduct.image || "/placeholder.svg"}
                      alt="Portable Lunch Box Bag"
                      className="w-full h-auto rounded-lg border"
                    />
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {productImages.map((image, index) => (
                      <div
                        key={index}
                        className={`border rounded cursor-pointer ${selectedImage === index ? "border-blue-500" : "border-gray-200"
                          }`}
                        onClick={() => setSelectedImage(index)}
                      >
                        <img src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} className="w-full h-auto" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <div className="text-sm text-gray-500 mb-1">Eveen - Delivering the Best for Less!</div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    {selectedProduct.title}
                  </h1>

                  {/* Social Sharing */}
                  <div className="flex space-x-2 mb-6">
                    <button className="bg-blue-600 text-white px-4 py-1 rounded flex items-center text-sm">
                      <Share className="h-4 w-4 mr-1" /> Share
                    </button>
                    <button className="bg-blue-400 text-white px-4 py-1 rounded flex items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                      Tweet
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex">
                      <span className="w-32 text-gray-600">Category:</span>
                      <span className="text-gray-800">{selectedProduct.category}</span>
                    </div>
                    <div className="flex">
                      <span className="w-32 text-gray-600">Available:</span>
                      <span className="text-green-600 font-semibold">in stock</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6 flex items-center">
                    <div className="text-4xl font-medium text-red-600">Rs.{((selectedProduct.price).toFixed(2)).toLocaleString()}</div>
                    <div className="text-gray-500 font-semibold text-lg mx-2 line-through">Rs.{selectedProduct.discountedPrice}</div>
                  </div>
                  {/* 
                {countdown &&

                <div className="mb-6">
                  <div className="text-gray-700 font-semibold mb-2">HURRY UP! OFFER ENDS IN</div>
                  <div className="flex space-x-2">
                    <div className="border-2 border-yellow-400 rounded p-2 w-20 text-center">
                      <div className="text-2xl font-bold">{countdown.hours}</div>
                      <div className="text-xs text-gray-500">Hours</div>
                    </div>
                    <div className="border-2 border-yellow-400 rounded p-2 w-20 text-center">
                      <div className="text-2xl font-bold">{countdown.minutes}</div>
                      <div className="text-xs text-gray-500">Minutes</div>
                    </div>
                    <div className="border-2 border-yellow-400 rounded p-2 w-20 text-center">
                      <div className="text-2xl font-bold">{countdown.seconds}</div>
                      <div className="text-xs text-gray-500">Seconds</div>
                    </div>
                  </div>
                </div>
} */}

                  {/* Color Selection
                <div className="mb-6">
                  <div className="text-gray-700 mb-2">Color</div>
                  <div className="flex space-x-2">
                    <button
                      className={`w-8 h-8 rounded-full bg-blue-600 ${selectedColor === "blue" ? "ring-2 ring-offset-2 ring-blue-600" : ""
                        }`}
                      onClick={() => setSelectedColor("blue")}
                    ></button>
                    <button
                      className={`w-8 h-8 rounded-full bg-gray-500 ${selectedColor === "gray" ? "ring-2 ring-offset-2 ring-gray-500" : ""
                        }`}
                      onClick={() => setSelectedColor("gray")}
                    ></button>
                    <button
                      className={`w-8 h-8 rounded-full bg-black ${selectedColor === "black" ? "ring-2 ring-offset-2 ring-black" : ""
                        }`}
                      onClick={() => setSelectedColor("black")}
                    ></button>
                  </div>
                </div> */}
                  <div className="flex flex-col ">
                    <div className="quantity flex items-end">
                      <form action="" className='flex flex-col'>
                        <label htmlFor="qty" className='text-gray-600 my-2'>Quantity</label>
                        <input type="number" name="qty" className=' rounded-3xl w-36 h-9' value={quantityH} onChange={(e)=>quantityHandler(e.target.value)} />
                      </form>
                      <button className=' rounded-3xl mx-2 w-52 font-semibold h-12 border bg-amber-400 hover:bg-black hover:text-white transition-all duration-300' onClick={()=>{
                        dispatch(addToCart({_id,title,image,price,quantity:quantityH}))
                        setquantityH(1)

                      }}>Add to Cart</button>
                    </div>
                    <button className=' rounded-3xl my-5   w-full font-semibold h-12 border bg-black hover:bg-amber-400 hover:text-black text-white transition-all duration-300'>Buy Now</button>
                    <div className="text">
                      <div className="1st-txt flex">
                        <ShoppingCart className='text-amber-400 mr-2 animate-bounce' />
                        <h3 className='text-gray-700 text-base'><strong>Other people want this.</strong> 5 people have this in their carts right now.</h3>
                      </div>
                      <div className="2nd-txt mx-2 my-3 ">
                        <h3 className=' my-2  font-normal text-gray-700 text-sm'>Want it delivered by <strong>Tuesday, 29 April</strong>
                        </h3>
                        <h3 className=' my-2  font-normal text-gray-700 text-sm'>Order today until <span className='text-amber-400 my-3 font-bold'>14:00</span></h3>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
        <div className="des md:mx-5 my-3 ">
          <h3 className='mx-auto max-w-max relative my-2 font-bold text-gray-700 text-lg border-b-amber-400 border-b-2     '>Description</h3>
        <div className="description border  md:p-10 p-5 max-h-max rounded-xl border-gray-400 ">
            <p className='text-gray-700 '>{selectedProduct.description}</p>
          </div>
        </div>
          </div>
{/* <button  className='active:bg-red-700'>Clear cart</button> */}
        </div>
      </main>
      <Newsletter />
      <Footer />

      {/* Light/Dark Mode Toggle
      <div className="fixed left-6 bottom-6 z-50">
        <div className="flex flex-col border border-gray-300 rounded">
          <button className="bg-white text-gray-800 px-4 py-2 text-xs font-medium">LIGHT</button>
          <button className="bg-gray-700 text-white px-4 py-2 text-xs font-medium">DARK</button>
        </div>
      </div> */}
    </div>
  )
}

export default Product_detail