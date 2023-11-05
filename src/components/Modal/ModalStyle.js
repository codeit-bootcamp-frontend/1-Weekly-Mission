import styled from "styled-components";
import { cursorPointer, flexCenter } from "../../style/common";
import colors from "../../style/colors";

export const S = {
  ModalWrapper: styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  `,
  ModalContainer: styled.div`
    position: relative;
    ${flexCenter};
    padding: 32px 40px;
    width: 360px;

    flex-direction: column;
    justify-content: center;
    gap: 25px;
    border-radius: 15px;
    border: 1px solid ${colors.gray20};
    background: ${colors.white};
  `,
  ModalTitle: styled.div`
    color: ${colors.gray100};
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  ModalInput: styled.input`
    border-radius: 8px;
    border: 1px solid ${colors.gray20};
    background: ${colors.white};
    display: flex;
    width: 280px;
    padding: 18px 15px;
    justify-content: center;
    align-items: center;
  `,
  ModalButton: styled.button`
    display: flex;
    width: 280px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    ${cursorPointer}
    background: ${({ red }) => (red ? colors.red : colors.purpleBlueToSkyBlue)};
    color: ${colors.white};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: none;
  `,
  ModalDetail: styled.div`
    color: ${colors.gray60};
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  `,
  ModalCancelIcon: styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 18px;
    top: 20px;
    ${cursorPointer}
  `,
  IconsWrapper: styled.div`
    display: flex;
    gap: 32px;
    margin-top: 10px;
  `,
  ShareIconStyled: styled.div`
    ${cursorPointer}
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    width: 48px;
    height: 67px;
    img {
      display: flex;
      padding: 12px;
      justify-content: center;
      align-items: center;
    }
    span {
      color: ${colors.gray100};
      text-align: center;
      font-family: Inter;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 15px;
      white-space: nowrap;
    }
  `,

  FolderInfoContainer: styled.div`
    width: 100%;

    flex-direction: column;
    align-items: start;
  `,
  StyledFolderInfo: styled.div`
    width: 100%;
    padding: 8px;

    display: flex;
    align-items: center;
    border-radius: 8px;

    ${cursorPointer}
    &:hover,
    &:focus {
      background-color: ${colors.background};
      .name {
        color: ${colors.primary};
      }
    }

 
    .name {
      color: ${colors.gray100};

      /* Linkbrary/body1-regular */
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }

    .count {
      color: ${colors.gray60};

      /* Linkbrary/body2-regular */
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: center;
    }
  `,
};

export default S;
