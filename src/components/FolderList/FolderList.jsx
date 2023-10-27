import { getFolderList } from "api";
import { useEffect, useState } from "react";
import * as S from "./FolderList.style";
import addIcon from "images/add.svg";

function FolderList({ getFolderId }) {
  const [folders, setFolders] = useState();

  const handleAllClick = () => getFolderId("");
  const handleClick = (e) => getFolderId(e.target.id);

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
            <li>
              <S.Folder onClick={handleAllClick}>전체</S.Folder>
            </li>
            {folders.map((folder) => {
              return (
                <li key={folder.id}>
                  <S.Folder onClick={handleClick} id={folder.id}>
                    {folder.name}
                  </S.Folder>
                </li>
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
