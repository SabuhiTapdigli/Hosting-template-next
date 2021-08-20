import React,{useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Navbar from '../components/burger-menu/Navbar'
import Image from 'next/image'
import Burger from './burger-menu/Burger';

const Header = () =>{
    const [Nav, setNav] = useState(false)
    
    return(
            <Container>
                <Link href='/' passHref={true}><Logo><Image src ='/img/webhostinglogo.svg' alt = 'logo' height={64} width ={195}/></Logo></Link>
                <Navbar Nav = {Nav}/>
                <Burger setNav = {setNav} Nav={Nav}/>
            </Container>
        
    )
}


const Container =styled.div`
    max-width:1200px;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 20px;
`
const Logo = styled.div `
    height:64px;
    width:195px;
    cursor:pointer;
`

export default Header