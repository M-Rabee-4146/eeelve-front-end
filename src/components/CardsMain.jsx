import React, { useEffect, useState } from 'react'
import { Progress } from "flowbite-react";
import { Link } from 'react-router-dom'
import '/src/App.css'
import { Eye, Heart, Trash } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteproductbyid, getallproducts } from '../Redux_toolkit/Features/Product';
import toast from 'react-hot-toast';
import useCountdown from '../hook/Countdown';

const CardsMain = () => {
  const { products } = useSelector((state) => state.prod);
  const dispatch = useDispatch();
  const ExcludedCards = ["youtube", 'slider', 'slidermobile', 'center-big', 'side-big', 'popular', 'sale', 'timer'];
  const catCards =[]|| products.filter((data) => !ExcludedCards.includes(data.cardType));
  const sixCards = catCards.slice(0, 8);
  useEffect(() => {
    dispatch(getallproducts());
  }, []);

  const timerCard = products.find((data) => data.cardType === 'timer')
  // console.log(timerCard)
  const { hours, minutes, seconds } = useCountdown(timerCard?.timerEndsAt)
  // console.log(timerCard._id)
  const cards = sixCards;

  // Initialize hover state with card IDs
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  // Active Links style 
  const [activeLink, setActiveLink] = useState('Arrival');
  const ArrivalActiveLink = () => {
    setActiveLink('Arrival');
  };
  const SaleActiveLink = () => {
    setActiveLink('Sale');
  };
  const TopActiveLink = () => {
    setActiveLink('Top');
  };
  const { role } = useSelector((state) => state.auth)
  // console.log(role)
  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this product?');
    if (!confirm) return;

    const result = await dispatch(deleteproductbyid(id));

    if (deleteproductbyid.fulfilled.match(result)) {
      toast.success('Product deleted');
      dispatch(getallproducts()); // refresh product list
    } else {
      toast.error(result.payload || 'Failed to delete');
    }
  };



  return (
    <div className='bg-gray-200 w-full h-full flex-col md:flex-row flex justify-center items-center'>
      {timerCard && <div className="lg-card md:w-2/6 min-w-96 relative">
        <Link to={`/product/${timerCard._id}`}>

          <div className="p-4  w-full min-h-fit">
            <div className="h-full border-4 p-5  bg-white border-opacity-60 rounded-lg overflow-hidden  border-amber-400">
              <img className=" md:h-80 w-full object-cover object-center rounded-xl" src={timerCard.image} alt="blog" />
              <div className="p-3 ">
                 <h3 className="text-md title-font font-semibold text-base text-center text-gray-800 mb-1  hover:text-amber-400 transition-all duration-300 " style={{ color: 'var(--text-color)' }} >{timerCard.title}</h3>

                {/* {For Timer} */}
                <div className="timer-sale">
                  <div className="price flex justify-center items-center my-3">
                    <div className="price-sale text-3xl text-red-600 font-semibold mx-3">Rs.{timerCard.price}</div>
                    <del className="price-compared text-2xl text-gray-400">Rs.{timerCard.discountedPrice}</del>
                  </div>
                  <div className="stock flex justify-between items-center">
                    <div className="stock-sold">
                      <span style={{ color: 'var(--text-color)' }}>Already Sold: <strong>{timerCard.sold ? timerCard.sold : '200'}</strong></span>
                    </div>
                    <div className="stocck-available">
                      <span style={{ color: 'var(--text-color)' }}>Available: <strong>100</strong></span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 my-3">
                    <Progress progress={45} size="lg" color="yellow" />
                  </div>
                  {/* Countdown Timer */}
                  <div className="text-center" >
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
        </Link>
        {role === 'admin' &&

          <div className="dlt">
            <button onClick={() => handleDelete(timerCard._id)} className="absolute bottom-56 right-7 p-2 rounded-lg bg-red-600 hover ">
              <Trash className='size-5 text-white hover:text-amber-400 transition-all duration-300' />
            </button>
          </div>
        }
      </div>}
      <div className="sm-cards w-full">
        <div className="links flex justify-center items-center mt-5 mb-2">
          <Link className={`mx-3 ${activeLink == 'Arrival' ? 'font-semibold border-amber-400' : ''}  border-b-2  hover:border-amber-400 text-gray-600 focus:text-gray-900 transition-all duration-500`} onClick={ArrivalActiveLink}>New Arrival</Link>
          <Link className={`mx-1  ${activeLink == 'Sale' ? 'font-semibold border-amber-400' : ''} border-b-2 hover:border-amber-400 text-gray-600 focus:text-gray-900 transition-all duration-500`} onClick={SaleActiveLink}>on Sale </Link>
          <Link className={`mx-3  ${activeLink == 'Top' ? 'font-semibold border-amber-400' : ''} border-b-2 hover:border-amber-400 text-gray-600 focus:text-gray-900 transition-all duration-500`} onClick={TopActiveLink}>Top Rated</Link>
        </div>
        <div className='grid-flow-row grid lg:grid-cols-4 grid-cols-2'>
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-2 relative hover:drop-shadow-2xl transition-all duration-300 h-max"
              onMouseEnter={() => handleMouseEnter(card._id)} // Assuming each card has a unique _id
              onMouseLeave={handleMouseLeave}
            >
              <Link to={`/product/${card._id}`}>
                <div className="relative h-full border-2 min-h-72 hover:border-gray-200 bg-white border-transparent border-opacity-60 rounded-lg overflow-hidden p-1">
                  <h1 className="title-font text-md font-medium text-gray-900 truncate line-clamp-2 text-wrap text-center p-1 hover:text-amber-400 transition-all duration-300">{card.title}</h1>
                  <img className="md:h-3/5 min-h-44 h-4/6 max-h-[200px] w-full object-cover object-center" src={card.image} alt="blog" />
                  <div className="px-2 py-2 flex  items-start">
                    <p className="leading-relaxed mx-1 text-red-600 font-semibold text-lg">Rs: {card.price}</p>
                    <del className="leading-relaxed text-gray-500 font-normal">Rs: {card.discountedPrice}</del>
                  </div>
                </div>
              </Link>
              {role === 'admin' &&

                <div className="dlt">
                  <button onClick={() => handleDelete(card._id)} className="absolute bottom-5 right-5 p-2 rounded-lg bg-red-600 hover ">
                    <Trash className='size-5 text-white hover:text-amber-400 transition-all duration-300' />
                  </button>
                </div>
              }
              {hoveredCardId === card._id && (
                <div className={`hover_div mx-2 px-5 bg-white justify-center items-center absolute -bottom-1 border-2 border-t-gray-200 border-b-gray-200 border-gray-200 z-40 rounded-lg rounded-t-none left-0 hidden transition-all duration-300 lg:flex`} style={{ width: '93%' }}>
                  <Link to={`/product/${card._id}`} className='text-gray-600 hover:text-amber-400 transition-all duration-300'>
                    <span className='flex items-center px-1'><Eye className='size-5 text-gray-600 hover:text-amber-400 transition-all duration-300' />&nbsp;view</span>
                  </Link>
                  <Link className='text-gray-600 hover:text-amber-400 transition-all duration-300'>
                    <span className='flex items-center px-1'><Heart className='size-5 text-gray-600 hover:text-amber-400 transition-all duration-300' />&nbsp;Like</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsMain;
