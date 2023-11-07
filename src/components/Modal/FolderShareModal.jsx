import { CloseButton, ModalSubTitle, ModalTitle, ModalTitleContainer } from '../../styles/ModalStyle';
import close_button from '../../assets/svg/close.svg';
import styled from 'styled-components';
import kakao_icon from '../../assets/svg/kakao.svg';
import facebook_icon from '../../assets/svg/facebook.svg';
import link_icon from '../../assets/svg/link.svg';

const SHARE_ICONS = [
  {
    src: kakao_icon,
    alt: '카카오톡 공유버튼',
    title: '카카오톡',
    backgroundColor: '#FEE500',
  },
  {
    src: facebook_icon,
    alt: '페이스북 공유버튼',
    title: '페이스북',
    backgroundColor: '#1877F2',
  },
  {
    src: link_icon,
    alt: '링크 복사 버튼',
    title: '링크 복사',
    backgroundColor: 'rgba(157, 157, 157, 0.04)',
  },

];

function FolderShareModal({ onCloseModal, name }) {

  return (
    <>
      <CloseButton src={close_button} alt='모달 닫기 버튼' onClick={onCloseModal} />
      <ModalTitleContainer>
        <ModalTitle>폴더 공유</ModalTitle>
        <ModalSubTitle>{name}</ModalSubTitle>
      </ModalTitleContainer>
      <IconsBox>
        {SHARE_ICONS.map((icon) =>
          <Icons key={icon.title}>
            <Icon $backgroundColor={icon.backgroundColor}>
              <IconImage src={icon.src} alt={icon.alt} />
            </Icon>
            <IconTitle>{icon.title}</IconTitle>
          </Icons>,
        )}
      </IconsBox>
    </>
  );
}

export default FolderShareModal;

const IconsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  color: #373740;
  text-align: center;
`;

const Icon = styled.div`
  border-radius: 37.333px;
  background: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const IconImage = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const IconTitle = styled.h4`
  font-family: Inter, sans-serif;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 115.385% */
`;
