import "./CardContainer.css";
import NoCardDataImg from "../../assets/image/img-card--noimg.png";
import StarIcon from "../../assets/image/icon-star.svg";
import ThreeDotsIcon from "../../assets/image/kebab.svg";
import getTimeAgoText from "../../utils/getTimeAgoText";
import AddFolderOptionBtn from "../Buttons/AddFolderOptionBtn";
import styled from "styled-components";
import { useState } from "react";
import { ICardData } from "./types/Card.types";

const OptionBtnContainer = styled.div`
  position: absolute;
  right: 149px;
  bottom: 37px;
  z-index: 3;
`;

interface Props {
  cardData: ICardData;
}

function Card({ cardData }: Props) {
  const [isFloatingBtnActive, setFloatingBtnActivation] = useState(false);
  const { created_at, url, description, image_source }: ICardData = cardData;

  const timeAgoText = getTimeAgoText(created_at);
  const formulatedCreatedDate = created_at.slice(0, 10).replace(/-/gi, ". ");
  const handleAddFolderBtnClick = () => {
    setFloatingBtnActivation((prevStatus) => !prevStatus);
  };

  return (
    <div className="card">
      <a className="link-img" href={url ? url : "#"}>
        <div className="div-img">
          <img
            className="cardImg"
            src={image_source ?? NoCardDataImg}
            alt="card"
          />
        </div>
        <img className="img-star" src={StarIcon} alt="star icon" />
      </a>
      <div className="div-text">
        <div className="text">
          <h5 className="createdTimePassed">{timeAgoText + " ago"}</h5>
          <img
            onClick={() => handleAddFolderBtnClick()}
            src={ThreeDotsIcon}
            alt="three dots icon"
          />
        </div>
        <p className="cardDesc">{description}</p>
        <h4 className="createdDate">{formulatedCreatedDate}</h4>
        <OptionBtnContainer>
          <AddFolderOptionBtn
            isFloatingBtnActive={isFloatingBtnActive}
            options={["삭제하기", "폴더에 추가"]}
          ></AddFolderOptionBtn>
        </OptionBtnContainer>
      </div>
    </div>
  );
}

export default Card;
