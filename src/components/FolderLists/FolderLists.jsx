import * as Styled from "./StyledFolderLists";

const FolderList = ({ data, onClick }) => {
  const handleClickButton = (id, name) => {
    onClick(id, name);
  };

  return (
    <Styled.Btn onClick={() => handleClickButton(data.id, data.name)}>
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
      <Styled.BtnBox>
        <Styled.Btn onClick={() => handleClickButton("", "전체")}>
          전체
        </Styled.Btn>
        {folderData.map((data) => {
          return <FolderList key={data.id} data={data} onClick={onClick} />;
        })}
      </Styled.BtnBox>
      <div>
        <Styled.Title>{title}</Styled.Title>
      </div>
    </Styled.Container>
  );
};

export default FolderLists;
