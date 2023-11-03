import Modal from "react-modal";
import styled from "styled-components";

const AddLinkModal = ({ isOpen, closeModal }) => {
  // style, 기능 수정 예정
  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="폴더에 추가 모달"
      ariaHideApp={false} // Remove this line in the styled component
    >
      <ModalContent>
        <ModalHeading>폴더에 추가</ModalHeading>
        <ModalParagraph>링크 주소</ModalParagraph>
        <ModalButton>코딩 팁</ModalButton>
        <ModalButton>채용 사이트</ModalButton>
        <ModalButton>유용한 글</ModalButton>
        <ModalButton>나만의 장소</ModalButton>
        <ModalAddButton onClick={closeModal}>추가하기</ModalAddButton>
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
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-radius: 15px;
  border: 1px solid var(--stroke-light, #dee2e6);
  background: var(--gray-white, #fff);
`;

const ModalContent = styled.div`
  /* Your modal content styles here */
`;

const ModalHeading = styled.h2`
  /* Your heading styles here */
`;

const ModalParagraph = styled.p`
  /* Your paragraph styles here */
`;

const ModalButton = styled.button`
  /* Your button styles here */
`;

const ModalAddButton = styled.button`
  /* Your button styles here */
`;

export default AddLinkModal;
