import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import SharedPage from './components/SharedPage';
import HomePage from './components/HomePage';
import FolderPage from './components/FolderPage';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
