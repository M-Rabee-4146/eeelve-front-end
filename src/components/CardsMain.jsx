import React, { useState } from 'react'
import { Progress } from "flowbite-react";
import { Link } from 'react-router-dom'
import '/src/App.css'
import { Eye, Heart } from 'lucide-react';

const CardsMain = () => {
  const [hours,minutes,seconds]=[30,24,60]
  const cards=['Card1','Card2','Card3','Card4','Card5','Card6','Card7','Card8'  ]
    const [hoverState1, SetHoverState1] = useState(cards.reduce((acc, id) => ({
          ...acc, [id]: false
      })))
      const handleMouseEnter1 = (id) => {
        SetHoverState1((prev) => ({ ...prev, [id]: true }))
    }
    const handleMouseLeave1 = (id) => {
        SetHoverState1((prev) => ({ ...prev, [id]: false }))
    }
// Active Links style 
    const [activeLink,setActiveLink]=useState('Arrival')
    const ArrivalActiveLink=()=>{
      setActiveLink('Arrival')
    }
    const SaleActiveLink=()=>{
      setActiveLink('Sale')
    }
    const TopActiveLink=()=>{
      setActiveLink('Top')
    }

  return (
    <div className='bg-gray-200 w-full h-full flex-col md:flex-row flex justify-center items-center'>
      <div className="lg-card md:w-2/6 min-w-96 ">
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
  <Link className={`mx-3 ${activeLink=='Arrival'?'font-semibold border-amber-400':''}  border-b-2  hover:border-amber-400 text-gray-600 focus:text-gray-900 transition-all duration-500`} onClick={ArrivalActiveLink}>New Arrival</Link>
  <Link className={`mx-1  ${activeLink=='Sale'?'font-semibold border-amber-400':''} border-b-2 hover:border-amber-400 text-gray-600 focus:text-gray-900 transition-all duration-500`} onClick={SaleActiveLink}>on Sale </Link>
  <Link className={`mx-3  ${activeLink=='Top'?'font-semibold border-amber-400':''} border-b-2 hover:border-amber-400 text-gray-600 focus:text-gray-900 transition-all duration-500`} onClick={TopActiveLink}>Top Rated</Link>
</div>
<div className=' grid-flow-row grid lg:grid-cols-4 grid-cols-2 '>

{cards.map((id,index) => (


<div key={index} className="p-2 relative hover:drop-shadow-2xl transition-all duration-300" onMouseOver={() => handleMouseEnter1(id)} onMouseOut={() => handleMouseLeave1(id)}>
    <Link>
        <div className=" relative h-full border-2 min-h-72 hover:border-gray-200  bg-white border-transparent  border-opacity-60 rounded-lg overflow-hidde p-1">
            <h1 className="title-font text-md font-medium text-gray-900 truncate line-clamp-2 text-wrap text-center p-1 hover:text-amber-400 transition-all duration-300 ">The Catalyzer Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus quasi ipsam neque assumenda, esse obcaecati ipsum eligendi dolores molestiae doloremque inventore soluta!</h1>
            <img className="md:h-3/5 min-h-44  h-4/6 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
            <div className="px-4 py-2 flex items-center">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 hidden md:block">CATEGORY</h2> */}
                <p className="leading-relaxed mx-1 text-red-600 font-semibold text-lg">$16.0</p>
                <del className="leading-relaxed text-gray-500 font-normal">$20.0</del>
            </div>
        </div></Link>
    {hoverState1[id] == true && (<div className={`hover_div mx-2 px-5 bg-white justify-center items-center absolute -bottom-1 border-2 border-t-gray-200 border-b-gray-200 border-gray-200  z-40 rounded-lg rounded-t-none left-0  hidden transition-all duration-300 lg:flex `} style={{ width: '93%' }}>
        <Link className=' text-gray-600 hover:text-amber-400 transition-all duration-300'>
            <span className='flex items-center px-1'><Eye className='size-5 text-gray-600 hover:text-amber-400 transition-all duration-300' />&nbsp;view</span>
        </Link>
        <Link className=' text-gray-600 hover:text-amber-400 transition-all duration-300'>
            <span className='flex items-center px-1'><Heart className='size-5 text-gray-600 hover:text-amber-400 transition-all duration-300' />&nbsp;view</span>
        </Link>
    </div>)}
</div>
))
}     
</div>

      </div>

    </div>
  )
}

export default CardsMain
