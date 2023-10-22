import starImg from "../image/star.svg";

const CardImage = ({ className = "img_loaded", src }) => {
  return (
    <div className={"image_area"}>
      <img className={className} src={src} alt="이미지" />
      <img className="toggle_fav" src={starImg} alt="별" />
    </div>
  );
};

export default CardImage;
