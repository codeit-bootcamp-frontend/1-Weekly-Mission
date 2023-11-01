import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './nav/Nav';
import Footer from './footer/Footer';

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
