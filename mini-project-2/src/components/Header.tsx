import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './assets/css/featuredstyles.css';
import Link from 'next/link';
//Install font Awesome dependencies npm install @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons 
//Create a layout.js file in the app folder to import the Font Awesome core styles and config# prior to using the icons 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";



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
        <Nav className="me-auto d-flex align-items-center">
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
      {/*ICONS */}
        </Nav>
          <Nav className ="icon-container">
            <Nav.Link href="#">
              <FontAwesomeIcon 
                  style={{color: "white" }}
                  icon={faHeart} 
                  />
                  </Nav.Link>
            <Nav.Link href="#">
              <FontAwesomeIcon
                  style={{color: "white"}}
                  icon={faCartShopping}
                  />
                  </Nav.Link>
            <Nav.Link href="#">
              <FontAwesomeIcon
                  style={{color: "white"}}
                  icon={faUser}
                  />
                  </Nav.Link>.
               </Nav>     
      </Container>
    </Navbar>
  </>
);
}


