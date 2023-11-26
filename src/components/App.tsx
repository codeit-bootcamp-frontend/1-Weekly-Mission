import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import FooterRefContext from 'contexts/FooterRefContext';

function App() {
  const footerRef = useRef(null);

  return (
    <FooterRefContext.Provider value={footerRef}>
      <Nav />
      <Outlet />
      <div ref={footerRef}>
        <Footer />
      </div>
    </FooterRefContext.Provider>
  );
}

export default App;
