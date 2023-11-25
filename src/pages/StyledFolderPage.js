// PC: 1200px 이상
// Tablet: 768px 이상 ~ 1199px 이하
// Mobile: 375px 이상 ~ 767px 이하
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px 0 70px;
  background-color: #edf7ff;
`;

export const TargetDiv = styled.div`
  width: 100%;
  height: 20px;
  border: 1px solid red;
`;

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-top: 4rem;
  padding-bottom: 5rem;

  @media (max-width: 1199px) {
    padding: 4rem 3rem 4rem;
  }

  @media (max-width: 767px) {
    padding: 3rem 3rem 4rem;
  }
`;
