import styled from 'styled-components';
import LinkAddBar from './LinkAddBar';

function LinkAddForm() {
  return (
    <LinkAddFormStyle>
      <LinkAddBar />
    </LinkAddFormStyle>
  )
}

export default LinkAddForm;

const LinkAddFormStyle = styled.form`
  display: flex;
  width: 32.5rem;
  padding: 0.8rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  background: #fff;
  
  @media (min-width: 768px) {
    width: 100%;
    padding: 1.6rem 2rem;
  }
`;
