import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Layout from '../components/Layout'
const About  = () =>{
    const abtitle = 'About Us';
    const abparag = 'Keep your website up and running with a hosting company that promise high uptime, quick load times,and simple setup'
    return(
        <Layout>
            <Container>
                <Title title = {abtitle} parag = {abparag}/>
                <MainSection>
                    <Mainbody>
                        <h2>About</h2>
                        <p>Looking for a free web hosting solution is an imperative decision. Try to identify a reliable web host can be a daunting task especially with so many service providers and options available nowadays. Throw in the feature sheets and promises, the task can be that much more intimidating.
    But it doesn't have to be. Let's take a look at some of the most common features a good free web hosting provider should offer:</p>
    <h2>DISK SPACE AND BANDWIDTH</h2>
    <p>Disk space refers to the amount of storage space assigned to you by the free web hosting provider. This space will be used to store your web site files, including text, images, audio, etc. files you use for your website.
    Bandwidth refers to the amount of traffic that is allowed to access and leave your website. Access means every time a visitor types in your website name in their browser. Leave means every time a visitor receives something from your website, whether it be viewing a photo, listening to an audio clip or downloading a file.
    For example, if your website has a lot of graphics (ie. photographs) then you will require higher storage and greater bandwidth.</p>
                    </Mainbody>
                </MainSection>
            </Container>
        </Layout>
    )
}
const Container = styled.div`
    
`
const Mainbody = styled.div`
   
    flex-direction:column;
    flex:0.78;
    
`
const MainSection = styled.div`
    
    max-width:1200px;
    margin:auto;
    justify-content:space-between;
    padding: 0 20px;
    margin-top:30px;
    border-bottom:1px solid rgba(2,23,34,0.08);
    padding-bottom:100px;
`
export default About

