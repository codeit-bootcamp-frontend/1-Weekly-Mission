import * as S from "./modal-styles/ModalsUnits";
import ModalBg from "./modal-styles/ModalBg";

function AddLinktoFolderModal({ folders }) {
  console.log(folders);
  const folderList = folders ?? [];
  console.log(folderList);
  return (
    <ModalBg>
      <S.Wrapper>
        <S.CloseButton />
        <S.TitleWrapper>
          <S.ModalTitle>폴더에 추가</S.ModalTitle>
          <S.ModalContents>링크 주소</S.ModalContents>
        </S.TitleWrapper>
        <S.FolderListWrapper>
          {folderList.map((item) => {
            return (
              <S.FolderItemContainer key={item.id}>
                <S.FolderTitle>{item.name}</S.FolderTitle>
                <S.FolderItemsCount>{`${item?.link?.count}개 링크`}</S.FolderItemsCount>
              </S.FolderItemContainer>
            );
          })}
        </S.FolderListWrapper>
        <S.StyledButton>추가하기</S.StyledButton>
      </S.Wrapper>
    </ModalBg>
  );
}

export default AddLinktoFolderModal;
