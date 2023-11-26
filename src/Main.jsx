import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'components/App';
import SharedPage from 'pages/SharedPage';
import FolderPage from 'pages/FolderPage';
import GlobalStyle from 'styles/GlobalStyle';

function Main() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='shared' element={<SharedPage />} />
          <Route path='folder' element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
