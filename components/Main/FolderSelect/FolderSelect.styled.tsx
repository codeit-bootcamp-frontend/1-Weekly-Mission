import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  width: 34rem;

  @media screen and (min-width: 768px) {
    width: 68rem;
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`;

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--White);
  white-space: nowrap;
  border: none;
`;
