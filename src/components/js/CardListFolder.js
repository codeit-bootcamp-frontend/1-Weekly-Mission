import styled from "styled-components";
import "../css/Card.css";
import noImage from "../../Assets/noImage.png";
import starIcon from "../../Assets/star.svg";
import kebabIcon from "../../Assets/kebab.svg";
import KebabButtonMenu from "./KebabButtonMenu";
import { RowContainer } from "./Container";
import getTimeDiff from "../../utils/utilTimeDiff";

const BookmarkButton = styled.img`
  width: 34px;
  height: 34px;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
`;

const KebabButton = styled.img`
  width: 21px;
  height: 17px;
`;

/* 각 카드 컴포넌트 */
function CardItem({ item, key }) {
  /* 이미지 스타일 함수 */
  const imgStyle = {
    backgroundImage: `url('${item.image_source}')`,
  };

  const nowDate = getTimeDiff(new Date(item.created_at));
  const createdDate = item.created_at.split("T")[0].split("-").join(".");

  return (
    <a href={item.url}>
      <div key={key} className="card">
        <BookmarkButton src={starIcon} alt="bookmark_icon" />
        <KebabButtonMenu />
        <div className="card-img-wrap">
          {!item.image_source ? (
            <img className="logoImg" src={noImage} alt={noImage} />
          ) : (
            <div className="card-img" style={imgStyle}></div>
          )}
        </div>
        <div className="card-information">
          <RowContainer>
            <div className="time">{nowDate}</div>
            <KebabButton src={kebabIcon} alt="kebabButton" />
          </RowContainer>
          <p>{item.description}</p>
          <div className="day">{createdDate}</div>
        </div>
      </div>
    </a>
  );
}

/* 카드리스트들 컴포넌트 */
function CardList({ folderLinks }) {
  const links = Array.isArray(folderLinks) ? folderLinks : [];
  return (
    <div className="section-title section-title-third">
      <div className="section-title-third-inner">
        {links.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
export default CardList;
