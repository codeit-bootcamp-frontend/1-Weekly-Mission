import styled from "styled-components";

export const Container = styled.div`
  z-index; 90;
  display: flex;
  position: absolute;
  top: 15px;
  right: 0px;
  flex-direction: column;
  width: 6.25rem;
  height: 4rem;
  gap: 0.125rem;
  background-color: #fff;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);

  :hover {
    background-color: var(--linkbrary-bg);
    color: var(--linkbrary-primary)
  }
`;

export const Menu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4375rem, 0.75rem;
  font-size: 0.875rem;
  color: var(--gray-light-gray-100);
  width: 100%;
  height: 100%;
`;
