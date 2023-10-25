import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header';
import Main from './js/main';
import Footer from './js/footer';
import './css/common.css'
import './css/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
    <Header />
    <Main />
    <Footer />
    </>
);