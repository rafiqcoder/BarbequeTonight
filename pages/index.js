import isAdmin from '@/src/hooks/isAdmin';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import HomeMain from '../components/HomeMain/HomeMain';
import Layout from '../Layout/Layout';

export default function Main() {
  
  return (

    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <HomeMain></HomeMain>
    </Layout>

  )
}
// export async function getServerSideProps() {
//   const res = await fetch(`https://server-9cmeqz35g-rafiqcoder.vercel.app/AllBBQProducts`);
//   const data = await res.json();

//   return {
//     props: {
//       products: data,
//     },
//   };
// }
