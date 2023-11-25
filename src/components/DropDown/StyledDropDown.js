import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1000;
`;

export const Kebab = styled.img`
  cursor: pointer;
`;

export const Ul = styled.ul`
  position: absolute;
  top: 20px;
  width: 100px;
  border: 1px solid var(--gray30);
  background-color: var(--white);
  list-style: none;
  padding-left: 0px;
`;

export const Button = styled.button`
  align-self: stretch;
  width: 100%;
  padding: 6px 16px;
  background-color: ${({ $select }) =>
    $select ? `var(--gray10)` : `var(--white)`};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
  color: ${({ $select }) => ($select ? `var(--primary)` : `var(--gray100)`)};
  cursor: pointer;

  &:hover {
    background-color: var(--gray10);
    color: var(--primary);
  }
`;
