import React from 'react';
import Nav from './components/nav/Nav';
import SharedPage from './pages/share/SharedPage';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div>
      <Nav />
      <SharedPage />
      <Footer />
    </div>
  );
}
