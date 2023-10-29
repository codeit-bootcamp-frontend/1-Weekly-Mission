import useAsync from "../../../Hooks/useAsync";
import { getFolders } from "../../../api";
import FolderButton from "../FolderButton/FolderButton";

function LinkList() {
  const [data, isLoading, LoadingError, getFolderAsync] = useAsync(() =>
    getFolders(1)
  );

  if (!data) return;
  console.log(data);
  const { data: folders } = data;
  console.log(folders);
  return (
    <FolderButton folders={folders} />

    
  );
}

export default LinkList;
