import { ThemeProvider } from "styled-components";
import Globalstyle from "../styles/GlobalStyle";
import theme from '../styles/theme';
import Header from "./Header";
import Main from "./FolderPage";
import Footer from "./Footer";

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
