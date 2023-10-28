import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import GlobalStyle from './styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Folder from './pages/Folder';


function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/folder' element={<Folder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
