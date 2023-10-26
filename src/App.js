import "./assets/css/reset.css";
import "./assets/css/global.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/LandingPage";
import Profile from "./components/profile/Profile";
import useFetch from "./hooks/useFetch";

function App() {
  const response = useFetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const [data, isLoading] = response;

  return (
    <div className="App">
      <Nav />
      <Header data={data} isLoading={isLoading} />
      <LandingPage data={data} isLoading={isLoading} />
      <Footer />
      <Profile />
    </div>
  );
}

export default App;
