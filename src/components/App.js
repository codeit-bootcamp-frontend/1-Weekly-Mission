import './global.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  const [accout, setAccout] = useState({});

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
