import styled from "styled-components";

const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export default function ModalTitle({ label }) {
  return <Title>{label}</Title>;
}
