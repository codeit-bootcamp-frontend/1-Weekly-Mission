import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import GlobalStyle from './styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Folder from './pages/Folder';
import Shared from './pages/Shared';
import SelectMenu from './components/SelectMenu/SelectMenu';


function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/folder' element={<Folder />} />
        <Route path='/shared' element={<Shared />} />
        <Route path='/select' element={<SelectMenu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
