import React, { useState } from 'react';
import slide from '../assets/obi2.png'
import slide2 from '../assets/obi3.png'
import slide3 from '../assets/tool4.png'
import slide4 from '../assets/tool8.png'

const images = [
  {
    id: 1,
    src: slide,
    alt: 'Product image 1'
  },
  {
    id: 2,
    src: slide2,
    alt: 'Product image 2'
  },
  {
    id: 3,
    src: slide3,
    alt: 'Product image 3'
  },
  {
    id: 4,
    src: slide4,
    alt: 'Product image 4'
  }
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="relative mb-10">
      <img
        className="w-full h-[300px] object-cover"
        src={images[currentImage].src}
        alt={images[currentImage].alt}
      />
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          className="text-[#ffc000] hover:text-gray-300 focus:outline-none"
          onClick={handlePrev}
        >
          <svg className="h-12 w-12 fill-current" viewBox="0 0 24 24">
            <path d="M15.414 7.414a2 2 0 000 2.828L12.828 12l2.586 2.586a2 2 0 10-2.828-2.828L8.172 12l4.414-4.414a2 2 0 002.828 0z" />
          </svg>
        </button>
        <button
          className="text-[#ffc000] hover:text-gray-300 focus:outline-none"
          onClick={handleNext}
        >
          <svg className="h-12 w-12 fill-current" viewBox="0 0 24 24">
            <path d="M8.586 16.586a2 2 0 000-2.828L11.172 12l-2.586-2.586a2 2 0 10-2.828 2.828L7.172 12l-4.414 4.414a2 2 0 002.828 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
