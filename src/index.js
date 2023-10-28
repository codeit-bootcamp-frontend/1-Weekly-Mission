import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/header';
import Folders from './pages/folders/folders';
import Footer from './components/common/footer';
import './components/common/common.css'
import './components/common/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
    <Header />
    <Folders />
    <Footer />
    </>
);