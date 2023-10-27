import Header from "./Header";
import Main from "./FolderPage";
import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div><Outlet /></div>
      <Footer />
    </>
  );
}

export default App;
