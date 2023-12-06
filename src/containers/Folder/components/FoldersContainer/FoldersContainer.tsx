import { useEffect, useState } from 'react';
import FoldersView from '../FoldersView';
import InfoContainer from '../InfoContainer';
import { Folder } from '@/types/Folder.types';
import { DEFAULT_USER_ID } from '@/services/config/default';

const DEFAULT_FOLDER = {
  id: 0,
  name: '전체',
};

interface Props {
  folders: Folder[];
  initialFolderId: number;
  setFolderLinks: (nextFolderId: number) => void;
}

function FoldersContainer({ folders, initialFolderId, setFolderLinks }: Props) {
  const initialSelectedFolder = folders?.find(
    (folder) => folder.id === initialFolderId
  );

  const [selectedFolder, setSelectedFolder] = useState<Folder>(DEFAULT_FOLDER);

  const onFolderButtonClick = (folder: Folder) => {
    setFolderLinks(folder.id);
    setSelectedFolder(folder);
  };

  useEffect(() => {
    if (initialSelectedFolder) {
      setSelectedFolder(initialSelectedFolder);
    } else {
      setSelectedFolder(DEFAULT_FOLDER);
    }
  }, [initialSelectedFolder]);

  return (
    <>
      {folders?.length !== 0 && (
        <>
          <FoldersView
            folders={folders}
            defaultFolder={DEFAULT_FOLDER}
            selectedFolder={selectedFolder}
            onFolderButtonClick={onFolderButtonClick}
          />
          <InfoContainer
            defaultFolder={DEFAULT_FOLDER}
            selectedFolder={selectedFolder}
            userId={DEFAULT_USER_ID}
          />
        </>
      )}
    </>
  );
}

export default FoldersContainer;
