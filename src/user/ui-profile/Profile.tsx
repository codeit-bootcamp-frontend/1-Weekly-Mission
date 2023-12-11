import styles from "./Profile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ProfileProps = {
  profile: {
    imageSource: string;
    email: string;
  };
};

export const Profile = ({ profile }: ProfileProps) => {
  return (
    <div className={cx("container")}>
      <img className={cx("image")} src={profile.imageSource} alt="프로필 이미지" />
      <span className={cx("email")}>{profile.email}</span>
    </div>
  );
};
