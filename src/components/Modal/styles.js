import styled from 'styled-components';

const ModalOuterBox = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* opacity: 0.4; */

  background-color: #000000;
`;

const ModalBox = styled.div`
  position: relative;
  width: 36rem;
  height: 23.9rem;
  flex-shrink: 0;
  img {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ModalFrameBox = styled.div`
  display: inline-flex;
  padding: 3.2rem 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  border-radius: 1.5rem;
  border: 1px solid var(--linkbrary-gray-20);
  background-color: var(--linkbrary-white);

  h2 {
    color: var(--linkbrary-gray-100);
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const ModalInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

const ModalInput = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--linkbrary-primary-color);
  background: var(--linkbrary-white);
  color: var(--linkbrary-gray-100);
`;

export { ModalBox, ModalFrameBox, ModalInnerBox, ModalInput, ModalOuterBox };
