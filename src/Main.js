import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../src/components/App';
import FolderPage from './components/FolderPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route path="/folder" element={<FolderPage />}></Route>
            {/* <Route path="/shared" element={<FolderPage />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Main;