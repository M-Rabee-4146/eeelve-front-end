import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Slider from './components/Slider'
import CardsMain from './components/CardsMain'
import TopProducts from './components/TopProducts'
import ProductCard_2 from './components/ProductCard_2'
import { Send } from 'lucide-react'
import Footer from './components/Footer'

const App = () => {
  const [ReadMore, SetReadMore] = useState(false)
  const readMoreWorking = () => {
    SetReadMore(!ReadMore)
  }
  const [HoverMobile, SetHoverMobile] = useState(false)
  const onTouchStart = () => {
    SetHoverMobile(true)
  }
  const onTouchEnd = () => {
    SetHoverMobile(false)
  }
  const untouch = () => {
    SetHoverMobile(false)
  }
  return (
    <div>
      <div className="card ">
        <Navbar />
        <Slider />
        <div className="container mx-auto md:px-10 my-10 px-5   ">
          <h5 className='font-bold text-gray-800 '>Welcome to Eveen.pk:
          </h5>
          <h5 className='font-bold  text-gray-800'> Best Online Shopping Store in Pakistan</h5>
          <p className='my-5 text-gray-700'>Looking for the best
            online shopping store in Pakistan? Your search ends here at Eveen.pk, where we offer a seamless online shopping experience for a wide range of products, from home gadgets to exquisite home decoration items.</p>
          {ReadMore == true && (
            <div className="more-text">
              <p className='my-5 text-gray-700'>Best Online Shopping Experience
                Eveen.pk is committed to providing the best online shopping experience in Pakistan. Our online shopping site is designed to offer convenience, variety, and security, ensuring that you can find the best price online shopping with just a few clicks.</p>
              <p className='my-5 text-gray-700'>Our shoe organizers, makeup organizers, jewellery organizers, and clothes organizers are designed to keep your belongings neat and easily accessible. From makeup organizer bags and boxes to rotating makeup organizers, we have the perfect solution.</p>
              <h5 className='font-bold text-gray-800'>Quality and Affordability At One Place</h5>
              <p className='mb-5 text-gray-700'>We take pride in curating a diverse selection of home gadgets in Pakistan and home decoration items that combine quality and affordability. Whether you're looking for practical gadgets to simplify your daily routine or elegant decor pieces to elevate your living space, Eveen.pk has it all.</p>
              <h5 className='font-bold text-gray-800'>Unbeatable Selection and Value
              </h5>
              <p className='mb-5 text-gray-700'>As the best online shopping store in Pakistan, Eveen.pk offers an unbeatable selection of products at the best prices. Our commitment to providing value for our customers means that you can shop with confidence, knowing that you're getting the most competitive deals on the market.</p>
            </div>

          )}
          <button onClick={readMoreWorking}>{ReadMore == true ? "Read Less" : "Read More"}</button>
          <div className="cards my-10 row lg:columns-4 md:columns-2">
            <div className={`img  mb-5 grayscale hover:grayscale-0 transition-all duration-300 ${HoverMobile == true ? 'grayscale-0' : 'grayscale'}`} onTouchStart={onTouchStart} onTouchCancel={untouch} onTouchEnd={onTouchEnd}>
              <img src="/images/pic.jpg" alt="" />
            </div>
            <div className={`img  mb-5 grayscale hover:grayscale-0 transition-all duration-300 ${HoverMobile == true ? 'grayscale-0' : 'grayscale'}`} onTouchStart={onTouchStart} onTouchCancel={untouch} onTouchEnd={onTouchEnd}>
              <img src="/images/pic.jpg" alt="" />
            </div>
            <div className={`img  mb-5 grayscale hover:grayscale-0 transition-all duration-300 ${HoverMobile == true ? 'grayscale-0' : 'grayscale'}`} onTouchStart={onTouchStart} onTouchCancel={untouch} onTouchEnd={onTouchEnd}>
              <img src="/images/pic.jpg" alt="" />
            </div>
            <div className={`img  mb-5 grayscale hover:grayscale-0 transition-all duration-300 ${HoverMobile == true ? 'grayscale-0' : 'grayscale'}`} onTouchStart={onTouchStart} onTouchCancel={untouch} onTouchEnd={onTouchEnd}>
              <img src="/images/pic.jpg" alt="" />
            </div>
          </div>
        </div>
        <CardsMain />
        <ProductCard_2 />
        <TopProducts />
        {/* Newsletter Section */}
        <div className="w-full bg-amber-400 py-5 ">
          <div className="max-w-7xl mx-auto px-2 container  flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Send className="h-8 w-8 mr-3 transform -rotate-12" />
              <div className='flex md:block'>
                <h3 className="text-xl font-bold">Sign up to</h3>
                <h3 className="text-xl font-bold">&nbsp;Newsletter</h3>
              </div>
            </div>

            <div className="text-sm md:mx-4 mb-4 md:mb-0 hidden md:flex">
              and receive{" "}
              <span className="font-semibold"> &nbsp;updates on special promotions, gift ideas, sales and more.</span>
            </div>

            <div className="w-full md:w-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow md:px-4 px-3 py-2 rounded-l-full focus:outline-none"
              />
              <button className="bg-gray-800 text-white md:px-6 px-3 py-2 rounded-r-full font-medium hover:bg-gray-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </div>
  )
}

export default App
