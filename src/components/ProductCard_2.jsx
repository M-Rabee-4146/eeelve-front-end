import { Eye, Heart } from 'lucide-react'
import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard_2 = () => {
   const categories=[{id:'1',name:'Featured'},{id:'2',name:'Popular'},{id:'3',name:'Top'}]
    const cardids_1strow = ['card1', 'card2', 'card3', 'card4']
    const cardids_2strow = ['card1', 'card2', 'card3', 'card4']
    const [hoverState1, SetHoverState1] = useState(cardids_1strow.reduce((acc, id) => ({
        ...acc, [id]: false
    })))
    const [hoverState2, SetHoverState2] = useState(cardids_2strow.reduce((acc, id) => ({
        ...acc, [id]: false
    })))
    const handleMouseEnter1 = (id) => {
        SetHoverState1((prev) => ({ ...prev, [id]: true }))
    }
    const handleMouseLeave1 = (id) => {
        SetHoverState1((prev) => ({ ...prev, [id]: false }))
    }
    const handleMouseEnter2 = (id) => {
        SetHoverState2((prev) => ({ ...prev, [id]: true }))
    }
    const handleMouseLeave2 = (id) => {
        SetHoverState2((prev) => ({ ...prev, [id]: false }))
    }
    const [isHover, SetisHover] = useState(false)
    const hoverIsOn = () => {
        SetisHover(true)
        console.log(isHover)
    }
    const hoverIsOff = () => {
        SetisHover(false)
        console.log(isHover)
    }
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
                    autoFocus
                >
                    {data.name}
                </button>))}
            </div>
            <div className="ParentOfCards flex flex-col md:flex-row container mx-auto">
                <div className="Pcard-1 md:w-2/6">
                    <div className=' grid-flow-row grid grid-cols-2 '>
                        {cardids_1strow.map((id) => (


                            <div className="p-2 relative hover:drop-shadow-2xl" onMouseOver={() => handleMouseEnter1(id)} onMouseOut={() => handleMouseLeave1(id)}>
                                <Link>
                                    <div className=" relative h-full border-2 min-h-72 hover:border-gray-200  bg-white border-transparent  border-opacity-60 rounded-lg overflow-hidde p-1">
                                        <h1 className="title-font text-md font-medium text-gray-900 truncate line-clamp-2 text-wrap text-center p-1 hover:text-amber-400 transition-all duration-300 ">The Catalyzer Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus quasi ipsam neque assumenda, esse obcaecati ipsum eligendi dolores molestiae doloremque inventore soluta!</h1>
                                        <img className="md:h-3/5 min-h-44  h-4/6 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                        <div className="px-4 py-2 flex items-center">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 hidden md:block">CATEGORY</h2>
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
                <div className="Pcard-2 md:w-2/6">
                    <div className=' h-full w-full '>

                        <div className="p-2 relative hover:drop-shadow-2xl h-full" onMouseOver={hoverIsOn} onMouseOut={hoverIsOff}>
                            <Link>
                                <div className=" relative h-full border-2 min-h-72 hover:border-gray-200  bg-white border-transparent  border-opacity-60 rounded-lg overflow-hidde p-1 flex flex-col justify-center">
                                    <h1 className="title-font text-md font-medium text-gray-900 truncate line-clamp-2 text-wrap text-center p-1 hover:text-amber-400 transition-all duration-300 ">The Catalyzer Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus quasi ipsam neque assumenda, esse obcaecati ipsum eligendi dolores molestiae doloremque inventore soluta!</h1>
                                    <img className="md:min-h-3/5 min-h-44  h-3/4 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                    <div className="px-4 py-2 flex items-center">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 hidden md:block">CATEGORY</h2>
                                            <p className="leading-relaxed mx-1 text-red-600 font-semibold text-lg">$16.0</p>
                                            <del className="leading-relaxed text-gray-500 font-normal">$20.0</del>
                                        </div>
                                </div></Link>
                            {isHover == true && (<div className={`hover_div mx-2 px-5 bg-white justify-center items-center absolute -bottom-1 border-2 border-t-gray-200 border-b-gray-200 border-gray-200  z-40 rounded-lg rounded-t-none left-0  hidden transition-all duration-300 lg:flex `} style={{ width: '96%' }}>
                                <Link className=' text-gray-600 hover:text-amber-400 transition-all duration-300'>
                                    <span className='flex items-center px-1'><Eye className='size-5 text-gray-600 hover:text-amber-400 transition-all duration-300' />&nbsp;view</span>
                                </Link>
                                <Link className=' text-gray-600 hover:text-amber-400 transition-all duration-300'>
                                    <span className='flex items-center px-1'><Heart className='size-5 text-gray-600 hover:text-amber-400 transition-all duration-300' />&nbsp;view</span>
                                </Link>
                            </div>)}
                        </div>
                    </div>
                </div>
                <div className="Pcard-3 md:w-2/6">
                    <div className=' grid-flow-row grid grid-cols-2 '>
                        {cardids_2strow.map((id) => (


                            <div className="p-2 relative hover:drop-shadow-2xl" onMouseOver={() => handleMouseEnter2(id)} onMouseOut={() => handleMouseLeave2(id)}>
                                <Link>
                                    <div className=" relative h-full border-2 min-h-72 hover:border-gray-200  bg-white border-transparent  border-opacity-60 rounded-lg overflow-hidde p-1">
                                        <h1 className="title-font text-md font-medium text-gray-900 truncate line-clamp-2 text-wrap text-center p-1 hover:text-amber-400 transition-all duration-300 ">The Catalyzer Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus quasi ipsam neque assumenda, esse obcaecati ipsum eligendi dolores molestiae doloremque inventore soluta!</h1>
                                        <img className="md:h-3/5 min-h-44  h-4/6 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                        <div className="px-4 py-2 flex items-center">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 hidden md:block">CATEGORY</h2>
                                            <p className="leading-relaxed mx-1 text-red-600 font-semibold text-lg">$16.0</p>
                                            <del className="leading-relaxed text-gray-500 font-normal">$20.0</del>
                                        </div>
                                    </div></Link>
                                {hoverState2[id] == true && (<div className={`hover_div mx-2 px-5 bg-white justify-center items-center absolute -bottom-1 border-2 border-t-gray-200 border-b-gray-200 border-gray-200  z-40 rounded-lg rounded-t-none left-0  hidden transition-all duration-300 lg:flex `} style={{ width: '93%' }}>
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

        </div>
    )
}

export default ProductCard_2
