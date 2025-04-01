import { Eye, Heart } from 'lucide-react'
import React, { use, useState } from 'react'

const ProductCard_2 = () => {
    const [isHover,SetisHover]=useState(false)
    const hoverIsOn=()=>{
SetisHover(true)
console.log(isHover)
    }
    const hoverIsOff=()=>{
SetisHover(false)
console.log(isHover)
    }
    return (
        <div>

            {/* Categories */}
            <div className="flex flex-wrap border-b py-3 px-4 overflow-x-auto">
                <button
                    className={`px-4 py-1 mx-1 text-sm font-medium rounded-full whitespace-nowrap 
            hover:border-yellow-400 
                text-gray-700 border-2 border-transparent  focus:border-amber-500  transition-all duration-400`}
                    // onClick={() => setActiveCategory(category.id)}
                    autoFocus
                >
                    {/* {category.name} */}Popular
                </button>
            </div>
            <div className="ParentOfCards flex flex-col md:flex-row container mx-auto">
                <div className="Pcard-1 md:w-2/6">
                    <div className=' grid-flow-row grid grid-cols-2 '>

                        <div className="p-2 ">
                            <div onMouseOver={hoverIsOn} onMouseOut={hoverIsOff} className="h-full border-2 min-h-72 bg-white border-transparent  border-opacity-60 rounded-lg overflow-hidden p-1">
                                <h1 className="title-font text-md font-medium text-gray-900 truncate line-clamp-2 text-wrap text-center p-1 hover:text-amber-400 transition-all duration-300 ">The Catalyzer Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus quasi ipsam neque assumenda, esse obcaecati ipsum eligendi dolores molestiae doloremque inventore soluta!</h1>
                                <img className="md:h-3/5 min-h-44  h-4/6 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                <div className="px-4 py-2 ">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 hidden md:block">CATEGORY</h2>
                                    <p className="leading-relaxed">$16.0</p>
                                </div>
                               {isHover==true &&( <div className={`hover_div px-5 bg-white justify-center items-center absolute `}>
                                    <span className='flex items-center px-1 text-gray-600'><Eye className='size-5 text-gray-600' />&nbsp;view</span>
                                    <span className='flex items-center px-1 text-gray-600'><Heart className='size-5 text-gray-600' />&nbsp;view</span>
                                </div>)}
                            </div>
                        </div><div className="p-2 ">
                            <div className="h-full border-2 bg-white border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="md:h-4/6 min-h-44  h-4/6 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                <div className="px-4 py-2 ">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 hidden md:block">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 truncate ">The Catalyzer</h1>
                                    <p className="leading-relaxed">$16.0</p>
                                </div>
                            </div>
                        </div><div className="p-2 ">
                            <div className="h-full border-2 bg-white border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="md:h-4/6 min-h-44  h-4/6 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                <div className="px-4 py-2 ">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 hidden md:block">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 truncate ">The Catalyzer</h1>
                                    <p className="leading-relaxed">$16.0</p>
                                </div>
                            </div>
                        </div><div className="p-2 ">
                            <div className="h-full border-2 bg-white border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="md:h-4/6 min-h-44  h-4/6 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                <div className="px-4 py-2 ">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 hidden md:block">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 truncate ">The Catalyzer</h1>
                                    <p className="leading-relaxed">$16.0</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="Pcard-2 md:w-2/6">
                    <div className=' h-full w-full '>

                        <div className="p-2 h-full ">
                            <div className="h-full border-2 bg-white border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
                                <h1 className="title-font text-lg font-medium text-gray-900 p-3 text-center hover:text-amber-400 ">The Catalyzer Lorem</h1>
                                <img className="h-3/4  md:h-3/4 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                <div className="p-4 ">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <p className="leading-relaxed">$16.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Pcard-3 md:w-2/6">
                    <div className=' grid-flow-row grid grid-cols-2 '>

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
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard_2
