import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './nav/Nav';
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
