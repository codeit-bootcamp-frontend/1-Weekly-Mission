import './styles/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import SharedPage from './pages/SharedPage';
import FolderPage from './pages/FolderPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="shared" element={<SharedPage />} />
            <Route path="folder" element={<FolderPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
