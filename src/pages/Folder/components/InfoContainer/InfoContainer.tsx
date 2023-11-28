import * as S from './InfoContainer.style';
import useModal from '@hooks/useModal';
import { Folder } from '../FoldersContainer/FoldersContainer.types';
import SHARE from '@assets/icons/share.svg';
import EDIT from '@assets/icons/edit.svg';
import DELETE from '@assets/icons/delete.svg';
import ModalPortals from '@components/Modal/ModalPortals';

interface Props {
  defaultFolder: Folder;
  selectedFolder: Folder;
  userId: number;
}

function InfoContainer({ defaultFolder, selectedFolder, userId }: Props) {
  const [modal, setModal] = useModal({
    userId: userId,
    folderName: selectedFolder?.name,
    folderId: selectedFolder?.id,
  });

  const setShareModal = () => {
    setModal('share');
  };

  const setEditModal = () => {
    setModal('edit');
  };

  const setDeleteFolderModal = () => {
    setModal('deleteFolder');
  };

  return (
    <>
      <S.InfoContainer>
        <S.FolderTitle>{selectedFolder?.name}</S.FolderTitle>
        <S.SettingButtonContainer>
          {selectedFolder?.id !== defaultFolder.id && (
            <>
              <S.SettingButton onClick={setShareModal}>
                <img src={SHARE} alt='공유하기' />
                공유
              </S.SettingButton>
              <S.SettingButton onClick={setEditModal}>
                <img src={EDIT} alt='이름 변경하기' />
                이름 변경
              </S.SettingButton>
              <S.SettingButton onClick={setDeleteFolderModal}>
                <img src={DELETE} alt='삭제하기' />
                삭제
              </S.SettingButton>
            </>
          )}
        </S.SettingButtonContainer>
      </S.InfoContainer>
      <ModalPortals>{modal}</ModalPortals>
    </>
  );
}

export default InfoContainer;
