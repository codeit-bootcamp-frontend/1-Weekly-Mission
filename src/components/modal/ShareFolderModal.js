import Modal from "react-modal";
import styled from "styled-components";

import shareLink from "../../utils/shareLink";
import closeBtn from "../../image/close.svg";
import kakaoTalkIcon from "../../image/kakaotalk.svg";
import facebookIcon from "../../image/facebook_color.svg";
import copyIcon from "../../image/copy.svg";

const ShareFolderModal = ({ isOpen, onRequestClose, name, currentUrl }) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      <ModalContent>
        <CloseButton src={closeBtn} onClick={onRequestClose} />
        <Description>
          <Heading>폴더 공유</Heading>
          <Name>{name}</Name>
        </Description>
        <ButtonContainer>
          <Button>
            <ButtonImg src={kakaoTalkIcon} />
            <ButtonName>카카오톡</ButtonName>
          </Button>
          <Button>
            <ButtonImg src={facebookIcon} />
            <ButtonName>페이스북</ButtonName>
          </Button>
          <Button>
            <ButtonImg src={copyIcon} onClick={() => shareLink(currentUrl)} />
            <ButtonName>링크 복사</ButtonName>
          </Button>
        </ButtonContainer>
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  background: none;
  border: none;

  cursor: pointer;
`;

const ButtonImg = styled.img`
  width: 42px;
  height: 42px;
`;

const ButtonName = styled.p`
  color: var(--linkbrary-gray-100, #373740);
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 115.385% */
`;

export default ShareFolderModal;
