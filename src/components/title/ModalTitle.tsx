import styled from "styled-components";

const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

interface ModalTitleProps {
  label: string;
}

export default function ModalTitle({ label }: ModalTitleProps) {
  return <Title>{label}</Title>;
}
