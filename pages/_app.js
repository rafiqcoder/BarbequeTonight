
import { Toaster } from 'react-hot-toast';
import Context from '../src/utils/Context/Context';
import '../styles/globals.css';



function MyApp({ Component,pageProps }) {


  return (


    <Context>
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </Context>





  )
}

export default MyApp
