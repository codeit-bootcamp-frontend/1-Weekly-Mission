import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Index from './pages/Index';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Shared from './pages/Shared';
import FolderList from './pages/FolderList';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />

          <Route path="folder">
            <Route index element={<FolderList />} />
            <Route path=":folderID" element={<FolderList />} />
          </Route>

          <Route path="shared" element={<Shared />} />
        </Route>

        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
