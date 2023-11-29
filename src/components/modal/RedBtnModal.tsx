import Modal from "react-modal";
import styled from "styled-components";
import closeBtn from "../../image/close.svg";

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
        <CloseButton src={closeBtn} onClick={onRequestClose} />
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
  gap: 24px;

  border-radius: 15px;
  border: 1px solid var(--stroke-light, #dee2e6);
  background: var(--gray-white, #fff);
`;

const ModalContent = styled.div`
  // text-align: center;
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  position: relative;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const Description = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

const Heading = styled.h2`
  color: var(--linkbrary-gray-100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Name = styled.div`
  color: var(--linkbrary-gray-60, #9fa6b2);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;

const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: 8px;
  background: var(--linkbrary-red, #ff5b56);

  color: var(--grey-light, #f5f5f5);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  cursor: pointer;
`;

export default RedBtnModal;
