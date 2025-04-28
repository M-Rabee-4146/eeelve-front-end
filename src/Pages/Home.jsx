import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import CardsMain from '../components/CardsMain'
import TopProducts from '../components/TopProducts'
import ProductCard_2 from '../components/ProductCard_2'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { useDispatch, useSelector } from 'react-redux'
import { getallproducts } from '../Redux_toolkit/Features/Product'
import { data, Link, useNavigate } from 'react-router-dom'
import Product_detail from './Product_detail'
import { persistor } from '../Redux_toolkit/store/store'
import { logout } from '../Redux_toolkit/Features/auth'

const Home = () => {
    const { products } = useSelector((state) => state.prod);
    const dispatch = useDispatch();
    const catYoutube = products.filter((data) => data.cardType === 'youtube');
    const navigate=useNavigate()
  

    useEffect(() => {
      dispatch(getallproducts());
    }, []);
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
    
      // 4 imgs map 
      const img_cardids=catYoutube

      // const {token}=useSelector((state)=>state.auth)
      // useEffect((e)=>{
      //   if(!token){
      //     dispatch(logout());
      //     persistor.purge('auth'); // also wipe persisted state
      //     navigate('/api/Login');
      //   }
      // },[])
    
  return (
    <div id='my-scrollbar'>
       <div className="card ">
       <Navbar/>
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
          <div className="cards my-5 grid lg:grid-cols-4 grid-cols-2 lg:gap-x-2 gap-x-4">
            {img_cardids.map((data,index)=>(
              <Link to={data.youtubeLink} key={data._id} target='_blank'>
              <div  className={`img  mb-5 grayscale-0 hover:grayscale-0 transition-all duration-300 ${HoverMobile == true ? 'md:grayscale-0' : 'md:grayscale'}`} onTouchStart={onTouchStart} onTouchCancel={untouch} onTouchEnd={onTouchEnd}>
              <img src={data.image} alt={data.title} />
            </div>
              </Link>
          ))}
          </div>
        </div>
        <CardsMain />
        <ProductCard_2 />
        <TopProducts />
       <Newsletter/>
        <Footer />
      </div>
    </div>
  )
}

export default Home
