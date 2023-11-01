import { formatDate, calculateTimeAgo } from "../../utils/dateUtil";
import defaultlinkImg from "../../assets/images/defaultCardImg.png";
import "./LinkItem.css";

function LinkItem({ item }) {
  const { url, image_source, created_at, description } = item;
  const imgSrc = image_source ? image_source : defaultlinkImg;

  const redirectToLink = (url) => {};

  return (
    <div className="linkContainer" onClick={() => redirectToLink(url)}>
      <img className="linkImg" src={imgSrc} alt="카드폼 이미지" />
      <div className="linkContent">
        <p id="createTime">{calculateTimeAgo(created_at)}</p>
        <p id="linkDescription">{description}</p>
        <p id="linkDate">{formatDate(created_at)}</p>
      </div>
    </div>
  );
}

export default LinkItem;
