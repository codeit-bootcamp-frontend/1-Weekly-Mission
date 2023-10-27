import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../src/components/App';
import FolderPage from './components/FolderPage';
import SharedPage from './components/SharedPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route path="/folder" element={<FolderPage />}></Route>
            <Route path="/shared" element={<SharedPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Main;