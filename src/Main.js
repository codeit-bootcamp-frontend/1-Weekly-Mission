import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shared from './pages/Shared';
import Folder from './pages/Folder';
import Greeting from './pages/Greeting';
import SignIn from './pages/SignIn';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/shared" element={<Shared />} />
        {/* <Route path='/folder/:id' element={<Folder />} />   */}
        {/* 로그인하면 이렇게 구현 */}
        <Route path="/folder" element={<Folder />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
