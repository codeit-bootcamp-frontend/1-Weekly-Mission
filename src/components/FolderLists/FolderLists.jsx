import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AddFolderBtn, EditFolderTools } from "components";
import * as Styled from "./StyledFolderLists";

const FolderList = ({ data, onClick }) => {
  return (
    <Link to={`/folder/${data.id}`}>
      <Styled.Btn id="btn" onClick={() => onClick(data.name)}>
        {data.name}
      </Styled.Btn>
    </Link>
  );
};

const FolderLists = ({ folderData }) => {
  const [folderTitle, setFolderTitle] = useState("전체");

  const handleBtnClick = (dataName) => {
    dataName === "전체" ? setFolderTitle("전체") : setFolderTitle(dataName);
  };

  const handleBtnColor = () => {
    const BUTTONS = document.querySelectorAll("#btn");
    for (const btn of BUTTONS) {
      if (btn.textContent === folderTitle) {
        btn.style.backgroundColor = "var(--primary)";
        btn.style.color = "var(--white)";
      } else {
        btn.style.backgroundColor = "var(--white)";
        btn.style.color = "var(--black)";
      }
    }
  };

  useEffect(() => {
    handleBtnColor();
  }, [folderTitle]);

  return (
    <Styled.Container>
      <Styled.FolderBlock>
        <Styled.BtnBox>
          <Link to="/folder">
            <Styled.Btn id="btn" onClick={() => handleBtnClick("전체")}>
              전체
            </Styled.Btn>
          </Link>
          {folderData.map((data) => {
            return (
              <FolderList key={data.id} data={data} onClick={handleBtnClick} />
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
