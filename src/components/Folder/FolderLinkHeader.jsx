import styled from 'styled-components';
import LinkAddForm from '../Search/LinkAddForm';

function FolderLinkHeader() {
  return (
    <FolderHeader>
      <LinkAddForm />
    </FolderHeader>
  )
}

export default FolderLinkHeader;

const FolderHeader = styled.header`
  display: flex;
  padding: 2.4rem 3.2rem 4rem 3.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  align-self: stretch;
  background-color: #f0f6ff;
  
  @media (min-width: 768px) {
    align-items: center; 
  }
`
