import starImg from "../image/star.svg";

const CardImage = ({ src }) => {
  return (
    <>
      <img className="card_img" src={src} alt="이미지" />
      <img className="toggle_fav" src={starImg} alt="별" />
    </>
  );
};

export default CardImage;
