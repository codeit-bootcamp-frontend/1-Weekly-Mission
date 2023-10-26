import Navigator from 'components/Navigator';
import Footer from 'components/Footer';

function Layout({ children, isLoggedIn }) {
  return (
    <>
      <Navigator isLoggedIn={isLoggedIn} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
