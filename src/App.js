import { Outlet } from 'react-router';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
