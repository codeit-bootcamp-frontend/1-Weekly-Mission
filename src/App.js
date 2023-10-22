import "./App.css";
import Nav from "./common/Nav";
import Header from "./common/Header";
import Footer from "./common/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
