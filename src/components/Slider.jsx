import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallproducts } from '../Redux_toolkit/Features/Product';

function Slider() {
  const { products } = useSelector((state) => state.prod);
  const dispatch = useDispatch();
  const ismobile = window.matchMedia("(max-width: 768px)").matches;
  const selected_product = ismobile ? 'slidermobile' : 'slider';
  const catSlider = products.filter((data) => data.cardType === selected_product);

  useEffect(() => {
    dispatch(getallproducts());
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const galleryImages = catSlider;

  const handleGoToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[60vh] overflow-hidden group">
      {/* Image container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {galleryImages.map((data,index) => (
          <div key={data._id} className="flex-shrink-0 w-full h-full relative">
            <img
              src={data.image || "/placeholder.svg"}
              alt={data.name}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 -right-1/2 right z-20 flex space-x-3">
        {galleryImages.map((_, index) => (
          <button
            key={_._id}
            onClick={() => handleGoToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;