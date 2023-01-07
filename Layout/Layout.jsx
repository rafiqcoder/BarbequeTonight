
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import styles from '@/styles/Layout.module.css'


const Layout = ({children}) => {
    return (
        <>
        <Header></Header>
            {children}
        <Footer></Footer>
        </>
    
    );
};

export default Layout;