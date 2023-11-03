import add from "../../images/add.svg";

import "../../styles/SelectPart.css";
import styled from "styled-components";
import LinkInfo from "./LinkInfo";

const initFolder = [
  {
    name: "전체",
    id: "",
    key: "전체",
  },
];

function SelectPart({
  selectItems,
  handleClickUpdate,
  folderName,
  nowFolderId,
  openMAF,
  userId,
}) {
  return (
    <div className="SelectPart">
      <div className=" selectList-info">
        <div className="selectList-wrapper">
          {[...initFolder, ...selectItems].map((item) => {
            return (
              <Button
                key={item.id}
                onClick={() => handleClickUpdate(item.name, item.id)}
                $selected={item.id === nowFolderId}
              >
                {item.name}
              </Button>
            );
          })}
        </div>
        <div className="add-folder" onClick={openMAF}>
          <span className="add-text">폴더 추가</span>
          <img className="add" src={add} alt="" />
        </div>
        <button className="add-btn" onClick={openMAF}>
          <span className="add-text btn">폴더 추가</span>
          <img className="add btn" src={add} alt="" />
        </button>
      </div>
      <LinkInfo
        folderName={folderName}
        nowFolderId={nowFolderId}
        userId={userId}
      />
    </div>
  );
}

const Button = styled.button`
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: #fff;
  white-space: nowrap;
  max-width: 90px;
  text-align: center;

  background-color: ${({ $selected }) =>
    $selected ? "var(--linkbrary-primary-color, #6d6afe)" : `#ffffff`};
`;

export default SelectPart;
