import "../styles/hero.css";
import defaultProfileImgSrc from "../assets/images/profileImg.png";

function FolderInfo({ children, folder = {} }) {
  return (
    <>
      <img
        className="hero__profile-img"
        src={folder.owner?.profileImageSource}
        alt="유저 프로필 이미지"
      />
      <div className="hero__ownername">@{folder.owner?.name}</div>
      <div className="hero__foldername">{folder?.name}</div>
    </>
  );
}

export default FolderInfo;
