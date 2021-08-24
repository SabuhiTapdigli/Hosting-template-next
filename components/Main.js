import React from 'react';
import Layout from './Layout';
import Title from './Title'
import Partner from './Partner';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Footercontent from './Footercontent'
const Main = ({datas}) =>{
    const title = 'Top 10 Web Hosting Services of 2021';
    const parag = '<div>Fast and secure web hosting services at the lowest price </div><div>Easy setup and good uptime</div>'
    const firsturl = datas.items[0];
    return(
        <Layout>
            <Title title = {title} parag = {parag} firsturl={firsturl && firsturl.url}/>
            <MainSection>
                <Mainbody>
                    {datas.items.map((item)=>{
                        return(<Partner key = {item.id} item = {item} className='partner'/>)
                    }) }
                </Mainbody>
                <Sidebar articles = {datas.articles} firsturl={firsturl} />
            </MainSection>
            <Footercontent/>
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