import "../styles/hero.css";
import defaultProfileImgSrc from "../assets/images/profileImg.png";

function Hero({
  ownername = "Default Owner Name",
  profileImgSrc = defaultProfileImgSrc,
  foldername = "Default Folder Name",
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
