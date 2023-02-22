import Head from 'next/head';
import HomeMain from '../components/HomeMain/HomeMain';
import Layout from '../Layout/Layout';

export default function Main() {
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
      <HomeMain></HomeMain>
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
