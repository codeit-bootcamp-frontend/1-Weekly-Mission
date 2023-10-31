import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import GlobalStyle from './styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Folder from './pages/Folder';
import Shared from './pages/Shared';


function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/folder' element={<Folder />} />
        <Route path='/shared' element={<Shared />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
