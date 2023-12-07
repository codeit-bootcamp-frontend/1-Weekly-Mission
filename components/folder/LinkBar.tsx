import { useState, useRef, FormEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Button from '@/components/common/Button';
import Modal from '../common/Modal/Modal';
import useModal from '@/hooks/useModal';
import { DEVICE_SIZE } from '@/styles/DeviceSize';

interface Props {
  initialValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

function LinkBar({ initialValue = '', setInputValue }: Props) {
  const { isOpen, handleModalOpen, handleModalClose } = useModal();
  const [inputLink, setInputLink] = useState('');
  const input = useRef<HTMLInputElement>(null);

  function handleLinkAdd(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (!input.current?.value) return alert('링크를 입력해주세요!');
    setInputLink(input.current?.value);
    handleModalOpen();
  }

  function handleInputChange(): void {
    setInputValue(input.current?.value || '');
  }

  return (
    <>
      <Container onSubmit={handleLinkAdd}>
        <Input ref={input} value={initialValue} placeholder="링크를 추가해 보세요" onChange={handleInputChange} />
        <Button type="add">추가하기</Button>
      </Container>
      {isOpen && <Modal type="add" title="폴더에 추가" data={inputLink} button="추가하기" onClickClose={() => handleModalClose()} />}
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
