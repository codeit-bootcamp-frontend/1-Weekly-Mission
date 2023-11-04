import styled from "styled-components";
import Footer from "./footer/Footer";
import { FixedHeader } from "./header/Header";

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

const BlankBox = styled.div`
  width: 100%;
  height: auto;
  flex-grow: 1;
`;
