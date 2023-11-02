import * as S from "./modal-styles/ModalsUnits";
import ModalBg from "./modal-styles/ModalBg";
import checkImg from "Assets/check.svg";

function AddLinktoFolderModal({ folders, onClose, link, onSelect, isActive }) {
  return (
    <ModalBg>
      <S.Wrapper>
        <S.CloseButton onClick={onClose} />
        <S.TitleWrapper>
          <S.ModalTitle>폴더에 추가</S.ModalTitle>
          <S.ModalContents>{link}</S.ModalContents>
        </S.TitleWrapper>
        <S.FolderListWrapper>
          {folders.map((item, idx) => {
            const itemSelected = idx === isActive;
            return (
              <S.FolderItemWrapper
                key={item.id}
                idx={idx}
                onClick={() => {
                  onSelect(idx);
                }}
                isActive={itemSelected}
              >
                <S.FolderItemContainer>
                  <S.FolderTitle selected={itemSelected}>
                    {item.name}
                  </S.FolderTitle>
                  <S.FolderItemsCount>{`${item?.link?.count}개 링크`}</S.FolderItemsCount>
                </S.FolderItemContainer>
                {itemSelected && (
                  <S.CheckIcon src={checkImg} alt="체크_아이콘" />
                )}
              </S.FolderItemWrapper>
            );
          })}
        </S.FolderListWrapper>
        <S.StyledButton>추가하기</S.StyledButton>
      </S.Wrapper>
    </ModalBg>
  );
}

export default AddLinktoFolderModal;
