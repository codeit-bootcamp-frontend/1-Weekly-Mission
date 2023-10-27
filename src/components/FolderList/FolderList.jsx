import { getFolderList } from "api";
import { useEffect, useState } from "react";
import * as S from "./FolderList.style";
import addIcon from "images/add.svg";
import deleteIcon from "images/delete.svg";
import nameChangeIcon from "images/name-change.svg";
import shareIcon from "images/share.svg";

function FolderList({ getFolderId }) {
  const [folders, setFolders] = useState();
  const [selectedId, setSelectedId] = useState(null);
  const [selectedName, setSelectedName] = useState("전체");

  const handleAllClick = () => {
    getFolderId("");
    setSelectedId(null);
    setSelectedName("전체");
  };
  const handleClick = (e) => {
    getFolderId(e.target.id);
    setSelectedId(e.target.id);
    setSelectedName(e.target.name);
  };

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
                <S.Folder onClick={handleClick} name={folder.name} id={folder.id} to={`/folder?folderId=${folder.id}`} key={folder.id} selected={+selectedId === folder.id}>
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
      <S.CurrentFolderInfo>
        <span>{selectedName}</span>
        <S.OptionContainer selected={!selectedId}>
          <button>
            <img src={shareIcon} alt="공유 아이콘" />
            <span>공유</span>
          </button>
          <button>
            <img src={nameChangeIcon} alt="이름 변경 아이콘" />
            <span>이름 변경</span>
          </button>
          <button>
            <img src={deleteIcon} alt="삭제 아이콘" />
            <span>삭제</span>
          </button>
        </S.OptionContainer>
      </S.CurrentFolderInfo>
    </>
  );
}

export default FolderList;
