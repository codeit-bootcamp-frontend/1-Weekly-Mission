import "./assets/css/reset.css";
import "./assets/css/global.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
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
