import React from 'react'

const TopProducts = () => {
  return (
    <div className='h-full  w-full flex-col md:flex-row items-center lg:container lg:px-0 md:px-5 mx-auto flex'>
      {/* Pop-cards */}
      <div className="TopProducts md:w-3/4 flex-col md:flex-row flex">
        {/* Featured Products  */}
        <div className="featured-Product relative md:w-1/3 py-2 pt-3 px-5">
          <h1 className='after:border-b-amber-500 after:bg-amber-400 after:h-0.5 after:w-20 after:absolute after:inset-0 after:top-14 after:left-6 border border-b-gray-400 border-transparent text-xl py-2 font-semibold'>Featured Products</h1 >
          <div className='horizontal-card flex flex-col'>

            {/* 1st Card Real one*/}
            <div className="flex items-center my-1 justify-center hover:shadow-2xl transition-all duration-300 hover:border-gray-300 border rounded-xl p-1">
              <div className="hoz-img min-w-24 max-w-24  h-24 rounded-xl overflow-hidden">
                <img className='object-cover h-full' src="/images/pic.jpg" alt="" />

              </div>
              <div className="hoz-card-text px-1 md:w-40 h-28 w-full flex-col justify-center flex ">
                <h5 className='text-sm text-gray-600'>Category</h5>
                <h1 className='font-bold truncate line-clamp-2 text-wrap hover:text-amber-400 transition-all duration-300'>Name is going to be Here ggggggggggggg</h1>
                <h3 className='font-bold text-red-600'>$250.00 <span><del className='text-gray-600 font-semibold'>$400.00</del></span></h3>
              </div>
            </div>

            {/* 2nd Card  */}
            <div className="horizontal-card flex items-center mb-1 justify-center hover:shadow-2xl transition-all duration-300 hover:border-gray-300 border rounded-xl p-1">
              <div className="hoz-img min-w-24 h-24 max-w-24 rounded-xl overflow-hidden">
                <img className='object-cover h-full' src="/images/pic.jpg" alt="" />

              </div>
              <div className="hoz-card-text px-1 md:w-40 w-full h-28 flex-col justify-center flex ">
                <h5 className='text-sm text-gray-600'>Category</h5>
                <h1 className='font-bold truncate line-clamp-2 text-wrap hover:text-amber-400 transition-all duration-300'>Name is going to be Here ggggggggggggg</h1>
                <h3 className='font-bold text-red-600'>$250.00 <span><del className='text-gray-600 font-semibold'>$400.00</del></span></h3>
              </div>
            </div>

            {/* 3rd Card  */}
            <div className="horizontal-card flex items-center mb-1 justify-center hover:shadow-2xl transition-all duration-300 hover:border-gray-300 border rounded-xl p-1">
              <div className="hoz-img min-w-24 max-w-24 h-24 rounded-xl overflow-hidden">
                <img className='object-cover h-full' src="/images/pic.jpg" alt="" />

              </div>
              <div className="hoz-card-text px-1 md:w-40 w-full h-28 flex-col justify-center flex ">
                <h5 className='text-sm text-gray-600'>Category</h5>
                <h1 className='font-bold truncate line-clamp-2 text-wrap hover:text-amber-400 transition-all duration-300'>Name is going to be Here ggggggggggggg</h1>
                <h3 className='font-bold text-red-600'>$250.00 <span><del className='text-gray-600 font-semibold'>$400.00</del></span></h3>
              </div>
            </div>


          </div>
        </div>

        {/* New Products  */}
        <div className="featured-Product relative md:w-1/3 py-2 pt-3 px-5">
          <h1 className='after:border-b-amber-500 after:bg-amber-400 after:h-0.5 after:w-20 after:absolute after:inset-0 after:top-14 after:left-6 border border-b-gray-400 border-transparent text-xl py-2 font-semibold'>New Products</h1 >
          <div className='horizontal-card flex flex-col'>

            {/* 1st Card Real one*/}
            <div className="flex items-center my-1 justify-center hover:shadow-2xl transition-all duration-300 hover:border-gray-300 border rounded-xl p-1">
              <div className="hoz-img min-w-24 max-w-24  h-24 rounded-xl overflow-hidden">
                <img className='object-cover h-full' src="/images/pic.jpg" alt="" />

              </div>
              <div className="hoz-card-text px-1 md:w-40 h-28 w-full flex-col justify-center flex ">
                <h5 className='text-sm text-gray-600'>Category</h5>
                <h1 className='font-bold truncate line-clamp-2 text-wrap hover:text-amber-400 transition-all duration-300'>Name is going to be Here ggggggggggggg</h1>
                <h3 className='font-bold text-red-600'>$250.00 <span><del className='text-gray-600 font-semibold'>$400.00</del></span></h3>
              </div>
            </div>

            {/* 2nd Card  */}
            <div className="horizontal-card flex items-center mb-1 justify-center hover:shadow-2xl transition-all duration-300 hover:border-gray-300 border rounded-xl p-1">
              <div className="hoz-img min-w-24 h-24 max-w-24 rounded-xl overflow-hidden">
                <img className='object-cover h-full' src="/images/pic.jpg" alt="" />

              </div>
              <div className="hoz-card-text px-1 md:w-40 w-full h-28 flex-col justify-center flex ">
                <h5 className='text-sm text-gray-600'>Category</h5>
                <h1 className='font-bold truncate line-clamp-2 text-wrap hover:text-amber-400 transition-all duration-300'>Name is going to be Here ggggggggggggg</h1>
                <h3 className='font-bold text-red-600'>$250.00 <span><del className='text-gray-600 font-semibold'>$400.00</del></span></h3>
              </div>
            </div>

            {/* 3rd Card  */}
            <div className="horizontal-card flex items-center mb-1 justify-center hover:shadow-2xl transition-all duration-300 hover:border-gray-300 border rounded-xl p-1">
              <div className="hoz-img min-w-24 max-w-24 h-24 rounded-xl overflow-hidden">
                <img className='object-cover h-full' src="/images/pic.jpg" alt="" />

              </div>
              <div className="hoz-card-text px-1 md:w-40 w-full h-28 flex-col justify-center flex ">
                <h5 className='text-sm text-gray-600'>Category</h5>
                <h1 className='font-bold truncate line-clamp-2 text-wrap hover:text-amber-400 transition-all duration-300'>Name is going to be Here ggggggggggggg</h1>
                <h3 className='font-bold text-red-600'>$250.00 <span><del className='text-gray-600 font-semibold'>$400.00</del></span></h3>
              </div>
            </div>


          </div>
        </div>

        {/* Popular Products  */}
        <div className="featured-Product relative md:w-1/3 py-2 pt-3 px-5">
          <h1 className='after:border-b-amber-500 after:bg-amber-400 after:h-0.5 after:w-20 after:absolute after:inset-0 after:top-14 after:left-6 border border-b-gray-400 border-transparent text-xl py-2 font-semibold'>Popular Products</h1 >
          <div className='horizontal-card flex flex-col'>

            {/* 1st Card Real one*/}
            <div className="flex items-center my-1 justify-center hover:shadow-2xl transition-all duration-300 hover:border-gray-300 border rounded-xl p-1">
              <div className="hoz-img min-w-24 max-w-24  h-24 rounded-xl overflow-hidden">
                <img className='object-cover h-full' src="/images/pic.jpg" alt="" />

              </div>
              <div className="hoz-card-text px-1 md:w-40 h-28 w-full flex-col justify-center flex ">
                <h5 className='text-sm text-gray-600'>Category</h5>
                <h1 className='font-bold truncate line-clamp-2 text-wrap hover:text-amber-400 transition-all duration-300'>Name is going to be Here ggggggggggggg</h1>
                <h3 className='font-bold text-red-600'>$250.00 <span><del className='text-gray-600 font-semibold'>$400.00</del></span></h3>
              </div>
            </div>

            {/* 2nd Card  */}
            <div className="horizontal-card flex items-center mb-1 justify-center hover:shadow-2xl transition-all duration-300 hover:border-gray-300 border rounded-xl p-1">
              <div className="hoz-img min-w-24 h-24 max-w-24 rounded-xl overflow-hidden">
                <img className='object-cover h-full' src="/images/pic.jpg" alt="" />

              </div>
              <div className="hoz-card-text px-1 md:w-40 w-full h-28 flex-col justify-center flex ">
                <h5 className='text-sm text-gray-600'>Category</h5>
                <h1 className='font-bold truncate line-clamp-2 text-wrap hover:text-amber-400 transition-all duration-300'>Name is going to be Here ggggggggggggg</h1>
                <h3 className='font-bold text-red-600'>$250.00 <span><del className='text-gray-600 font-semibold'>$400.00</del></span></h3>
              </div>
            </div>

            {/* 3rd Card  */}
            <div className="horizontal-card flex items-center mb-1 justify-center hover:shadow-2xl transition-all duration-300 hover:border-gray-300 border rounded-xl p-1">
              <div className="hoz-img min-w-24 max-w-24 h-24 rounded-xl overflow-hidden">
                <img className='object-cover h-full' src="/images/pic.jpg" alt="" />

              </div>
              <div className="hoz-card-text px-1 md:w-40 w-full h-28 flex-col justify-center flex ">
                <h5 className='text-sm text-gray-600'>Category</h5>
                <h1 className='font-bold truncate line-clamp-2 text-wrap hover:text-amber-400 transition-all duration-300'>Name is going to be Here ggggggggggggg</h1>
                <h3 className='font-bold text-red-600'>$250.00 <span><del className='text-gray-600 font-semibold'>$400.00</del></span></h3>
              </div>
            </div>


          </div>
        </div>
        {/* Big-right Image  */}
        <div className="Big-1-Product lg:w-2/5 w-full p-3 flex items-center ">
          <div className="img-card rounded-xl  border overflow-hidden md:min-w-80 h-96 min-h-fit hover:drop-shadow-2xl transition-all duration-300">
            <img src="/images/pic.jpg" alt="" className='object-cover h-full' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default TopProducts
