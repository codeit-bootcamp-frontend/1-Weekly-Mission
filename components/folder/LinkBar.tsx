import { useState, useRef, FormEvent } from 'react';
import styled from 'styled-components';
import Button from '@/components/common/Button';
import ModalPortal from '@/components/common/Modal/ModalPortal';
import AddToFolderModal from '@/components/common/Modal/AddToFolderModal';
import useModal from '@/hooks/useModal';
import { DEVICE_SIZE } from '@/styles/DeviceSize';

function LinkBar() {
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
        <Input ref={input} placeholder="링크를 추가해 보세요" />
        <Button type="linkAdd">추가하기</Button>
      </Container>
      {isOpen && (
        <ModalPortal>
          <AddToFolderModal url={inputValue} onClickClose={() => handleModalClose()} />
        </ModalPortal>
      )}
    </>
  );
}

export default LinkBar;

const Container = styled.form`
  width: 800px;
  margin: 0 auto;
  position: relative;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 69px;
  padding: 16px 20px 16px 52px;
  background-image: url('/assets/images/link.svg');
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

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    height: 53px;
  }
`;
