import AddLink from '../components/AddLink';
import styled from 'styled-components';
import Folder from '../components/Folder';

function FolderPage() {
  return (
    <Container>
      <AddLink />
      <Folder />
    </Container>
  );
}

export default FolderPage;

const Container = styled.div`
  min-height: 90vh;
`;
