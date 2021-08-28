import React from 'react';
import styled from 'styled-components';
import Title from '../../components/Title';
import Sidebar from '../../components/Sidebar';
import Partner from '../../components/Partner';
import Layout from '../../components/Layout'
import Footercontent from '../../components/Footercontent';
// import { useParams } from 'react-router-dom';

export const getStaticPaths = async () =>{
    const res = await fetch('https://top10-webhostings.com/cp/review/');
    const data = await res.json();

    const paths =  data.item.map(item =>{
        return{
            params: {id:item.id.toString()}
        }
    })
    return{
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('https://top10-webhostings.com/cp/review/' + id)
    const datas = await res.json()
    return{
        props: {datas:datas}
    }
}

const Reviewreview  = ({datas}) =>{
    const isReview = true;
    const revtitle = 'Top 10 Web Hosting Reviews of 2021';
    const revparag = 'Keep your website up and running with a hosting company that promise high uptime, quick load times,and simple setup'
    return(
        <Layout>
            <Container>
                <Title title = {revtitle} parag = {revparag}/>
                <MainSection>
                    <Mainbody>
                        <div>
                            <Partner key = {datas.item[0].id} item = {datas.item[0]} className='partner'/>
                            <div dangerouslySetInnerHTML={{__html: datas.item[0].review}}/>
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
