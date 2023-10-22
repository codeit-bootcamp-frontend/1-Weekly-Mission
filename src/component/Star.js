import starICON from "../assets/img/icon-star-default.svg";
import chosenStarICON from "../assets/img/icon-star-selected.svg";
import "../assets/css/Star.css";

function Star({ isStared, onClick }) {
  const handleStarClick = (e) => {
    onClick(e);
  };

  return (
    <img
      onClick={handleStarClick}
      className="star"
      src={isStared ? chosenStarICON : starICON}
      alt="즐겨찾기 버튼"
    />
  );
}

export default Star;
