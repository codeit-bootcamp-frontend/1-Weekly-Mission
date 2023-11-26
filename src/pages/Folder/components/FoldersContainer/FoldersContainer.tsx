import { useEffect, useState } from 'react';
import useRequest from '@hooks/useRequest';
import FoldersView from '../FoldersView';
import InfoContainer from '../InfoContainer';

const DEFAULT_FOLDER = {
  id: 0,
  name: '전체',
};

interface Props {
  userId: number;
  initialFolderId: number;
  setFolderLinks: (nextFolderId: number) => void;
}

export interface Folder {
  id: number;
  name: string;
  created_at?: string;
  userid?: number;
  link?: {
    count: number;
  };
}

function FoldersContainer({ userId, initialFolderId, setFolderLinks }: Props) {
  const { data: folders } = useRequest<{ data: Folder[] }>({
    options: {
      url: `/users/${userId}/folders`,
      method: 'get',
    },
  });

  const foldersData = folders?.data;
  const initialSelectedFolder = foldersData?.find(
    (folder) => folder.id === initialFolderId
  );

  const [selectedFolder, setSelectedFolder] = useState<Folder>(DEFAULT_FOLDER);

  const onFolderButtonClick = (foldersData: Folder) => {
    setFolderLinks(foldersData.id);
    setSelectedFolder(foldersData);
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
      {folders?.data?.length !== 0 && (
        <>
          <FoldersView
            folders={foldersData}
            defaultFolder={DEFAULT_FOLDER}
            selectedFolder={selectedFolder}
            onFolderButtonClick={onFolderButtonClick}
          />
          <InfoContainer
            defaultFolder={DEFAULT_FOLDER}
            selectedFolder={selectedFolder}
            userId={userId}
          />
        </>
      )}
    </>
  );
}

export default FoldersContainer;
