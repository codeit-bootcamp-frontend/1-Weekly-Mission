import * as S from './FolderList.style';
import useAsync from 'hooks/useAsync';
import { getFolders } from 'utils/apiClient';
import Folder from '../Folder';

const DEFAULT_FOLDER = {
  id: 'default',
  name: '전체',
};

function FolderList() {
  const [data, isLoading, loadingError, getUserAsync] = useAsync(getFolders);
  const folders = data?.data ?? [];

  return (
    <>
      {folders && (
        <S.FolderListContainer>
          <li key={DEFAULT_FOLDER.id}>
            <Folder data={DEFAULT_FOLDER} />
          </li>
          {folders.map((folder) => (
            <li key={folder.id}>
              <Folder data={folder} />
            </li>
          ))}
        </S.FolderListContainer>
      )}
    </>
  );
}

export default FolderList;
