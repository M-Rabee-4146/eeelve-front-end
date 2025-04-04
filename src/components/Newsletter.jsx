import React from 'react'
import { Send } from 'lucide-react'


const Newsletter = () => {
  return (
    <div>
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
    </div>
  )
}

export default Newsletter
