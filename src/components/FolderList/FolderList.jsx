import { getFolderList } from "api";
import { useEffect, useState } from "react";
import * as S from "./FolderList.style";
import addIcon from "images/add.svg";

function FolderList({ getFolderId }) {
  const [folders, setFolders] = useState();
  const [selectedId, setSelectedId] = useState(null);

  const handleAllClick = () => {
    getFolderId("");
    setSelectedId(null);
  }
  const handleClick = (e) => {
    getFolderId(e.target.id);
    setSelectedId(e.target.id);
  }

  const handleLoad = async () => {
    const result = await getFolderList();
    const { data } = result;
    setFolders(data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      {folders && (
        <S.FolderListContainer>
          <S.FolderContainer>
            <S.Folder onClick={handleAllClick} to="/folder" selected={!selectedId}>
              전체
            </S.Folder>
            {folders.map((folder) => {
              return (
                <S.Folder onClick={handleClick} id={folder.id} to={`/folder?folderId=${folder.id}`} key={folder.id} selected={+selectedId === folder.id}>
                  {folder.name}
                </S.Folder>
              );
            })}
          </S.FolderContainer>
          <S.AddFolderButton>
            <span>폴더 추가</span>
            <img src={addIcon} alt="추가 아이콘" />
          </S.AddFolderButton>
        </S.FolderListContainer>
      )}
    </>
  );
}

export default FolderList;
