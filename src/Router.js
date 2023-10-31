import App from 'components/App';
import Folder from 'pages/Folder';
import LinkBrary from 'pages/LinkBrary';
import NotFoundPage from 'pages/NotFoundPage';
import Shared from 'pages/Shared';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LinkBrary />} />
          <Route path="shared" element={<Shared />} />
          <Route path="folder" element={<Folder />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
