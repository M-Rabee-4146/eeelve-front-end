import React, { useState } from 'react';

const Testcardgemini = ({ imageUrl, title, price, discount, originalPrice }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-64 m-4" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md" />
        {discount && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-md text-sm">
            {discount}%
          </div>
        )}
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">Rs.{price.toLocaleString()}</p>
        {originalPrice && (
          <p className="text-gray-400 line-through">Rs.{originalPrice.toLocaleString()}</p>
        )}
      </div>

      {isHovered && (
        <div className="absolute bottom-0 left-0 w-full bg-white p-4 rounded-md shadow-md">
          <div className="flex justify-between">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">View</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Wishlist</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testcardgemini;