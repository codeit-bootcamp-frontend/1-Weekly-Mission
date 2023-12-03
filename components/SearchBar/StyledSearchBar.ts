import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 80%;
  height: 54px;
  gap: 10px;
  padding: 15px 16px;
  border-radius: 10px;
  background: #f5f5f5;

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border-color: transparent;
`;

export const CloseBtn = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/closebtn.svg");
  background-position: center;
  cursor: pointer;
`;

export const SearchResultContainer = styled.div`
  width: 80%;
`;

export const SearchResultSentence = styled.h1`
  margin: 20px 0;
  color: var(--gray20);
  font-size: 3.2rem;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

export const Stress = styled.span`
  color: var(--gray100);
  font-size: 3.2rem;
  font-weight: 600;
  letter-spacing: -0.2px;
`;
