import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '@styles/GlobalStyle';
import NotFound from '@pages/NotFound';
import Home from '@pages/Home';
import Signup from '@pages/Auth/Signup';
import Signin from '@pages/Auth/Signin';
import Shared from '@pages/Shared';
import Folder from '@pages/Folder';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='signin' element={<Signin />} />
        <Route path='shared' element={<Shared />} />
        <Route path='folder'>
          <Route index element={<Folder />} />
          <Route path=':folderId' element={<Folder />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
