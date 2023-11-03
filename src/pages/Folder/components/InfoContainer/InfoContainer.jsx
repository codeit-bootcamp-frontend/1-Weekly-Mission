import * as S from './InfoContainer.style';
import useModal from 'hooks/useModal';
import SHARE from 'assets/icons/share.svg';
import EDIT from 'assets/icons/edit.svg';
import DELETE from 'assets/icons/delete.svg';
import Edit from 'components/Modal/Edit';
import NewFolder from 'components/Modal/NewFolder';
import Share from 'components/Modal/Share';
import DeleteFolder from 'components/Modal/DeleteFolder';
import DeleteLink from 'components/Modal/DeleteLink';
import AddToFolder from 'components/Modal/AddToFolder';

function InfoContainer({ defaultFolder, selectedFolder, userId }) {
  const closeModal = () => {
    toggleShow(null);
  };

  const [toggleShow, Modal] = useModal({
    edit: <Edit closeModal={closeModal} />,
    newFolder: <NewFolder closeModal={closeModal} />,
    share: <Share closeModal={closeModal} folderName={selectedFolder?.name} />,
    deleteFolder: (
      <DeleteFolder
        closeModal={closeModal}
        folderName={selectedFolder?.name}
        folderId={selectedFolder.id}
        userId={userId}
      />
    ),
    deleteLink: <DeleteLink closeModal={closeModal} />,
    addToFolder: <AddToFolder closeModal={closeModal} />,
  });

  return (
    <S.InfoContainer>
      {Modal}
      <S.FolderTitle>{selectedFolder?.name}</S.FolderTitle>
      <S.SettingButtonContainer>
        {selectedFolder?.id !== defaultFolder.id && (
          <>
            <S.SettingButton
              onClick={() => {
                toggleShow('share');
              }}
            >
              <img src={SHARE} alt='공유하기' />
              공유
            </S.SettingButton>
            <S.SettingButton
              onClick={() => {
                toggleShow('edit');
              }}
            >
              <img src={EDIT} alt='이름 변경하기' />
              이름 변경
            </S.SettingButton>
            <S.SettingButton
              onClick={() => {
                toggleShow('deleteFolder');
              }}
            >
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
