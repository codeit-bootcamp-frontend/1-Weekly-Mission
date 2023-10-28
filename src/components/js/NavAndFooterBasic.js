import styled from "styled-components";
import Footer from "./Footer";
import { BasicHeader } from "./Header";

const Wrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function NavAndFooterBasic({ children }) {
  return (
    <Wrapper>
      <BasicHeader />
      {children}
      <Footer />
    </Wrapper>
  );
}

export default NavAndFooterBasic;
