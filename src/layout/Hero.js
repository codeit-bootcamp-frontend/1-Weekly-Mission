import "../styles/hero.css";
import defaultProfileImgSrc from "../assets/images/profileImg.png";

function Hero({
  ownername = "코드잇",
  profileImgSrc = defaultProfileImgSrc,
  foldername = "⭐️ 즐겨찾기",
}) {
  return (
    <div className="hero first-layout">
      <div className="hero__container">
        <img
          className="hero__profile-img"
          src={profileImgSrc}
          alt="유저 프로필 이미지"
        />
        <div className="hero__ownername">@{ownername}</div>
        <div className="hero__foldername">{foldername}</div>
      </div>
    </div>
  );
}

export default Hero;
