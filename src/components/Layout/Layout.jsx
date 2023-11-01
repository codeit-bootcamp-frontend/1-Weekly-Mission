import Navigator from 'components/Navigator';
import Footer from 'components/Footer';
import { DEFAULT_USER_ID } from 'apis/config/default';

function Layout({ children, isLoggedIn, userId = DEFAULT_USER_ID }) {
  return (
    <>
      <Navigator isLoggedIn={isLoggedIn} userId={userId} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
