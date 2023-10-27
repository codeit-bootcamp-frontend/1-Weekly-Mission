import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shared from './pages/Shared';
import App from './App';
import Folder from './pages/Folder';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Landing />} />
          <Route path='/shared' element={<Shared />} />
          <Route path='/folder' element={<Folder />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
