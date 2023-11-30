import Nav from './Nav';
import Footer from './Footer';
import { createGlobalStyle } from 'styled-components';
import { ReactNode } from 'react';

const GlobalStyle = createGlobalStyle`
* {
  font-family: Pretendard, sans-serif;
}
a {
  text-decoration: none;
}
`;

interface Props {
  children?: ReactNode;
}

export default function App({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      {children && <div>{children}</div>}
      <Footer />
    </>
  );
}
