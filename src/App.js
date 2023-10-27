import RouterComponent from "./RouterComponent";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
    font-family: Pretendard, sans-serif;
  }

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterComponent />
    </>
  );
}

export default App;
