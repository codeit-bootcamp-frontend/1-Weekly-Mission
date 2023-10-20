import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';
import './common.css'
import './reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
    <Header />
    <Main />
    <Footer />
    </>
);