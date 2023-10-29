import styled, { css } from "styled-components";
import colors from "../../../../style/colors";
import { flexCenter } from "../../../../style/common";

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
    
    ${({ "data-onselect": isSelected }) =>
      isSelected &&
      css`
        background-color: ${colors.primary};
        color: #fff;
      `}
  `,
  ButtonContainer: styled.div`
    display: flex;
    width: 1060px;
    justify-content: space-between;
    align-items: center;
  `,
  AddFolder: styled.div`
    color: #6d6afe;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
  FolderButtons: styled.div`
    display: flex;
    gap: 8px;
    ${flexCenter};
  `,
};
