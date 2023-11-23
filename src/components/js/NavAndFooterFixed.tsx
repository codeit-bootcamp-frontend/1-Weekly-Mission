import { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./footer/Footer";
import { FixedHeader } from "./header/Header";

interface Props {
  children?: ReactNode;
}

function NavAndFooterFixed({ children }: Props) {
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
