import styled from "styled-components";
import Footer from "./Footer";
import { FixedHeader } from "./Header";

const BlankBox = styled.div`
  width: 100%;
  height: auto;
  flex-grow: 1;
`;

function NavAndFooterFixed({ children }) {
  return (
    <>
      <FixedHeader />
      <div>{children}</div>
      <BlankBox />
      <Footer />
    </>
  );
}

export default NavAndFooterFixed;
