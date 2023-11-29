import { MouseEvent } from "react";
import starICON from "../assets/img/icon-star-default.svg";
import chosenStarICON from "../assets/img/icon-star-selected.svg";
import * as Styled from "../style/Star";

function Star({ isStared, onClick }) {
  const handleStarClick = (e: MouseEvent) => {
    onClick(e);
  };

  return (
    <Styled.StarImg
      onClick={handleStarClick}
      className="star"
      src={isStared ? chosenStarICON : starICON}
      alt="즐겨찾기 버튼"
    />
  );
}

export default Star;
