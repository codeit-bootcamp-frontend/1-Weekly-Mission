import { Nav, Footer } from "./containers";
import SharedPage from "./pages/SharedPage";
import "./global.css";
import "./index.css";

function App() {
  return (
    <>
      <Nav />
      <SharedPage />
      <Footer />
    </>
  );
}

export default App;
