import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
// import logo from '../../img/logo.svg';
import Link from 'next/link';
const Navbar = ({Nav,BurgerHandlar}) =>{
    return(
        <NavLinks onClick ={BurgerHandlar} Nav={Nav}>
            <Link href='/' passHref={true} ><Logo><Image src = '/img/logo.svg' alt = 'logo' height={64} width ={195}/></Logo></Link>
            <Link href="/" passHref={true}><li>Top 10 Web Hostings Services</li></Link>
            <Link href="/reviews" passHref={true}><li>Reviews</li></Link>
            <Link href="/article" passHref={true}><li>Articles</li></Link>
            <Link href="/contact" passHref={true}><li>Contact Us</li></Link>
            <Link href="/about"passHref={true}><li>About Us</li></Link>
        </NavLinks>
    )
}
const Logo = styled.div `
    margin:50px;
    display:none;
    text-align: center;
    @media(max-width:992px){
        display:block;
    }
    
`
const NavLinks = styled.ul`
    list-style:none;
    display:flex;

    li{
        margin-right:20px;
        color:black;
        cursor:pointer;
    }
    a{
        text-decoration:none;
        display:block;
    }
    @media(max-width:992px){
        display : ${({Nav}) => Nav ? 'block' : 'none'};
        flex-flow:column nowrap;
        height:100%;
        position:fixed;
        top:0;
        right:0;
        background-color: #140E1C;
        width: 70%;
        z-index:9;
        li{
            color: #FFFFFF;
            font-size: 15px;
            font-weight: 900;
            padding:25px;
            font-size: 15px;
            font-weight: 900;
            letter-spacing: 0;
            line-height: 19px;
            // background-color: #2E2241;
            margin-bottom:5px;
            margin-right:0;

        }
    }
`

export default Navbar