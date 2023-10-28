import styled from "styled-components";
import { device } from "../styles";

export const CardWrapper = styled.div`
  width: 34rem;
  height: 33.4rem;
  position: relative;
`;
export const CardContainer = styled.div`
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1;
  @media all and ${device.mobile} {
    width: 32.5rem;
    height: 32.7rem;
  }

  &:hover {
    border: 2px solid var(--linkbrary-primary-color, #6d6afe);

    .cardImage,
    .noImgLogo {
      transform: scale(1.3);
    }
  }
`;

export const CardImgContainer = styled.div`
  overflow: hidden;
  background: #dddfff;
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .starIcon {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
    @media all and ${device.mobile} {
      width: 3rem;
    }
  }

  .cardImage {
    object-fit: cover;
    width: 100%;
    height: 20rem;
  }

  .noImgLogo {
    width: 13.3rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 2rem;
  height: 10.5rem;
  gap: 1.2rem;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  .contentOptionContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .optionIcon {
      cursor: pointer;
    }

    .contentAgo {
      color: #666;
      font-size: 1.3rem;
      font-weight: 400;
    }
  }

  .content {
    overflow: hidden;
    color: #000;
    width: 300px;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  .contentAt {
    color: #333;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export const OptionMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  width: 10rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 23rem;
  right: -4.9rem;
  z-index: 10;

  .optionMenuItem {
    color: #333236;
    font-size: 1.4rem;
    font-weight: 400;
    background: #fff;
    box-sizing: border-box;
    width: 100%;
    padding: 0.7rem 1.2rem;
    text-align: center;
    &:hover {
      color: var(--primary);
      background: var(--gray10);
    }
  }
`;
