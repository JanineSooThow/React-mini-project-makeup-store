import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './assets/css/featuredstyles.css';
import Link from 'next/link';


export default function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
    
  return (
      <>
  <Navbar className="custom-navbar" variant="dark">
    <Container>
      <Navbar.Brand className ="logo"> </Navbar.Brand>
        <Nav className="me-auto">
          {isClient && (
          <>
          <Nav.Link> <Link href="/products"className="custom-navlink">ALL</Link></Nav.Link>
          <Nav.Link> <Link href="/skin"className="custom-navlink">SKIN</Link></Nav.Link>
          <Nav.Link> <Link href="/lips"className="custom-navlink">LIPS</Link></Nav.Link>
          <Nav.Link> <Link href="/"> <img src ="./images/Nestedlogo2.png" alt="Store Logo" style={{width:'auto', height: 'auto'}}/></Link></Nav.Link>
          <Nav.Link> <Link href="/eyes"className="custom-navlink">EYES</Link></Nav.Link>
          <Nav.Link> <Link href="/nails"className="custom-navlink">NAILS</Link></Nav.Link>
          <Nav.Link> <Link href="/blog"className="custom-navlink">BLOG</Link></Nav.Link> 
          </>
          )}         
        </Nav>
      </Container>
    </Navbar>
  </>
);
}
// import styled from "styled-components";

// // header
// const StyledHeader = styled.header`
//     background-color: black;
//     width: 100%;
//     padding: 20px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: fixed
   
//     @media (max-width: 768px) {
//         flex-direction: column;
//         padding: 10px;
//       }
// `;

// // Makeup Mirage Logo in header
// const Logo = styled.h1`
//     color: #ffc2d1;
//     font-size: 30px;
//     margin-right: 90px

//     @media (max-width: 768px) {
//         margin-right: 0;
//         margin-bottom: 10px;
//       }
// `;

// // other links in header
// const StyledLink = styled.a`
//     font-family: "Montserrat", sans-serif;
//     font-size: 16px;
//     color: #ffc2d1;
//     text-decoration: none;
//     margin-right: 70px;

//     @media (max-width: 768px) {
//         margin-right: 0;
//         margin-bottom: 10px;
//       }
// `;



