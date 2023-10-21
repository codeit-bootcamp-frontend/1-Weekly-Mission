// components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Share from "./components/Share/Share";

// css
import "./styles/reset.css";
import "./styles/global.css";
import "./styles/style.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Share />
      <Footer />
    </div>
  );
};

export default App;
