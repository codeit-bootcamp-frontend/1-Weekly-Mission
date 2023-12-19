// PC: 1200px 이상
// Tablet: 768px 이상 ~ 1199px 이하
// Mobile: 375px 이상 ~ 767px 이하
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0 6rem;
  background-color: #edf7ff;
`;

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding-top: 4rem;
  padding-bottom: 5rem;

  @media (max-width: 1199px) {
    padding: 4rem 3rem 4rem;
  }

  @media (max-width: 767px) {
    padding: 3rem 3rem 4rem;
  }
`;

export const BtnBoxWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const Btn = styled.button`
  display: flex;
  padding: 20px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--primary);
  background-color: var(--white);
  color: var(--black);
  white-space: nowrap;

  &:active {
    background-color: var(--primary);
    color: var(--white);
  }
`;
