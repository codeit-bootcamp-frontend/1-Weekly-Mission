import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  flex-wrap: nowrap;
`;

const FlexUl = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const StyledAddBtn = styled.button`
  width: auto;
  color: var(--linkbrary-primary);
  font-weight: 500;
  letter-spacing: -0.01875rem;
  white-space: nowrap;

  @media (max-width: 767px) {
    display: none;
  }
`;

const StyledFolderBtn = styled.button`
  max-height: 2.1875rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.3125rem;
  border: 1px solid var(--linkbrary-primary);
  background-color: ${({ active }) =>
    active ? `var(--linkbrary-primary)` : `#fff`};
  color: ${({ active }) => active && `#fff`};
  white-space: nowrap;
`;

function FolderChip({ name, id, onClick, style }) {
  const handleOnClick = () => {
    onClick(id.slice(1), name);
  };

  return (
    <Link to={`/folder${id}`}>
      <StyledFolderBtn onClick={handleOnClick} active={style}>
        {name}
      </StyledFolderBtn>
    </Link>
  );
}

function FolderList({ folders, params }) {
  const [active, setActive] = useState(params);
  const [name, setName] = useState("");

  function filterName(folders, params) {
    if (!params) {
      setName("전체");
      return;
    }

    const folder = folders.filter((folder) => {
      return folder.id == params;
    });

    setName(folder[0]["name"]);
  }

  function handleClick(id, name) {
    setActive(id);
    setName(name);
  }

  useEffect(() => {
    filterName(folders, params);
    handleClick(params, name);
  }, [params]);

  return (
    <>
      <FlexDiv>
        <FlexUl>
          <li>
            <FolderChip
              name={"전체"}
              id={""}
              onClick={handleClick}
              style={active === "" ? "blue" : ""}
            />
          </li>
          {folders.map((folder) => {
            const { id, name } = folder;

            return (
              <li key={folder.id}>
                <FolderChip
                  name={name}
                  id={"/" + id}
                  onClick={handleClick}
                  style={active == id ? "blue" : ""}
                />
              </li>
            );
          })}
        </FlexUl>
        <StyledAddBtn>폴더 추가 +</StyledAddBtn>
      </FlexDiv>

      <div>{name}</div>
    </>
  );
}

export default FolderList;
