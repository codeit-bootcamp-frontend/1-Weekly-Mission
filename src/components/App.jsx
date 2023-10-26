import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import 'styles/reset.css';
import 'styles/color.css';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div><Outlet /></div>
      <Footer />
    </>
  );
}

export default App;
