import dynamic from "next/dynamic";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DynamicLoader = dynamic(() => import("react-spinners/GridLoader"), {
  ssr: false,
});

export default function Loading() {
  return (
    <Container>
      <DynamicLoader color="#6d6afe" size={20} speedMultiplier={1} />
    </Container>
  );
}
