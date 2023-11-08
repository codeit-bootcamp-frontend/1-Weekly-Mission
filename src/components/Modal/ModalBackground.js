import { styled } from 'styled-components';

const Background = styled.div`
  width: 360px;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
`;

function ModalBackground({ children }) {
  return <Background>{children}</Background>;
}

export default ModalBackground;
