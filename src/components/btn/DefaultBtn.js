import styled from "styled-components";

const DefaultBtn = ({ children }) => {
  return <DefaultBtnContainer>{children}</DefaultBtnContainer>;
};

export default DefaultBtn;

export const DefaultBtnContainer = styled.button`
  border-radius: 0.8rem;
  background: linear-gradient(91deg, var(--primary) 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  padding: 1.6rem 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
