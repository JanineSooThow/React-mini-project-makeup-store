//Autoslider exports to homepage -page.tsx under app folder 
import React, { useState, useEffect } from 'react';
import { StyledContainer, StyledImgContainer, StyledImgEl, autoslider } from './assets/css/styled'


const Autoslider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
      './images/image1.jpg',
      './images/image2.jpg',
      './images/image3.jpg',
      './images/image4.jpg'
    ];
 
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
      }, 3000);
  
      return () => clearInterval(interval);
    }, [images.length]);
    
  //  const autoslider = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '50%',
  //   width: '80%',
  //   margin: '0 auto'
  //     }; 

    return (
      <StyledContainer >
        <StyledImgContainer>
          <StyledImgEl src={images[currentSlide]} alt="Slide" />
        </StyledImgContainer>
      </StyledContainer>
    );
  };
  
  export default Autoslider;
  