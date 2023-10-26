import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Card from './pages/Card';
import Folder from './pages/Folder';
import NotFoundPage from './pages/NotFoundPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Card />} />
          <Route path="folder" element={<Folder />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
