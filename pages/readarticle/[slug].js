import React from 'react';
import styled from 'styled-components';
import Title from '../../components/Title';
import Sidebar from '../../components/Sidebar';
import Partner from '../../components/Partner';
import Layout from '../../components/Layout'
import Footercontent from '../../components/Footercontent';
import Image from 'next/image'
// import { useParams } from 'react-router-dom';

export const getStaticPaths = async () =>{
    const res = await fetch('https://top10-webhostings.com/cp/articles/');
    const data = await res.json();

    const paths =  data.articles.map(item =>{
        return{
            params: {slug:item.slug.toString()}
        }
    })
    return{
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) =>{
    const slug = context.params.slug;
    const res = await fetch('https://top10-webhostings.com/cp/articles/' + slug)
    const datas = await res.json()
    return{
        props: {datas:datas}
    }
}

const Reviewreview  = ({datas}) =>{
    const imgUrl = '/img/articles/'
    const item = datas.articles[0];
    return(
        <Layout>
            <Container>
                <Title/>
                <MainSection>
                    <Mainbody>
                        <div>
                            <h1>{item.name}</h1>
                            <span>07 July, 2021</span>
                            {/* <Image src = {`${imgUrl}${item.imgUrl}`} alt = {item.name} width={210} height={210} /> */}
                            <div dangerouslySetInnerHTML={{__html: item.text}}/>
                        </div>
                    </Mainbody>
                    <Sidebar articles = {datas.articles}/>
                </MainSection>
                <Footercontent/>
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    // height: calc( 100vh - 60px);
    // padding : 0 calc(10vw + 5px);
`
const Mainbody = styled.div`
    display:flex;
    flex-direction:column;
    flex:0.78;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0 0 40px 0 rgba(0,0,0,0.12);
    padding:20px;
    ul{
        padding:20px;
    }
    h1{
        padding-top:30px;
    }
    span{
        display:block;
        padding:20px 0;
    }
    @media(max-width:992px){
        flex:1; 
    }
`
const MainSection = styled.div`
    display:flex;
    max-width:1200px;
    margin:auto;
    justify-content:space-between;
    padding: 0 20px;
    margin-top:-40px;
    border-bottom:1px solid rgba(2,23,34,0.08);
    padding-bottom:100px;
    @media(max-width:992px){
        margin-top:20px;
    }
`
export default Reviewreview
