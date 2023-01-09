
import Context from '../src/Context/Context';
import store from '../src/store/store.js';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
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
