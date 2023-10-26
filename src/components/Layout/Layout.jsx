import Navigator from 'components/Navigator';
import Footer from 'components/Footer';

function Layout({ children }) {
  return (
    <>
      <Navigator />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
