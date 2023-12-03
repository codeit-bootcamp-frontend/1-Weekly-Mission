import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

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
      <div className={cx("image")}>
        <Image src={profile.imageSource} alt="프로필 이미지" />
      </div>
      <span className={cx("email")}>{profile.email}</span>
    </div>
  );
};
