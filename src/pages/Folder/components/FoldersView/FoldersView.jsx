import * as S from './FoldersView.style';
import ADD_COLOR from 'assets/icons/add-color.svg';
import ADD_WHITE from 'assets/icons/add-white.svg';

function FoldersView({
  folders,
  defaultFolder,
  selectedFolder,
  onFolderButtonClick,
}) {
  return (
    <>
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
          <S.AddFolderButton type='button'>
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
