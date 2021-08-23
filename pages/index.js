import Head from 'next/head'
import Main from '../components/Main'


export const getStaticProps = async () => {
  const res = await fetch('https://top10-webhostings.com/cp/Api');
  const datas = await res.json();
  return {
    props : { datas }
  }
} 

export default function Home({datas}) {

  return (
    <div>
      <Head>
        <title>Top 10 Web Hosting Companies</title>
        <meta name="title" content="Top 10 Web Hosting Companies of 2021"/>
        <meta name="description" content="The Top 10 Web Hosting Companies of 2021, including in-depth reviews, ratings, detailed comparison of pricing, offering, features and more.  " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main datas={datas}/>
    </div>
  )
}
