import { styled } from "styled-components";
import React from "react";

function ModalTitle({ title }: TitleProps) {
  return <Title>{title}</Title>;
}

export default ModalTitle;

const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--gray37);
`;
