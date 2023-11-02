import { useEffect, useState } from 'react';
import useRequest from 'hooks/useRequest';
import FoldersView from '../FoldersView';
import InfoContainer from '../InfoContainer';

const DEFAULT_FOLDER = {
  id: 0,
  name: '전체',
};

function FoldersContainer({ userId, initialFolderId, setFolderLinks }) {
  const { data: folders } = useRequest({
    url: `/users/${userId}/folders`,
    method: 'get',
  });

  const foldersData = folders?.data;
  const initialSelectedFolder = foldersData?.find(
    (folder) => folder.id === initialFolderId
  );

  const [selectedFolder, setSelectedFolder] = useState(DEFAULT_FOLDER);

  const onFolderButtonClick = (foldersData) => {
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
          />
        </>
      )}
    </>
  );
}

export default FoldersContainer;
