import { AddFolderBtn, EditFolderTools } from "components";
import * as Styled from "./StyledFolderLists";

const FolderList = ({ data, onClick }) => {
  const handleClickButton = (id, name) => {
    onClick(id, name);
  };
  return (
    <Styled.Btn
      onClick={() => handleClickButton(data.id, data.name)}
      id="folder"
    >
      {data.name}
    </Styled.Btn>
  );
};

const FolderLists = ({ folderData, onClick, title }) => {
  const handleClickButton = (id, name) => {
    onClick(id, name);
  };

  return (
    <Styled.Container>
      <Styled.FolderBlock>
        <Styled.BtnBox>
          <Styled.Btn onClick={() => handleClickButton("", "전체")} id="folder">
            전체
          </Styled.Btn>
          {folderData.map((data) => {
            return <FolderList key={data.id} data={data} onClick={onClick} />;
          })}
        </Styled.BtnBox>
        <AddFolderBtn />
      </Styled.FolderBlock>
      <Styled.TitleBlock>
        <Styled.Title>{title}</Styled.Title>
        <EditFolderTools />
      </Styled.TitleBlock>
    </Styled.Container>
  );
};

export default FolderLists;
