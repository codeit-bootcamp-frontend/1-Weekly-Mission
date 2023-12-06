import Modal from "react-modal";
import styled from "styled-components";
import closeBtn from "@/src/image/close.svg";
import copyIcon from "@/src/image/copy.svg";
import facebookIcon from "@/src/image/facebook_color.svg";
import kakaoTalkIcon from "@/src/image/kakaotalk.svg";
import { shareKakaoTalk, shareLink } from "../../utils/shareLink";
import Image from "next/image";

interface ShareFolderModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  name?: string;
  currentUrl: string;
}

const ShareFolderModal = ({ isOpen, onRequestClose, name, currentUrl }: ShareFolderModalProps) => {
  const facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=";
  const myUrl = "https://localhost:3000"; // 배포 실패해서 우선은 local host로 남겨둠..

  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <ModalContent>
        <CloseButton src={closeBtn} alt="닫는 버튼" onClick={onRequestClose} />
        <Description>
          <Heading>폴더 공유</Heading>
          <Name>{name}</Name>
        </Description>
        <ButtonContainer>
          <Button>
            <ButtonImg src={kakaoTalkIcon} alt="카카오톡" onClick={() => shareKakaoTalk(currentUrl)} />
            <ButtonName>카카오톡</ButtonName>
          </Button>
          <Button>
            <ButtonImg
              src={facebookIcon}
              alt="페이스북"
              onClick={() => {
                window.open(facebookUrl + myUrl + currentUrl);
              }}
            />
            <ButtonName>페이스북</ButtonName>
          </Button>
          <Button>
            <ButtonImg src={copyIcon} alt="공유하기" onClick={() => shareLink(currentUrl)} />
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  background: none;
  border: none;
`;

const ButtonImg = styled(Image)`
  width: 4.2rem;
  height: 4.2rem;
`;

const ButtonName = styled.p`
  color: var(--gray10);
  text-align: center;
  font-family: Inter;
  font-size: 1.3rem;
  line-height: 1.5rem;
`;

export default ShareFolderModal;
