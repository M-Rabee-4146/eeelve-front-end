import React from 'react'
import { Progress } from "flowbite-react";
import { Link } from 'react-router-dom'
import '/src/App.css'

const CardsMain = () => {
  const [hours,minutes,seconds]=[30,24,60]
  return (
    <div className='bg-gray-200 w-full h-full flex-col md:flex-row flex justify-center items-center'>
      <div className="lg-card w-2/6 min-w-96 ">
        <div className="p-4  w-full min-h-fit">
          <div className="h-full border-4 p-5  bg-white border-opacity-60 rounded-lg overflow-hidden  border-amber-400">
            <img className=" md:h-80 w-full object-cover object-center rounded-xl" src="https://dummyimage.com/720x400" alt="blog" />
            <div className="p-3 ">
              <Link> <h3 className="text-md title-font font-semibold text-base text-center text-gray-800 mb-1  hover:text-amber-400 transition-all duration-300 " style={{ color: 'var(--text-color)' }} >Set Of 10 Dollar Eid Envelopes, Kids Eidi Envelop, New Trendy Dollar Envelopes</h3></Link>

              {/* {For Timer} */}
              <div className="timer-sale">
                <div className="price flex justify-center items-center my-3">
                  <div className="price-sale text-3xl text-red-600 font-semibold mx-3">Rs.240.00</div>
                  <del className="price-compared text-2xl text-gray-400">Rs.450.00</del>
                </div>
                <div className="stock flex justify-between items-center">
                  <div className="stock-sold">
                    <span style={{ color: 'var(--text-color)' }}>Already Sold: <strong>4100</strong></span>
                  </div>
                  <div className="stocck-available">
                    <span style={{ color: 'var(--text-color)' }}>Available: <strong>100</strong></span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 my-3">
                  <Progress progress={45} size="lg" color="yellow" />
                </div>
              {/* Countdown Timer */}
        <div className="text-center">
          <p className="text-gray-600 mb-2">Hurry! Offer ends in:</p>
          <div className="flex justify-center items-center space-x-4">
            <div className="text-center bg-gray-200 p-3 rounded-lg">
              <div className="text-xl font-bold">{hours}</div>
              <div className="text-xs text-gray-500">HOURS</div>
            </div>
            <div className="text-xl font-bold">:</div>
            <div className="text-center bg-gray-200 p-3 rounded-lg">
              <div className="text-xl font-bold">{minutes}</div>
              <div className="text-xs text-gray-500">Minutes</div>
            </div>
            <div className="text-xl font-bold">:</div>
            <div className="text- bg-gray-200 p-3 rounded-lg">
              <div className="text-xl font-bold">{seconds}</div>
              <div className="text-xs text-gray-500">Seconds</div>
            </div>
          </div>
        </div>
              </div>
            </div>
 
          </div>
        </div>
      </div>
      <div className="sm-cards w-full">
<div className="links flex justify-center items-center mt-5 mb-2">
  <Link className='mx-3 font-semibold border-b-2 border-amber-400'>New Arrival</Link>
  <Link className='mx-1 font-semibold text-gray-600'>on Sale </Link>
  <Link className='mx-3 font-semibold text-gray-600'>Top Rated</Link>
</div>
<div className=' grid-flow-row grid lg:grid-cols-4 grid-cols-2 '>

<div className="p-2 ">
          <div className="h-full border-2 bg-white border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-  md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
            <div className="p-4 ">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 ">The Catalyzer</h1>
              <p className="leading-relaxed">$16.0</p>
            </div>
          </div>
        </div>        <div className="p-2 ">
          <div className="h-full min-h-48 border-2 bg-white border-gray-400 border-opacity-60 rounded-lg overflow-hidden flex-col">
            <div className="img  lg:w-auto md:h-36  h-3/5 ">
            <img className=" object-cover object-center h-full w-full" src="/images/pic.jpg" alt="blog" />
            </div>
            <div className="md:p-4 p-2 ">
              <h1 className="title-font text-lg font-medium text-gray-900 ">The Catalyzer</h1>
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 md:mb-1">CATEGORY</h2>
              <p className="leading-relaxed">$16.0</p>
            </div>
          </div>
        </div>        <div className="p-2 ">
          <div className="h-full border-2 bg-white border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-  md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
            <div className="p-4 ">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 ">The Catalyzer</h1>
              <p className="leading-relaxed">$16.0</p>
            </div>
          </div>
        </div>        <div className="p-2 ">
          <div className="h-full border-2 bg-white border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-  md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
            <div className="p-4 ">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 ">The Catalyzer</h1>
              <p className="leading-relaxed">$16.0</p>
            </div>
          </div>
        </div>        <div className="p-2 ">
          <div className="h-full border-2 bg-white border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-  md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
            <div className="p-4 ">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 ">The Catalyzer</h1>
              <p className="leading-relaxed">$16.0</p>
            </div>
          </div>
        </div>        <div className="p-2 ">
          <div className="h-full border-2 bg-white border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-  md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
            <div className="p-4 ">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 ">The Catalyzer</h1>
              <p className="leading-relaxed">$16.0</p>
            </div>
          </div>
        </div>        <div className="p-2 ">
          <div className="h-full border-2 bg-white border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-  md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
            <div className="p-4 ">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 ">The Catalyzer</h1>
              <p className="leading-relaxed">$16.0</p>
            </div>
          </div>
        </div>        <div className="p-2 ">
          <div className="h-full border-2 bg-white border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-  md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
            <div className="p-4 ">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 ">The Catalyzer</h1>
              <p className="leading-relaxed">$16.0</p>
            </div>
          </div>
        </div>
</div>

      </div>

    </div>
  )
}

export default CardsMain
