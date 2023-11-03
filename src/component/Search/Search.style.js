import styled from "styled-components";

export const Container = styled.div`
  padding: 15px 16px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 13px 16px;
  }

  input {
    border: none;
    background-color: #f5f5f5;
  }
`;
