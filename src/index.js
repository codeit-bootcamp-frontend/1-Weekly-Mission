import ReactDOM from 'react-dom/client';
import Card from './components/Card/Card';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Nav />
    <Card />
    <Footer />
  </>
);