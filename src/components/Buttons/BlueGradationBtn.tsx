import styled from "styled-components";
import { ReactNode } from "react";

interface IBtnStyleProps {
  children?: ReactNode;
  width?: string;
  margin?: string;
}
function BlueGradationBtn({
  children = "",
  width = "auto",
  margin = "0",
}: IBtnStyleProps) {
  const BtnStyle = styled.button<IBtnStyleProps>`
    display: flex;
    width: ${width};
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    border: none;
    font-size: 16px;
    color: #fff;
    font-weight: 600;
    margin: ${margin};
  `;
  return <BtnStyle>{children}</BtnStyle>;
}

export default BlueGradationBtn;
