import starIcon from "../assets/image/icon-star.svg";
import threeDotsIcon from "../assets/image/kebab.svg";
import "../pages/SharedPage/sharedPage.css";

const CARD_DESC_DEFAULT_TEXT =
  "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nuncconsequat. Tldkd";
const CREATED_DATE_DEFAULT_TEXT = "2023. 3. 15";
const CREATED_TIME_PASSED_DEFAULT_TEXT = "0 minutes ago";

function CardContent(cardImg) {
  return (
    <a className="link-img" href="#">
      <div className="card">
        <div className="div-img">
          <img className="cardImg" src={cardImg} alt="card section" />
        </div>
        <div className="div-text">
          <div className="text">
            <h5 className="createdTimePassed">
              {CREATED_TIME_PASSED_DEFAULT_TEXT}
            </h5>
            <img src={threeDotsIcon} alt="menu icon" />
          </div>
          <p className="cardDesc">{CARD_DESC_DEFAULT_TEXT}</p>
          <h4 className="createdDate">{CREATED_DATE_DEFAULT_TEXT}</h4>
        </div>
      </div>
    </a>
  );
}

export default CardContent;
