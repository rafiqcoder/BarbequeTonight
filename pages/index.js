import Head from 'next/head';
import Home from '../components/home/home';
import Layout from '../Layout/Layout';


export default function Main() {
  return (


      <Layout>
      <Head>
        <title>Home</title>
      </Head>
        <Home></Home>
      </Layout>


  )
}
