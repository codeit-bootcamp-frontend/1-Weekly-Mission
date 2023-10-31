import styled from 'styled-components';

function MobileFolderButton() {
  return <Button>폴더 추가 +</Button>;
}

export default MobileFolderButton;

const Button = styled.button`
  position: fixed;
  height: 4rem;
  width: 15rem;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 10rem;
  z-index: 999;
  border-radius: 20px;
  border: none;
  color: white;
  background-color: var(--primary);

  @media (min-width: 768px) {
    display: none;
  }
`;
