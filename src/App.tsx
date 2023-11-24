import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '@styles/GlobalStyle';
import Home from '@pages/Home';
import Signup from '@pages/Auth/Signup';
import Signin from '@pages/Auth/Signin';
// import Shared from '@pages/Shared';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        {/* <Route path='/shared' element={<Shared />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
