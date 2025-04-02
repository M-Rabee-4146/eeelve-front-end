import { useState } from "react";
import { Heart, Eye } from "lucide-react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-52 p-3 bg-white shadow-md rounded-lg overflow-hidden transition duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src='./images/pic.jpg' alt='ddf' className="w-full h-36 object-cover rounded-md" />
          <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
            34
          </span>
      </div>
      <h3 className="text-xs font-semibold mt-2 line-clamp-2">Hello</h3>
      <p className="text-red-600 font-bold text-sm">Rs.34</p>
        <p className="text-gray-400 line-through text-xs">Rs.445</p>
      {isHovered && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-4 bg-white p-1 rounded-md shadow-md transition-opacity opacity-100">
          <button className="flex items-center gap-1 text-gray-700 hover:text-black text-xs">
            <Eye size={14} /> View
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:text-black text-xs">
            <Heart size={14} /> Wishlist
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
