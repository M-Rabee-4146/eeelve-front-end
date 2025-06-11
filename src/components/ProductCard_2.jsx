import { Eye, Heart, Trash } from 'lucide-react'
import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteproductbyid, getallproducts } from '../Redux_toolkit/Features/Product'
import toast from 'react-hot-toast'

const ProductCard_2 = () => {
     const { products } = useSelector((state) => state.prod);
      const dispatch = useDispatch();
      // const ExcludedCards = ["youtube", 'slider', 'slidermobile', 'center-big', 'side-big','popular','sale','timer'];
      // const catCards = products.filter((data) => !ExcludedCards.includes(data.cardType));
      const catCards = []||products.filter((data) =>data.category=='kitchen');
      const BigCard = products.find((data) =>data.cardType=='center-big')||{};
      const First4Cards = catCards.slice(0, 4);
      const Second4Cards = catCards.slice(4, 8);
      useEffect(() => {
        dispatch(getallproducts());
      }, []);
   const categories=[{id:'1',name:'Featured'},{id:'2',name:'Popular'},{id:'3',name:'Top'}]
    const cardids_1strow = First4Cards
    const cardids_2ndrow = Second4Cards
    const [hoverState1, SetHoverState1] = useState('')
    const [hoverState2, SetHoverState2] = useState('')
    const handleMouseEnter1 = (id) => {
        SetHoverState1(id)
    }
    const handleMouseLeave1 = () => {
        SetHoverState1(null)
    }
    const handleMouseEnter2 = (id) => {
        SetHoverState2(id)
    }
    const handleMouseLeave2 = () => {
        SetHoverState2(null)
    }
    const [isHover, SetisHover] = useState(false)
    const hoverIsOn = () => {
        SetisHover(true)
    }
    const hoverIsOff = () => {
        SetisHover(false)
    }
// Role checking 
 const {role}=useSelector((state)=>state.auth)
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
        <div>

            {/* Categories */}
            <div className="flex flex-wrap border-b py-3 px-4 overflow-x-auto">
              {categories.map((data,index)=>(

                <button key={index}
                    className={`px-4 py-1 mx-1 text-sm font-medium rounded-full whitespace-nowrap 
            hover:border-yellow-400 
                text-gray-700 border-2 border-transparent  focus:border-amber-500  transition-all duration-400`}
                    // onClick={() => setActiveCategory(category.id)}
                >
                    {data.name}
                </button>))}
            </div>
            <div className="ParentOfCards flex flex-col md:flex-row container mx-auto">
                <div className="Pcard-1 md:w-2/6">
                    <div className=' grid-flow-row grid grid-cols-2 '>
                    { cardids_1strow.map((card, index) => (
                                   <div 
                                     key={index} 
                                     className="p-2 relative hover:drop-shadow-2xl transition-all duration-300 h-max" 
                                     onMouseEnter={() => handleMouseEnter1(card._id)} // Assuming each card has a unique _id
                                     onMouseLeave={handleMouseLeave1}
                                   >
                                     <Link to={`/product/${card._id}`}>
                                       <div className="relative h-full border-2 min-h-72 hover:border-gray-200 bg-white border-transparent border-opacity-60 rounded-lg overflow-hidden p-1">
                                         <h1 className="title-font text-md font-medium text-gray-900 truncate line-clamp-2 text-wrap text-center p-1 hover:text-amber-400 transition-all duration-300">{card.title}</h1>
                                         <img className="md:h-3/5 min-h-44 h-4/6 max-h-[100px] w-full object-cover object-center" src={card.image} alt="blog" />
                                         <div className="px-2 py-2 flex  items-start">
                                           <p className="leading-relaxed mx-1 text-red-600 font-semibold text-lg">Rs: {card.price}</p> 
                                           <del className="leading-relaxed text-gray-500 font-normal">Rs: {card.discountedPrice}</del>
                                         </div>
                                       </div>
                                     </Link>
                                     {role==='admin' &&
                       
                                       <div className="dlt">
                                       <button onClick={()=>handleDelete(card._id)} className="absolute bottom-5 right-5 p-2 rounded-lg bg-red-600 hover ">
                                         <Trash  className='size-5 text-white hover:text-amber-400 transition-all duration-300'/>
                                       </button>
                                     </div>
                                     }
                                     {hoverState1 === card._id && (
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
                <div className="Pcard-2 md:w-2/6">
                    <div className=' h-full w-full '>

                        <div className="p-2 relative hover:drop-shadow-2xl h-full transition-all duration-300" onMouseOver={hoverIsOn} onMouseOut={hoverIsOff}>
                           {BigCard && <Link to={`/product/${BigCard._id}`}>
                                <div className=" relative h-full border-2 min-h-72 hover:border-gray-200  bg-white border-transparent  border-opacity-60 rounded-lg overflow-hidde p-1 flex flex-col justify-center">
                                    <h1 className="title-font text-md font-medium text-gray-900 truncate line-clamp-2 text-wrap text-center p-1 hover:text-amber-400 transition-all duration-300 ">{BigCard.title}</h1>
                                    <img className="md:min-h-3/5 min-h-[475px] max-h-[475px]  h-3/4 w-full object-cover object-center" src={BigCard.image} alt="blog" />
                                    <div className="px-4 py-2 flex items-center">
                                            {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 hidden md:block">CATEGORY</h2> */}
                                            <p className="leading-relaxed mx-1 text-red-600 font-semibold text-lg">Rs :{BigCard.price}</p>
                                            <del className="leading-relaxed text-gray-500 font-normal">Rs :{BigCard.discountedPrice}</del>
                                        </div>
                                </div></Link>}
                            {isHover == true && (<div className={`hover_div mx-2 px-5 bg-white justify-center items-center absolute -bottom-1 border-2 border-t-gray-200 border-b-gray-200 border-gray-200  z-40 rounded-lg rounded-t-none left-0  hidden transition-all duration-300 lg:flex `} style={{ width: '96%' }}>
                                <Link className=' text-gray-600 hover:text-amber-400 transition-all duration-300'>
                                    <span className='flex items-center px-1'><Eye className='size-5 text-gray-600 hover:text-amber-400 transition-all duration-300' />&nbsp;view</span>
                                </Link>
                                <Link className=' text-gray-600 hover:text-amber-400 transition-all duration-300'>
                                    <span className='flex items-center px-1'><Heart className='size-5 text-gray-600 hover:text-amber-400 transition-all duration-300' />&nbsp;view</span>
                                </Link>
                            </div>)}
                            {role==='admin' &&
                       
                       <div className="dlt">
                       <button onClick={()=>handleDelete(BigCard._id)} className="absolute bottom-7 right-5 p-2 rounded-lg bg-red-600 hover ">
                         <Trash  className='size-5 text-white hover:text-amber-400 transition-all duration-300'/>
                       </button>
                     </div>
                     }
                        </div>
                    </div>
                </div>
                <div className="Pcard-3 md:w-2/6">
                    <div className=' grid-flow-row grid grid-cols-2 '>
                       { cardids_2ndrow.map((card, index) => (
                                   <div 
                                     key={index} 
                                     className="p-2 relative hover:drop-shadow-2xl transition-all duration-300 h-max" 
                                     onMouseEnter={() => handleMouseEnter2(card._id)} // Assuming each card has a unique _id
                                     onMouseLeave={handleMouseLeave2}
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
                                     {role==='admin' &&
                       
                                       <div className="dlt">
                                       <button onClick={()=>handleDelete(card._id)} className="absolute bottom-5 right-5 p-2 rounded-lg bg-red-600 hover ">
                                         <Trash  className='size-5 text-white hover:text-amber-400 transition-all duration-300'/>
                                       </button>
                                     </div>
                                     }
                                     {hoverState2 === card._id && (
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

        </div>
    )
}

export default ProductCard_2
