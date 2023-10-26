import { getFolderList } from "api";
import { useEffect, useState } from "react";
import * as S from "./FolderList.style";
import addIcon from "images/add.svg";

function FolderList() {
  const [folders, setFolders] = useState();

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
            {folders.map((folder) => {
              return (
                <li key={folder.id}>
                  <S.Folder>{folder.name}</S.Folder>
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
