import { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./footer/Footer";
import { BasicHeader } from "./header/Header";

interface Props {
  children?: ReactNode;
}

function NavAndFooterBasic({ children }: Props) {
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

const Wrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

const BlankBox = styled.div`
  width: 100%;
  height: auto;
  flex-grow: 1;
`;
