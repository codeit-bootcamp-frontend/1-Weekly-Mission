import { GridLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function Loading() {
  return (
    <Container>
      <GridLoader color="#6d6afe" size={20} speedMultiplier={1} />
    </Container>
  );
}
