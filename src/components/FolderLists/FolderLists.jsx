import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AddFolderBtn, EditFolderTools } from "components";
import * as Styled from "./StyledFolderLists";

const FolderList = ({ data, onClick, folderId }) => {
  return (
    <Link to={`/folder/${data.id}`}>
      <Styled.Btn
        selected={folderId === String(data.id)}
        onClick={() => onClick(data.name)}
      >
        {data.name}
      </Styled.Btn>
    </Link>
  );
};

const FolderLists = ({ folderData, id }) => {
  const [folderTitle, setFolderTitle] = useState(() => {
    const idFolder = folderData.filter((data) => data.id === parseInt(id));
    if (idFolder[0]?.name) {
      return idFolder[0]["name"];
    } else {
      return "전체";
    }
  });
  const folderId = id ? id : "전체";

  const handleBtnClick = (dataName) => {
    dataName === "전체" ? setFolderTitle("전체") : setFolderTitle(dataName);
  };

  useEffect(() => {
    (() => {
      const idFolder = folderData.filter((data) => data.id === parseInt(id));
      if (idFolder[0]?.name) {
        setFolderTitle(idFolder[0]?.name);
      } else {
        setFolderTitle("전체");
      }
    })();
  }, [id]);

  return (
    <Styled.Container>
      <Styled.FolderBlock>
        <Styled.BtnBox>
          <Link to="/folder">
            <Styled.Btn
              selected={folderId === folderTitle}
              onClick={() => handleBtnClick("전체")}
            >
              전체
            </Styled.Btn>
          </Link>
          {folderData.map((data) => {
            return (
              <FolderList
                key={data.id}
                data={data}
                folderId={folderId}
                onClick={handleBtnClick}
              />
            );
          })}
        </Styled.BtnBox>
        <AddFolderBtn />
      </Styled.FolderBlock>
      <Styled.TitleBlock>
        <Styled.Title>{folderTitle}</Styled.Title>
        {folderTitle === "전체" || <EditFolderTools />}
      </Styled.TitleBlock>
    </Styled.Container>
  );
};

export default FolderLists;
