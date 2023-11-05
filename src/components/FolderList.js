import styled from "styled-components";
import Modal from "./Modal.js";
import penIcon from "../assets/penIcon.svg";
import shareIcon from "../assets/shareIcon.svg";
import deleteIcon from "../assets/deleteIcon.png";

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  ul {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  li {
    border: 1px solid var(--color-primary);
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
  }
  .add-folder {
    color: var(--color-primary);
  }

  @media screen and (max-width: 768px) {
    ul {
      flex-wrap: wrap;
    }
`;


function FolderList({ data, onClick }) {

  return (
    <>
      <StyledMenu>
        <ul>
          <li>전체</li>
          {data.map((folder) => 
            <li key={folder.id} onClick={() => onClick(folder.id)}>{folder.name}</li>
          )}
        </ul>
        <div className="add-folder">
          <Modal>폴더 추가+</Modal>
        </div>
      </StyledMenu>
      {/* <div>
        <div>유용한 글</div>
        <ul>
          <li><img src={penIcon} alt="수정" />수정</li>
          <li><img src={shareIcon} alt="공유" />공유</li>
          <li><img src={deleteIcon} alt="삭제" />삭제</li>
        </ul>
      </div> */}
    </>
  );
}

export default FolderList;