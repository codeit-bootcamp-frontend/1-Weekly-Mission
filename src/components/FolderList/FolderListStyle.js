import styled, { css } from "styled-components";
import colors from "../../style/colors";
import { cursorPointer, flexCenter } from "../../style/common";
import { device } from "../../style/device";

export const S = {
  Button: styled.button`
    display: flex;
    padding: 8px 12px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: 1px solid ${colors.primary};
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: #fff;
    white-space: nowrap;
    text-align: center;
    text-decoration: none;

    ${({ "data-onselect": isSelected }) =>
      isSelected &&
      css`
        background-color: ${colors.primary};
        color: #fff;
      `};
    ${cursorPointer}
  `,
  ButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  `,
  AddFolderButton: styled.button`
    color: #6d6afe;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    ${cursorPointer}
    letter-spacing: -0.3px;
    white-space: nowrap;
    border: none;
    background-color: white;

    @media ${device.mobile} {
      z-index: 2;
      display: block;
      padding: 8px 24px;
      background-color: ${colors.primary};
      border: 1px solid ${colors.white};
      border-radius: 20px;

      position: fixed;
      bottom: 101px;
      left: 40%;
      width: 120px;
      height: 30px;
      text-align: center;
      color: ${colors.gray10};
      font-size: 14px;
    }
  `,
  FolderButtons: styled.div`
    flex-wrap: wrap;
    display: flex;
    gap: 8px;
  `,

  FolderInfoContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  FolderName: styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.2px;
  `,

  Icons: styled.div`
    display: flex;
    gap: 12px;
  `,

  StyledIcon: styled.div`
    ${flexCenter};
    gap: 5px;
    color: ${colors.gray60};
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    ${cursorPointer}
  `,
};
