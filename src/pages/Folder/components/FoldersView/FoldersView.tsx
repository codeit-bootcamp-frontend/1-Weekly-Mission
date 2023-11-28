import * as S from './FoldersView.style';
import useModal from '@hooks/useModal';
import ADD_COLOR from '@assets/icons/add-color.svg';
import ADD_WHITE from '@assets/icons/add-white.svg';
import { Folder } from '../FoldersContainer/FoldersContainer.types';
import ModalPortals from '@components/Modal/ModalPortals';

interface Props {
  folders?: Folder[];
  defaultFolder: Folder;
  selectedFolder: Folder;
  onFolderButtonClick: (folderData: Folder) => void;
}

function FoldersView({
  folders,
  defaultFolder,
  selectedFolder,
  onFolderButtonClick,
}: Props) {
  const [modal, setModal] = useModal({});

  const setNewFolderModal = () => {
    setModal('newFolder');
  };

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
          <S.AddFolderButton type='button' onClick={setNewFolderModal}>
            폴더 추가
            <S.AddColor src={ADD_COLOR} alt='추가하기' />
            <S.AddWhite src={ADD_WHITE} alt='추가하기' />
          </S.AddFolderButton>
        </S.Container>
      )}
      <ModalPortals>{modal}</ModalPortals>
    </>
  );
}

export default FoldersView;

interface FolderButtonProps {
  folder: Folder;
  selected: boolean;
  onClick: (folderData: Folder) => void;
}

function FolderButton({ folder, selected, onClick }: FolderButtonProps) {
  const onSelect = () => {
    onClick?.(folder);
  };

  return (
    <S.FolderButton type='button' onClick={onSelect} $selected={selected}>
      {folder?.name}
    </S.FolderButton>
  );
}
