import styled, { css } from 'styled-components'
import colors from '../../style/colors'
import { cursorPointer, flexCenter } from '../../style/common'
import { device } from '../../style/device'

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

    ${({ 'data-onselect': isSelected }) =>
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
    gap : 20px;
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
    white-space: nowrap;

    @media ${device.mobile} {
      display: none;
    }
  `,
  FolderButtons: styled.div`
    flex-wrap: wrap;
    display: flex;
    gap: 8px;

  `,
}
