import Modal from "react-modal";
import styled from "styled-components";
import closeBtn from "@/src/image/close.svg";
import Image from "next/image";

interface RedBtnModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  name?: string;
}

const RedBtnModal = ({ isOpen, onRequestClose, title, name }: RedBtnModalProps) => {
  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <ModalContent>
        <CloseButton src={closeBtn} alt="닫는 버튼" onClick={onRequestClose} />
        <Description>
          <Heading>{title}</Heading>
          <Name>{name}</Name>
        </Description>
        {/* 삭제하기 기능은 나중에 구현 */}
        <Button onClick={onRequestClose}>삭제하기</Button>
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

const Description = styled.div`
  display: flex;
  width: 28rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
`;

const Heading = styled.h2`
  color: var(--gray10);

  font-size: 2rem;
  font-weight: 700;
`;

const Name = styled.div`
  color: var(--gray20);

  text-align: center;
  font-size: 1.4rem;
  line-height: 2.2rem;
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
  background: var(--linkbrary-red);

  color: var(--grayLight);

  font-size: 1.6rem;
  font-weight: 600;
`;

export default RedBtnModal;
