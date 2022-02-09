import React from 'react';

import './Layout.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const layout = (props) => (
    <React.Fragment>
        <Header />
        <main>
            {props.children}
        </main>
        <Footer />
    </React.Fragment>
);

export default layout;