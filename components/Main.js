import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title'
import Partner from './Partner';
import styled from 'styled-components';
const Main = ({datas}) =>{
    const title = 'Top 10 Web Hosting Services of 2021';
    const parag = 'Keep your website up and running with a hosting company that promise high uptime, quick load times,and simple setup'
    return(
        <Layout>
            <Title title = {title} parag = {parag}/>
            <MainSection>
                <Mainbody>
                    {datas.items.map((item)=>{
                        return(<Partner key = {item.id} item = {item} className='partner'/>)
                    }) }
                </Mainbody>
                {/* <Sidebar articles = {datas.articles} firsturl={firsturl} /> */}
            </MainSection>
        </Layout>
        
    )
}
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
        margin-top:0;
    }

`
export default Main