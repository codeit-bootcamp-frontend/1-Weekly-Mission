import styled from "styled-components";

export const FolderListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  list-style-type: none;
  padding-inline-start: 0;
`;

export const FolderContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Folder = styled.button`
  display: flex;
  padding: 0.8rem 1.2rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--primary);
  background: #fff;
  font-size: 1.6rem;
  line-height: 100%;
`;

export const AddFolderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  color: var(--primary);
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
`;
