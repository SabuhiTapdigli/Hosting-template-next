import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'


const Title = ({title,parag,Contact,firsturl}) => {
    const today = new Date(),
    date = today.getDate() + ' ' + today.toLocaleString('en-us', { month: 'short' }) + ', ' + today.getFullYear();
    
    return (
            <BgWrapper>
                <Container>
                    <Headerwrapper>
                        <Currentime><div><span><Image src = '/img/tick.svg' alt = 'tick' height={16} width ={16}/></span> Last Updated {date}</div></Currentime>
                        <TitleHeader>{title}</TitleHeader>
                        <TtileContent>
                            <div>Fast and secure web hosting services at the lowest price </div>
                            <div>Easy setup and good uptime</div>
                        </TtileContent>
                        {!Contact && <CheckButton><a href={`${firsturl}`} target='_blank' rel="noreferrer">Check</a></CheckButton>}
                    </Headerwrapper>
                </Container>
            </BgWrapper>
        
    )
}
const BgWrapper = styled.div`
    background-image: url(/img/bg-home.png);
    height:450px;
    background-size:cover;
    @media(max-width:992px){
        height: 180px;
    }
    
`


const Container = styled.div`
    max-width:1200px;
    margin:auto;
    padding: 0 20px;

    `
const Currentime = styled.div`
    color: #FFFFFF;
    font-family: 'Avenir';
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;  
    div{
        text-align:center;
        width: 226px;
        border-radius: 5px;
        background-color: rgba(255,255,255,0.1);
        padding:5px 0;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    span{
        display:flex;
        margin-right:7px;
        height:16px;
        width:16px;ç
    }
    padding:20px 0;
   
`
const TitleHeader = styled.h1`
    color: #FFFFFF;
    font-family: 'Avenir';
    font-size: 33px;
    font-weight: 900;
    letter-spacing: 0;
    padding:30px 0;
    @media(max-width:992px){
        font-size: 18px;
    }
`
const TtileContent = styled.div`
    color: #FFFFFF;
    font-family: Avenir;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;
    padding: 20px 0;
    @media(max-width:992px){
        display:none
    }
`
const CheckButton = styled.button`
    height: 46px;
    width: 207px;
    border-radius: 3px;
    background: linear-gradient(267.34deg, #48E2E2 0%, #0A6BFF 99.92%);
    box-shadow: 0 5px 50px 0 rgba(106,169,216,0.7);
    color: #FFFFFF;
    outline:none;
    border:none;
    cursor:pointer;
    a{
        text-decoration:none;
        color:white;
    }
    @media(max-width:992px){
        display:none
    }

`
const Headerwrapper = styled.div`
    padding:20px 0;
    width:60%;
    @media(max-width:992px){
        width:100%
    }

`
export default Title
