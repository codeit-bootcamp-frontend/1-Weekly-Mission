import * as S from "./Modal.style";
import useRequest from "hooks/useRequest";

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

export default ModalAddLink;