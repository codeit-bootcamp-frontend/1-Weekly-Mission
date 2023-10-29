import Shared from './pages/Shared/Shared';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shared' element={<Shared />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
