import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
