import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import GlobalStyle from 'styles/GlobalStyle';
import Layout from 'components/Layout';
import SharedPage from 'pages/Shared/SharedPage';
import HomePage from 'pages/Home/Home';

TimeAgo.addDefaultLocale(en);

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='shared' element={<SharedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
