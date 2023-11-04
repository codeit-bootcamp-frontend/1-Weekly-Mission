import { useState } from "react";
import styled from "styled-components";


const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ModalBtn = styled.div`
  text-decoration: none;
  border: none;
  padding: 20px;
  border-radius: 30px;
  cursor: pointer;
`;

const ModalBackdrop = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const ModalView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 360px;
  height: 239px;
  background-color: #ffffff;
  position: relative;
`;

const ExitBtn = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: var(--color-gray-04);
  color: var(--color-gray-02);
  font-weight: 600;
  border-radius: 50%;
  margin: 10px;
  padding: 5px 10px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ModalContent = styled.div`
  width: 280px;
  height: 174px;
  margin: 32px 40px;
  text-align: center;
  h1 {
    color: #373740;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 24px;
  }
  input {
    width: 100%;
    padding: 18px 15px;
    border: 1px solid #CCD5E3;
    border-radius: 8px;
    outline: none;
    margin-bottom: 15px;
  }
  input::placeholder {
    color: #CCD5E3
  }
  button {
    width: 100%;
    padding: 16px 20px;
    background: var(--color-background);
    color: var(--color-white);
    border-radius: 8px;
  }
`;

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>{children}</ModalBtn>
        {isOpen ?
          <ModalBackdrop onclick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <ExitBtn onClick={openModalHandler}>X</ExitBtn>
              <ModalContent>
                <h1>폴더 추가</h1>
                <input type="text" placeholder="내용 입력" />
                <button>추가하기</button>
              </ModalContent>
            </ModalView>
          </ModalBackdrop>
          : null
        }
      </ModalContainer>
    </>
  );
}

export default Modal;