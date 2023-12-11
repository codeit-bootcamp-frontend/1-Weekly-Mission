import useModal from '@/hooks/useModal';
import { Folder } from '@/types/Folder.types';
import { IconAddColor, IconAddWhite } from '@/public/svgs';

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
        <div className='flex flex-wrap justify-between pt-32pxr'>
          <ul className='flex flex-wrap gap-x-8pxr gap-y-12pxr'>
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
          </ul>
          <button
            type='button'
            onClick={setNewFolderModal}
            className='fixed bottom-100pxr left-1/2 z-popup flex -translate-x-1/2 items-center justify-center gap-4pxr rounded-[2rem] bg-primary px-24pxr py-8pxr text-16pxr font-medium tracking-tight text-white opacity-80 tablet:static tablet:translate-x-0 tablet:bg-white tablet:text-primary tablet:opacity-100'
          >
            폴더 추가
            <div className='hidden tablet:block'>
              <IconAddColor />
            </div>
            <div className='tablet:hidden'>
              <IconAddWhite />
            </div>
          </button>
        </div>
      )}
      {modal}
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

  const selectedStyle = selected && 'bg-primary text-white';

  return (
    <button
      type='button'
      onClick={onSelect}
      className={`flex h-30pxr items-center justify-center rounded-lg border border-solid border-primary px-10pxr py-6pxr text-14pxr font-normal ${selectedStyle}`}
    >
      {folder?.name}
    </button>
  );
}
