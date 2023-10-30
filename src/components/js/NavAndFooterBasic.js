import styled from "styled-components";
import Footer from "./Footer";
import { BasicHeader } from "./Header";

const Wrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BlankBox = styled.div`
  width: 100%;
  height: auto;
  flex-grow: 1;
`;

function NavAndFooterBasic({ children }) {
  return (
    <Wrapper>
      <BasicHeader />
      {children}
      <BlankBox />
      <Footer />
    </Wrapper>
  );
}

export default NavAndFooterBasic;
