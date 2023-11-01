import styled from "styled-components";

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;
`;

export const CardContainer = styled.div`
  width: 100%;
  max-height: 334px;
  border-radius: 15px;
  box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  position: relative;

  &:hover {
    background: var(--background);

    ${CardImg} {
      transform: scale(1.3);
    }
  }
`;

export const CardImgBox = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  height: 35%;
  padding: 15px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.2rem;
  gap: 5px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Kebab = styled.img`
  cursor: pointer;
`;

export const Description = styled.p`
  height: 2.4em;
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.2;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Star = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 999;
  cursor: pointer;
`;
