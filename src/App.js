import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Banner from "./Banner.js";
import Footer from "./Footer.js";
import Card from "./Card.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
