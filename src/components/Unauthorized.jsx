import React from 'react'

const Unauthorized = () => {
  return (
    <div>
       <div className="flex flex-col justify-center w-full h-full md:max-w-[450px] md:max-h-[450px] md:rounded-[40px]    p-[25px_35px] border-[1px] border-white shadow-[rgba(133,189,215,0.88)_0px_30px_30px_-20px] bg-[#f0f0f0]   ">
                <div className="text-center font-black text-[30px] text-amber-400">
                    <h1>Unauthorized</h1>
                    <h2 className='text-gray-600'>Only Admin is Allowed on this Page</h2>
                    </div>



            </div>
    </div>
  )
}

export default Unauthorized
