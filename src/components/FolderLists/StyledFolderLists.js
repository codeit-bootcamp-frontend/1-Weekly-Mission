import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;

export const Btn = styled.button`
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--primary);
  background-color: var(--white);
`;

export const Title = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;
