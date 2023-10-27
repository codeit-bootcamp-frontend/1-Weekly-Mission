import { Nav, Footer } from "./containers";
import Profile from "./component/Profile";
import Main from "./component/Main";
import "./global.css";
import "./index.css";

function App() {
  return (
    <>
      <Nav />
      <Profile />
      <Main />
      <Footer />
    </>
  );
}

export default App;
