import Nav from '@components/Nav';
import Footer from '@components/Footer';
import FooterRefContext from '@contexts/FooterRefContext';
import { ReactNode, useRef } from 'react';
import { SampleUserProfile } from '@pages/shared';
import { UserProfile } from '@pages/folder';

interface Props {
  profile?: SampleUserProfile | UserProfile;
  children?: ReactNode;
}

const Layout = ({ profile, children }: Props) => {
  const footerRef = useRef(null);

  return (
    <>
      <FooterRefContext.Provider value={footerRef}>
        <Nav profile={profile} />
        {children}
        <div ref={footerRef}>
          <Footer />
        </div>
      </FooterRefContext.Provider>
    </>
  );
};

export default Layout;
