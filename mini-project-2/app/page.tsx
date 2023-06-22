//HOMEPAGE for Makeup Mirage website 
'use client'
import React from 'react';
import Link from 'next/link';
import Header from '../src/components/Header';
import Autoslider from '../src/components/Autoslider';
import {StyledContainer, StyledImgContainer } from '@/src/components/assets/css/styled';
import Featured from '../src/components/Features/Featured'

const HomePage: React.FC = () => {
  return (
    <>
    <div>
      <Header/>
      <StyledImgContainer>
        <Autoslider/>
      </StyledImgContainer>
      <br></br>
      <hr style={{ borderTop: '1px solid black', margin: '10px 0' }} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h3> FEATURED </h3>
      </div>
      <Featured></Featured>
      
       
      
      
   </div>
    </>
  );
};

export default HomePage;






