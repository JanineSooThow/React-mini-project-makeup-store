import React from "react";
import styled from "styled-components";

// header
const StyledHeader = styled.header`
    background-color: black;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed
   
`;

// Makeup Mirage Logo in header
const Logo = styled.h1`
    color: #ffc2d1;
    font-size: 30px;
    margin-right: 90px
`;

// other links in header
const StyledLink = styled.a`
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    color: #ffc2d1;
    text-decoration: none;
    margin-right: 70px;
`;


export default function Header() {
    return (
        <StyledHeader>
                <Logo>Makeup Mirage</Logo>
            <nav>
                    <StyledLink>All products</StyledLink>
                    <StyledLink>Brands</StyledLink>
                    <StyledLink>Makeup Category</StyledLink>
                    <StyledLink>Sale</StyledLink>
                    <StyledLink>Account</StyledLink>
                    <StyledLink>Wishlist</StyledLink>
                    <StyledLink>Cart (0)</StyledLink>
            </nav>
        </StyledHeader>
    );
}

