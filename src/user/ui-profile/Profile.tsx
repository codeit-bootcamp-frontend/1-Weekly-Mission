import styles from "./Profile.module.scss";
import classNames from "classnames/bind";

interface ProfileProps {
  profile: {
    email: string;
    profileImageSource: string;
  };
}

const cx = classNames.bind(styles);

export const Profile = ({ profile }: ProfileProps) => {
  return (
    <div className={cx("container")}>
      <img className={cx("image")} src={profile.profileImageSource} alt="프로필 이미지" />
      <span className={cx("email")}>{profile.email}</span>
    </div>
  );
};
