import Head from 'next/head';
import { useContext } from 'react';
import Home from '../components/home/home';
import Layout from '../Layout/Layout';

export default function Main({ products }) {
  // const { bbqProducts,setBbqProducts } = useContext(DataContext);
  // const { user,isLoading } = useContext(AuthContext);
  // if (isLoading) {
  //   return <div>loading...</div>
  // }

  // setBbqProducts(products);
  return (

    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Home></Home>
    </Layout>

  )
}
// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:5000/AllBBQProducts`);
//   const data = await res.json();

//   return {
//     props: {
//       products: data,
//     },
//   };
// }
