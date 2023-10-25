import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shared from './pages/Shared';
import App from './App';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='shared' element={<Shared />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
