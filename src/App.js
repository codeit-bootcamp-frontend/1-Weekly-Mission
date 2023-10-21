import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./styles/reset.css";
import "./styles/global.css";
import Searchbar from "./components/Searchbar/Searchbar";
import Share from "./components/Share";
// import "./styles/style.css"

const App = () => {
  return (
    <div className="App">
      {/* <header>
        <Navbar />
      </header>
      <Searchbar /> */}
      <Share />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
