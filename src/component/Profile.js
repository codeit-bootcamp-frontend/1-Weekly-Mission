import { LoginButton } from "./Button";
import style from "../css/Profile.module.css";
function Profile({ folderInfo }) {
  if (folderInfo) {
    return (
      <div className={style.root}>
        <img
          className={style.img}
          src={folderInfo.owner.profileImageSource}
          alt="프로필 이미지"
        />
        <div className={style.userName}>{folderInfo.owner.name}</div>
        <div className={style.folderName}>{folderInfo.name}</div>
      </div>
    );
  }
  return (
    <div className="profile">
      <LoginButton />
    </div>
  );
}

export default Profile;
