import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 6.25rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  background: var(--color-white);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

export const DeleteOption = styled.button`
  padding: 7px 12px;
  font-size: 0.875rem;
  color: var(--color-text);
  background: none;
  border: none;
  cursor: pointer;
`;

export const AddOption = styled(DeleteOption)`
  color: var(--color-primary);
  background: var(--color-primary-bg);
`;
