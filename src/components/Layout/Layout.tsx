import { ReactNode } from 'react';
import Navigator from '@components/Navigator';
import Footer from '@components/Footer';
import { DEFAULT_USER_ID } from '@apis/config/default';

interface Props {
  children: ReactNode;
  isLoggedIn?: boolean;
  userId?: number;
}

function Layout({
  children,
  isLoggedIn = false,
  userId = DEFAULT_USER_ID,
}: Props) {
  return (
    <>
      <Navigator isLoggedIn={isLoggedIn} userId={userId} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
