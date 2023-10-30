import { useState } from "react";
import { NavLink } from "react-router-dom";
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

function FolderChip({ name, id }) {
  const [active, setActive] = useState(undefined);

  const getActiveStyle = ({ isActive }) => {
    setActive(isActive);
  };

  return (
    <NavLink style={getActiveStyle} to={`/folder/${id}`}>
      <StyledFolderBtn active={active}>{name}</StyledFolderBtn>
    </NavLink>
  );
}

function FolderList({ folders }) {
  return (
    <FlexDiv>
      <FlexUl>
        <li>
          <FolderChip name={"전체"} id={""} />
        </li>
        {folders.map((folder) => {
          const { id, name } = folder;

          return (
            <li key={folder.id}>
              <FolderChip name={name} id={id} />
            </li>
          );
        })}
      </FlexUl>

      <StyledAddBtn>폴더 추가 +</StyledAddBtn>
    </FlexDiv>
  );
}

export default FolderList;
