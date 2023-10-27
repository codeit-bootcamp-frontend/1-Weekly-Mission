import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shared from './pages/Shared'
import Folder from './pages/Folder'
import Greeting from './pages/Greeting'

const Main = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Greeting/>} />
      <Route path='/shared' element={<Shared />} />
      <Route path='/folder' element={<Folder />} />
    </Routes>
  </BrowserRouter>
  );
}

export default Main;
