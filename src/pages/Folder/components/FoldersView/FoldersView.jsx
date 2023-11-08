import * as S from './FoldersView.style';
import useModal from 'hooks/useModal';
import NewFolder from 'components/Modal/NewFolder';
import ADD_COLOR from 'assets/icons/add-color.svg';
import ADD_WHITE from 'assets/icons/add-white.svg';

function FoldersView({
  folders,
  defaultFolder,
  selectedFolder,
  onFolderButtonClick,
}) {
  const [toggleShow, Modal] = useModal({
    newFolder: <NewFolder />,
  });

  return (
    <>
      {Modal}
      {folders && (
        <S.Container>
          <S.Folders>
            <li key={defaultFolder.id}>
              <FolderButton
                folder={defaultFolder}
                selected={defaultFolder.id === selectedFolder?.id}
                onClick={onFolderButtonClick}
              />
            </li>
            {folders.map((folder) => (
              <li key={folder?.id}>
                <FolderButton
                  folder={folder}
                  selected={folder?.id === selectedFolder?.id}
                  onClick={onFolderButtonClick}
                />
              </li>
            ))}
          </S.Folders>
          <S.AddFolderButton
            type='button'
            onClick={() => toggleShow('newFolder')}
          >
            폴더 추가
            <S.AddColor src={ADD_COLOR} alt='추가하기' />
            <S.AddWhite src={ADD_WHITE} alt='추가하기' />
          </S.AddFolderButton>
        </S.Container>
      )}
    </>
  );
}

export default FoldersView;

function FolderButton({ folder, selected, onClick }) {
  const onSelect = () => {
    onClick?.(folder);
  };

  return (
    <S.FolderButton type='button' onClick={onSelect} selected={selected}>
      {folder?.name}
    </S.FolderButton>
  );
}
