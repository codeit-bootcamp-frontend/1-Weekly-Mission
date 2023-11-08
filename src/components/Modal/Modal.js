import { useEffect } from 'react';
import { styled } from 'styled-components';
import ModalBackground from './ModalBackground';
import { CloseButton, ModalButton } from './ModalButton';
import ModalFolderList from './ModalFolderList';
import ModalInput from './ModalInput';
import ModalShareButton from './ModalShareButton';
import ModalSubTitle from './ModalSubTitle';
import ModalTitle from './ModalTitle';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  bottom: 0px;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
  gap: 15px;
`;

function Modal({
  title,
  subTitle,
  buttonContent,
  onClick,
  shareKakao,
  shareFacebook,
  shareLink,
  folders,
}) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <ModalWrapper>
      <ModalBackground>
        <CloseButton onClick={onClick} />
        <ContentWrapper>
          <ModalTitle title={title} />
          {title === '폴더 추가' ||
          title === '폴더에 추가' ||
          title === '폴더 이름 변경' ? null : (
            <ModalSubTitle subTitle={subTitle} />
          )}
          {title === '폴더 공유' ? (
            <ModalShareButton
              shareKakao={shareKakao}
              shareLink={shareLink}
              shareFacebook={shareFacebook}
            />
          ) : null}
          {title === '폴더에 추가' ||
          title === '폴더 공유' ||
          title === '폴더 삭제' ||
          title === '링크 삭제' ? null : (
            <ModalInput />
          )}
          {title === '폴더에 추가' ? (
            <ModalFolderList folders={folders} />
          ) : null}
          {title === '폴더 공유' ? null : (
            <ModalButton content={buttonContent} />
          )}
        </ContentWrapper>
      </ModalBackground>
    </ModalWrapper>
  );
}

export default Modal;
