//Autoslider exports to homepage -page.tsx under app folder 
//importing two functionalities from the React library to enhance the capabilities of your functional components
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {StyledContainer, StyledImgContainer, StyledImgEl} from './assets/css/styled'

//Parent component- Autoslider (defined as a functional component using arrow function syntax. Remember components defined using functions or classes)
//'images' and '[currentSlide, setCurrentSlide]' are variables within 'Autoslider' component
//'[currentSlide, setCurrentSlide]' - state variable 'currentSlide' and function 'setCurrentSlide'
//'images' variable is an array that holds the paths to different image files. Used within 'Autoslider' to provide image sources for rendering
const Autoslider = () => {
    const [currentSlide, setCurrentSlide] = useState(0); //state box is called currentSlide and we start with the number 0 inside it. The 'useState' function gives us the current value of 'currentSlide' and a special function called 'setCurrentSlide' (power to change the number)
    const images = [
      './images/image1.jpg',
      './images/image2.jpg',
      './images/image3.jpg',
      './images/image4.jpg',
      './images/image5.jpg',
    ];
 
    //'useEffect' hook sets up a timer using 'setInterval' to auto update the 'currentSlide' state 
    //The 'setCurrentSlide' function is used to update the state by incrementing 'prevSlide' by 1, cycling bakc to 0 when it reaches the end of the 'images' array 
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
      }, 4000);
  
      return () => clearInterval(interval);
    }, [images.length]);
    
    const handleSlideSelect = (selectedIndex) => {
      setCurrentSlide(selectedIndex);
    };

    return (
      <StyledContainer >
        <Carousel activeIndex={currentSlide} onSelect={handleSlideSelect} interval= {null}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <StyledImgContainer>
                <StyledImgEl src={image} alt={`Slide ${index + 1}`} />
              </StyledImgContainer>
            </Carousel.Item>
           ))}
        </Carousel>
      </StyledContainer>
    );
  };
  
  export default Autoslider;


  