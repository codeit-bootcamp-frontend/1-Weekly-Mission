// 폴더 이름 변경, 폴더 추가 디자인
import Modal from "react-modal";
import styled from "styled-components";
import closeBtn from "@/src/image/close.svg";
import Image from "next/image";

interface BlueBtnModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  placeholder: string;
  btnType: string;
}

const BlueBtnModal = ({ isOpen, onRequestClose, title, placeholder, btnType }: BlueBtnModalProps) => {
  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <ModalContent>
        <CloseButton src={closeBtn} alt="닫는 버튼" onClick={onRequestClose} />
        <Heading>{title}</Heading>
        <Form>
          <Input placeholder={placeholder} />
          {/* 기능은 나중에 구현 */}
          <Button onClick={onRequestClose}>{btnType}</Button>
        </Form>
      </ModalContent>
    </CustomModal>
  );
};

const CustomModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  border-radius: 1.5rem;
  border: 0.1rem solid var(--stroke-light, #dee2e6);
  background: var(--linkbrary-white);
`;

const ModalContent = styled.div`
  display: inline-flex;
  padding: 3.2rem 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  position: relative;
`;

const CloseButton = styled(Image)`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  cursor: pointer;
`;

const Heading = styled.h2`
  color: var(--gray10);

  font-size: 2rem;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

const Input = styled.input`
  display: flex;
  width: 28rem;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.8rem;
  border: 0.1rem solid var(--primary);
  background: var(--linkbrary-white);
`;

const Button = styled.button`
  display: flex;
  width: 28rem;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border: none;
  border-radius: 0.8rem;
  background: var(--graBlueToSkyBlue);

  color: var(--grayLight);

  font-size: 1.6rem;
  font-weight: 600;
`;

export default BlueBtnModal;
