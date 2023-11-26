import { styled } from "styled-components";
import React from "react";

function ModalBackground({ children }: Children) {
  return <Background>{children}</Background>;
}

export default ModalBackground;

const Background = styled.div`
  width: 360px;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
`;
