import kakaotalkIcon from "images/kakao.svg";
import facebookIcon from "images/facebook.svg";
import linkIcon from "images/link.svg";
import * as S from "./Modal.style";
import { useEffect } from "react";

const { Kakao } = window;

function ModalShare({ folderName, folderId }) {
  const handleShareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "text",
      text: "카카오톡 공유하기",
      link: {
        webUrl: `${window.location.host}/shared?user=1&folder=${folderId}`,
      },
    });
  };

  const handleShareFacebook = () => {
    window.open(`http://www.facebook.com/sharer.php?u=${window.location.host}/shared?user=1&folder=${folderId}`)
  }

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크 복사");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("ac749b6133a70dccf01faaf302adceac");
    console.log(Kakao.isInitialized());
  }, []);

  return (
    <>
      <S.TitleContainer>
        <S.Title>폴더 공유</S.Title>
        <S.Subtitle>{folderName}</S.Subtitle>
      </S.TitleContainer>
      <S.IconsBox>
        <S.Icon onClick={() => handleShareKakao()}>
          <S.KaKaotalkIconImgContainer>
            <img src={kakaotalkIcon} alt="카카오톡 아이콘" />
          </S.KaKaotalkIconImgContainer>
          <p>카카오톡</p>
        </S.Icon>
        <S.Icon onClick={() => handleShareFacebook()}>
          <S.FacebookIconImgContainer>
            <img src={facebookIcon} alt="페이스북 아이콘" />
          </S.FacebookIconImgContainer>
          <p>페이스북</p>
        </S.Icon>
        <S.Icon onClick={() => handleCopyClipBoard(`${window.location.href}`)}>
          <S.IconImgContainer>
            <img src={linkIcon} alt="링크 복사 아이콘" />
          </S.IconImgContainer>
          <p>링크 복사</p>
        </S.Icon>
      </S.IconsBox>
    </>
  );
}

export default ModalShare;