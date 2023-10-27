import App from 'components/App';
import FolderForm from 'components/FolderForm/FolderForm';
import Card from 'pages/Card';
import Folder from 'pages/Folder';
import NotFoundPage from 'pages/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shared" element={<Card />} />
          <Route path="folder">
            <Route index element={<Folder />} />
            <Route path=":folderId" element={<FolderForm />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
