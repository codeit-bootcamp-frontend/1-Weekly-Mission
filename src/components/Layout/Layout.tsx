import { ReactNode } from 'react';
import Navigator from '@/components/Navigator';
import Footer from '@/components/Footer';
import { DEFAULT_USER_ID } from '@/services/config/default';

interface Props {
  children: ReactNode;
  isLoggedIn?: boolean;
  userId?: number;
  navRef?: React.RefObject<HTMLDivElement>;
  footerRef?: React.RefObject<HTMLDivElement>;
}

function Layout({
  children,
  isLoggedIn = false,
  userId = DEFAULT_USER_ID,
  navRef,
  footerRef,
}: Props) {
  return (
    <>
      <Navigator isLoggedIn={isLoggedIn} userId={userId} navRef={navRef} />
      {children}
      <Footer footerRef={footerRef} />
    </>
  );
}

export default Layout;
