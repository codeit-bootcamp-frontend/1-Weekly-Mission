import Searchbar from "components/searchbar/Searchbar";
import styled from "styled-components";

export const Container = styled.section`
  padding: 8.5rem 20rem 5.5rem 20rem;
  margin: 0;
  text-align: center;
`;

export default function FolderHero() {
  return (
    <Container>
      <Searchbar />
    </Container>
  );
}
