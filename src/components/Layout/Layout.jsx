import Navigator from 'components/Navigator';
import Footer from 'components/Footer';

function Layout({ children, isLoggedIn, userId }) {
  return (
    <>
      <Navigator isLoggedIn={isLoggedIn} userId={userId} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
