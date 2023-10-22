import "./styles/reset.css";
//import logo from "./logo.svg";
import styles from "./styles/App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className={styles.App__container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
