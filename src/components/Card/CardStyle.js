import styled from "styled-components";
import colors from "../../style/colors";

export const CardContainer = styled.a`
  width: 340px;
  height: 350px;
  flex-shrink: 0;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  text-decoration: none;
  display: block;
  position: relative;

  &:hover {
    border: 2px solid ${colors.primary};

    .Card-image {
      transform: scale(1.3);
    }
  }
`;

export const CardImageContainer = styled.div`
  overflow: hidden;
  background: #dddfff;
  border-radius: 15px 15px 0 0;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  .star-icon {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;
// object-fit: cover;
export const CardImage = styled.img`
  border-radius: ${({ className }) =>
    className === "no-img-logo" ? "0" : "15px 15px 0 0"};
  width: ${({ className }) => (className === "no-img-logo" ? "100px" : "100%")};
  height: ${({ className }) =>
    className === "no-img-logo" ? "50px" : "20rem"};
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;

  .kebab-button {
    position: absolute;
    bottom: 120px;
    right: 15px;
  }
`;

export const CardContentAgo = styled.div`
  color: #666;
  font-size: 13px;
  font-weight: 400;
`;

export const CardContent = styled.div`
  overflow: hidden;
  color: #000;
  width: 300px;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const CardContentAt = styled.div`
  color: #333;
  font-size: 14px;
  font-weight: 400;
`;

export const OptionContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
  right: 10px;
  top: 220px;
  background-color: ${colors.grayLight};
  
  color: ${colors.gray100};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  option {
    padding: 7px 8px;
    &:hover {
      color: ${colors.primary};
      background-color: ${colors.gray10};
      
    }
  }
`;
