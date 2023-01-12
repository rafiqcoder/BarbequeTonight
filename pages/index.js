import Head from 'next/head';
import { useContext,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from '../components/home/home';
import Layout from '../Layout/Layout';
import { AuthContext,DataContext } from '../src/Context/Context';
import { fetchCartDbThunk } from '../src/store/actions/getData';
import { setCartData } from '../src/store/cartSlice';

export default function Main({ products }) {
  const { bbqProducts,setBbqProducts } = useContext(DataContext);
  const { user,isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <div>loading...</div>
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCartDbThunk(user.email));
  },[user.email])
  setBbqProducts(products);
  const cartDispatch = useDispatch()

  useEffect(() => {
    cartDispatch(setCartData(products));
   
  },[])

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
