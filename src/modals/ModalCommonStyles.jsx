import styled from "styled-components";

export const Content = styled.div`
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: relative;
`;

export const TitleText = styled.div`
  color: #373740;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const DescriptionText = styled.h5`
  color: #9fa6b2;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: ${({ margin }) => margin};
`;
