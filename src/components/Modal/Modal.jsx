import { createPortal } from "react-dom";
import * as S from "./Modal.style";
import closeButton from "images/_close.png";
import kakaotalkIcon from "images/kakao.svg";
import facebookIcon from "images/facebook.svg";
import linkIcon from "images/link.svg";
import { useEffect } from "react";
import useRequest from "hooks/useRequest";

const { Kakao } = window;

export default function Modal({ close, children }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div>
      <S.Overlay />
      <S.Wrapper onClick={close}>
        <S.Container onClick={(e) => e.stopPropagation()}>
          <S.CloseButton onClick={close}>
            <img src={closeButton} alt="모달 닫기 버튼" />
          </S.CloseButton>
          <S.Content>{children}</S.Content>
        </S.Container>
      </S.Wrapper>
    </div>,
    document.querySelector("#modal")
  );
}

export function ModalEdit({ folderName }) {
  return (
    <>
      <S.TitleContainer>
        <S.Title>폴더 이름 변경</S.Title>
      </S.TitleContainer>
      <S.Form>
        <S.Input placeholder={folderName} />
        <S.SubmitButton>변경하기</S.SubmitButton>
      </S.Form>
    </>
  );
}

export function ModalAddFolder() {
  return (
    <>
      <S.TitleContainer>
        <S.Title>폴더 추가</S.Title>
      </S.TitleContainer>
      <S.Form>
        <S.Input placeholder="내용 입력" />
        <S.SubmitButton>추가하기</S.SubmitButton>
      </S.Form>
    </>
  );
}

export function ModalShare({ folderName, folderId }) {
  const handleShareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "text",
      text: "카카오톡 공유하기",
      link: {
        webUrl: `${window.location.host}/shared?user=1&folder=${folderId}`,
      },
    });
  };

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
        <S.Icon>
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

export function ModalDelete({ folderName }) {
  return (
    <>
      <S.TitleContainer>
        <S.Title>폴더 삭제</S.Title>
        <S.Subtitle>{folderName}</S.Subtitle>
      </S.TitleContainer>
      <S.DeleteButton>삭제하기</S.DeleteButton>
    </>
  );
}

export function ModalDeleteLink({ url }) {
  return (
    <>
      <S.TitleContainer>
        <S.Title>링크 삭제</S.Title>
        <S.Subtitle>{url}</S.Subtitle>
      </S.TitleContainer>
      <S.DeleteButton>삭제하기</S.DeleteButton>
    </>
  );
}

export function ModalAddLink({ url }) {
  const { data } = useRequest({ url: "/users/1/folders" });
  const folders = data?.data;

  return (
    <>
      <S.TitleContainer>
        <S.Title>폴더에 추가</S.Title>
        <S.Subtitle>{url}</S.Subtitle>
      </S.TitleContainer>
      <S.FolderList>
        {folders &&
          folders.map((folder) => (
            <S.FolderListItem key={folder.id}>
              {folder.name}
              <span>{folder.link.count}개 링크</span>
            </S.FolderListItem>
          ))}
      </S.FolderList>
      <S.SubmitButton>추가하기</S.SubmitButton>
    </>
  );
}
