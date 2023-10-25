import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shared from './pages/Shared';
import App from './App';
import Folder from './pages/Folder';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/shared' element={<Shared />} />
          <Route path='/folder' element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
