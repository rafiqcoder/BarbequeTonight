import { AuthContext, DataContext } from '../src/Context/Context';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import Home from '../components/home/home';
import Layout from '../Layout/Layout';
import { fetchCartDbThunk } from '../src/store/actions/getData';
import { useDispatch } from 'react-redux';


export default function Main({ products }) {
  const { bbqProducts,setBbqProducts } = useContext(DataContext);
  const { user,isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <div>loading...</div>
  }
  useEffect(() => {
    dispatch(fetchCartDbThunk(user.email));
  },[user.email])
  setBbqProducts(products);
  const dispatch = useDispatch()

  return (


    <Layout>
      <Head>
        <title>Home</title>
        
      </Head>
      <Home></Home>
    </Layout>


  )
}
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/AllBBQProducts`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
