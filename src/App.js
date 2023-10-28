import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Folder from "./components/Folder/Folder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedPage from "./components/SharedPage/SharedPage"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/shared" element = {<SharedPage/>}/>
          {/* <Route path = "/folder" element ={FolderPage} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
