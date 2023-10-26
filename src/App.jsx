import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import GlobalStyle from 'styles/GlobalStyle';
import Home from 'pages/Home';
import Signin from 'pages/Auth/Signin';
import Signup from 'pages/Auth/Signup';
import SharedPage from 'pages/Shared';

TimeAgo.addDefaultLocale(en);

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='shared' element={<SharedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
