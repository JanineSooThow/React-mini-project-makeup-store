import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './assets/css/featuredstyles.css';

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


export default function Header() {
    
    return (
        <>
      <Navbar className="custom-navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Makeup Mirage</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="custom-navlink"href="#Allproducts">All products</Nav.Link>
            <Nav.Link className="custom-navlink"href="#brands">Brands</Nav.Link>
            <Nav.Link className="custom-navlink"href="#categories">Makeup Category</Nav.Link>
            <Nav.Link className="custom-navlink"href="#blog">Blog</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

//         <StyledHeader>
//                 <Logo>Makeup Mirage</Logo>
//             <nav>
//                     <StyledLink>All products</StyledLink>
//                     <StyledLink>Brands</StyledLink>
//                     <StyledLink>Makeup Category</StyledLink>
//                     <StyledLink>Sale</StyledLink>
//                     <StyledLink>Account</StyledLink>
//                     <StyledLink>Wishlist</StyledLink>
//                     <StyledLink>Cart (0)</StyledLink>
//             </nav>
//         </StyledHeader>
//     );
// }

