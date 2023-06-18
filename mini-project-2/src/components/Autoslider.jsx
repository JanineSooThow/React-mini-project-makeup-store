import React, { useState, useEffect } from 'react';
const Autoslider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
      '',
      '/path/to/image2.jpg',
      '/path/to/image3.jpg',
      // Add more image paths as needed
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
      }, 3000);
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    return (
      <div>
        <img src={images[currentSlide]} alt="Slide" />
      </div>
    );
  };
  
  export default Autoslider;
  