import * as S from './InfoContainer.style';
import SHARE from 'assets/icons/share.svg';
import EDIT from 'assets/icons/edit.svg';
import DELETE from 'assets/icons/delete.svg';

function InfoContainer({ defaultFolder, selectedFolder }) {
  return (
    <S.InfoContainer>
      <S.FolderTitle>{selectedFolder?.name}</S.FolderTitle>
      <S.SettingButtonContainer>
        {selectedFolder?.id !== defaultFolder.id && (
          <>
            <S.SettingButton>
              <img src={SHARE} alt='공유하기' />
              공유
            </S.SettingButton>
            <S.SettingButton>
              <img src={EDIT} alt='이름 변경하기' />
              이름 변경
            </S.SettingButton>
            <S.SettingButton>
              <img src={DELETE} alt='삭제하기' />
              삭제
            </S.SettingButton>
          </>
        )}
      </S.SettingButtonContainer>
    </S.InfoContainer>
  );
}

export default InfoContainer;
