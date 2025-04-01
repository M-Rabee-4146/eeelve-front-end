import React, { useState, useEffect } from 'react';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const galleryImages = [
    { id: 1, src:"/images/pic.jpg", alt: "Gallery image 1" },
    { id: 2, src: "/placeholder.svg?height=800&width=1600", alt: "Gallery image 2" },
    { id: 3, src: "/placeholder.svg?height=800&width=1600", alt: "Gallery image 3" },
    { id: 4, src: "/placeholder.svg?height=800&width=1600", alt: "Gallery image 4" }
  ];
  
  // Function to go to a specific slide
  const handleGoToSlide = (index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  // Function to go to the next slide
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    handleGoToSlide(nextIndex);
  };

  // Function to go to the previous slide
  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    handleGoToSlide(prevIndex);
  };

  // Auto-advance slides
  useEffect(() => {
    // Only auto-advance if not hovering
    if (isHovering) return;
    
    const slideInterval = setInterval(() => {
      handleNext();
    }, 2000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, [currentIndex, isHovering]);

  return (
    <div 
      className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image container */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {galleryImages.map((image) => (
          <div key={image.id} className="flex-shrink-0 w-full h-full relative">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
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
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {galleryImages.map((_, index) => (
          <button
            key={index}
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