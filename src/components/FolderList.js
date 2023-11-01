import styled from "styled-components";


const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  ul {
    display: flex;
    gap: 8px;
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


function FolderList({ data }) {

  return (
    <StyledMenu>
        <ul>
          <li>전체</li>
          {data.map((list) => <li key={list.id}>{list.name}</li>)}
        </ul>
      <div className="add-folder">폴더 추가 +</div>
    </StyledMenu>
  );
}

export default FolderList;