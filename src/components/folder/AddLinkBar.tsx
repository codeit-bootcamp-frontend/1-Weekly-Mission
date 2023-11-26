import { useState, useRef, FormEvent } from 'react';
import styled from 'styled-components';
import BlueBtn from 'components/common/Button/BlueBtn';
import linkIcon from 'assets/images/link.svg';
import ModalPortal from 'components/common/Modal/ModalPortal';
import AddToFolderModal from 'components/common/Modal/AddToFolderModal';
import useModal from 'hooks/useModal';

function AddLinkBar() {
  const { isOpen, handleModalOpen, handleModalClose } = useModal();
  const [inputValue, setInputValue] = useState('');
  const input = useRef<HTMLInputElement>(null);

  function handleLinkAdd(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setInputValue(input.current?.value || '');
    handleModalOpen();
  }

  return (
    <>
      <Container onSubmit={handleLinkAdd}>
        <Wrapper>
          <Input ref={input} placeholder="링크를 추가해 보세요" />
          <BlueBtn type="linkAdd">추가하기</BlueBtn>
        </Wrapper>
      </Container>
      {isOpen && (
        <ModalPortal>
          <AddToFolderModal url={inputValue} onClickClose={() => handleModalClose()} />
        </ModalPortal>
      )}
    </>
  );
}

export default AddLinkBar;

const Container = styled.form`
  width: 100%;
  padding: 60px 320px 90px;
  background-color: var(--bg);

  /* Tablet */
  @media (max-width: 1199px) {
    padding: 60px 32.5px 90px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    padding: 24px 32px 40px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  height: 69px;
  padding: 16px 20px 16px 52px;
  background-image: url(${linkIcon});
  background-repeat: no-repeat;
  background-position: 20px 50%;
  border-radius: 15px;
  border: 1px solid var(--primary-color);
  background-color: white;
  font-size: 1.6rem;
  outline: none;
  &::placeholder {
    color: var(--gray-60);
  }
  &:focus {
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1);
  }
  /* Mobile */
  @media (max-width: 767px) {
    height: 53px;
  }
`;
