import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title';
import Sidebar from '../components/Sidebar';
import Footercontent from '../components/Footercontent';
import Image from 'next/image';
import Layout from '../components/Layout'
import Link from 'next/link'
export const getStaticProps = async () => {
    const res = await fetch('https://top10-webhostings.com/cp/Api');
    const datas = await res.json();
    return {
      props : { datas }
    }
  } 
const Article = ({datas}) =>{
    const imgUrl = '/img/articles/'
    const artitle = 'Must Reads';
    const arparag = 'Keep your website up and running with a hosting company that promise high uptime, quick load times,and simple setup'
    return (
        <Layout>
            <Container>
                <Title title = {artitle} parag = {arparag}/>
                <MainSection>
                    <Mainbody>
                        {datas.articles.map((item)=>{
                            return(
                                <Articles key = {item.id}>
                                    <ArticleImg>
                                        <Image src = {`${imgUrl}${item.imgUrl}`} alt = {item.name} width={210} height={210} />
                                    </ArticleImg>
                                    <Ariclecontent>
                                        <h2>{item.name} </h2>
                                        <span>07 July, 2021</span>
                                        <p>{item.shortText.substring(0,50)}</p>
                                        {/* <div> <Link href="/`article/${item.name}">Read More {item.name}</Link></div> */}
                                    </Ariclecontent>
                                </Articles>
                            )
                        })}
                        
                    </Mainbody>
                    <Sidebar articles = {datas.articles}/>
                </MainSection>
                <Footercontent/>
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    
`

const Mainbody = styled.div`
    display:grid;
    grid-template-columns : repeat(2,minmax(0,1fr));
    grid-gap:25px;
    flex:0.78;
    height:50%;
    @media(max-width:992px){
        flex:1; 
    }
    @media(max-width:992px){
        grid-template-columns : repeat(1,minmax(0,1fr));
    }
    
`
const MainSection = styled.div`
    display:flex;
    max-width:1200px;
    margin:auto;
    justify-content:space-between;
    padding: 0 20px;
    margin-top: 30px;
    border-bottom:1px solid rgba(2,23,34,0.08);
    padding-bottom:100px;
`
const Articles = styled.div`
    display:grid;
    grid-template-columns : repeat(2,minmax(0,1fr));
    grid-gap:50px;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0 0 40px 0 rgba(0,0,0,0.12);
    align-items:center;
    height:250px;
    padding:15px;
    @media(max-width:992px){
        display:flex;
    }
    
    

`
const ArticleImg = styled.div`
    height: 210px;
    width: 210px;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`
const Ariclecontent = styled.div`
    letter-spacing: 0;  
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    line-height: 21px;
    height: 210px;
    h2{
        font-size: 17px;
        font-weight: 900;
        
    }
    span{
        color: #A6A6A6;
        font-size: 14px;
        font-weight: 500;
        
    }
    p{
        color: #000000;
        font-family: Avenir;
        font-size: 15px;
        font-weight: 300;

    }
    div{
        color: #636363;
        font-size: 14px;
        font-weight: 500;
    }
`

export default Article
