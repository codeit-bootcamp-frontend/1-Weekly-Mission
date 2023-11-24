import styled from "styled-components";

export const SelectPart = styled.div`
  display: flex;
  width: 1060px;
  margin-top: 40px;
  gap: 24px;
  flex-direction: column;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (max-width: 1123px) {
    width: 700px;
  }
  @media (max-width: 768px) {
    width: 500px;
  }
`;

export const TabButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  align-self: stretch;
  gap: 8px;

  @media (max-width: 1123px) {
    width: 700px;
  }
  @media (max-width: 768px) {
    width: 500px;
    flex-wrap: wrap;
    height: auto;
  }
`;

export const Target = styled.div`
  width: 1px;
`;

export const Main = styled.div`
  padding: 0 190px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1123px) {
    padding: 33px 32.5px 32px 32.5px;
  }
`;

export const Section = styled.div`
  width: 1060px;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 1123px) {
    width: 700px;
  }
  @media (max-width: 768px) {
    width: 500px;
  }
`;

export const Empty = styled.div`
  display: flex;
  width: 1060px;
  height: 100px;
  padding: 41px 0px 35px 0px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  color: #000;
  text-align: center;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
