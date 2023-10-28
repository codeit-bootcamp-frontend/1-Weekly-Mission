import AddLink from '../components/AddLink';
import styled from 'styled-components';
import Folder from '../components/Folder';

function FolderPage({ cards }) {
  return (
    <Container>
      <AddLink />
      <Folder cards={cards} />
    </Container>
  );
}

export default FolderPage;

const Container = styled.div`
  min-height: 90vh;
`;
