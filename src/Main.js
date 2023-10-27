import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shared from './pages/Shared'

const Main = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/shared' element={<Shared />} />
    </Routes>
  </BrowserRouter>
  );
}

export default Main;
