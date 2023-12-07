import Nav from '@components/Nav';
import Footer from '@components/Footer';
import FooterRefContext from '@contexts/FooterRefContext';
import { ReactNode, useRef } from 'react';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const footerRef = useRef(null);

  return (
    <>
      <FooterRefContext.Provider value={footerRef}>
        <Nav />
        {children}
        <div ref={footerRef}>
          <Footer />
        </div>
      </FooterRefContext.Provider>
    </>
  );
};

export default Layout;
