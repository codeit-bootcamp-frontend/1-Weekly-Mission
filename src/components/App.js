import Nav from './Nav';
import Footer from './Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  font-family: Pretendard, sans-serif;
}
a {
  text-decoration: none;
}
`;

export default function App({ children }) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      {children && <div>{children}</div>}
      <Footer />
    </>
  );
}
