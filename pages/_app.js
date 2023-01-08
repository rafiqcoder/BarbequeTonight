
import store from '@/src/store.js/store';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import Context from '../src/utils/Context/Context';
import '../styles/globals.css';


function MyApp({ Component,pageProps }) {


  return (

    <Provider store={store}>

      <Context>
        <Toaster position="top-center" />
        <Component {...pageProps} />
      </Context>
    </Provider>





  )
}

export default MyApp
