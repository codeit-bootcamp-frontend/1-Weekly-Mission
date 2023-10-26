import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/reset.css';
import '../styles/variables.css';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
