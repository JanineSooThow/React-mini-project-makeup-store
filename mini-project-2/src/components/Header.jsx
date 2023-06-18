import React from "react";
import Link from "next/link";
import styled from "styled-components";

// header
const StyledHeader = styled.header`
    background-color: black;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
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
            <Link href="/" passHref>
                <Logo>Makeup Mirage</Logo>
            </Link>
            <nav>
                <Link href="/products" passHref>
                    <StyledLink>All products</StyledLink>
                </Link>
                <Link href="/brands" passHref>
                    <StyledLink>Brands</StyledLink>
                </Link>
                <Link href="/categories" passHref>
                    <StyledLink>Makeup Category</StyledLink>
                </Link>
                <Link href="/sale" passHref>
                    <StyledLink>Sale</StyledLink>
                </Link>
                <Link href="/account" passHref>
                    <StyledLink>Account</StyledLink>
                </Link>
                <Link href="/wishlist" passHref>
                    <StyledLink>Wishlist</StyledLink>
                </Link>
                <Link href="/cart" passHref>
                    <StyledLink>Cart (0)</StyledLink>
                </Link>
            </nav>
        </StyledHeader>
    );
}

