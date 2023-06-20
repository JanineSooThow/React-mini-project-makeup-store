//HOMEPAGE for Makeup Mirage website 
'use client'
import React from 'react';
import Link from 'next/link';
import Header from '../src/components/Header';
import Autoslider from '../src/components/Autoslider';
import { StyledContainer, StyledImgContainer } from '@/src/components/assets/css/styled';

const HomePage: React.FC = () => {
  return (
    <>
    <div>
      <Header/>
      <StyledImgContainer>
        <Autoslider/>
      </StyledImgContainer>
    
      
   </div>
    </>
  );
};

export default HomePage;






