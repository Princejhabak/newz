import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from '../store';
// import {wrapper} from '../store';
import SideNav from '../components/SideNav';
import '../styles/bootstrap.min.css';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {

    return(
        <Provider store={store}>
            <Header />
            <main className=''>
            <Container>
            <div className="row my-5">
            <SideNav />
                <div className="col-sm-12 col-md-12 col-lg-9 right-continer">
                    <Component {...pageProps} />
                </div>
            </div>
            </Container>
            </main>
            <Footer />
        </Provider>
    );
}

// export default wrapper.withRedux(MyApp);
export default MyApp;

