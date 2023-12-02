import { ImageWrapper } from "@/sharing/ui-image-wrapper";
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
      <ImageWrapper className={cx("image")}>
        <Image fill src={profile.imageSource} alt="프로필 이미지" />
      </ImageWrapper>
      <span className={cx("email")}>{profile.email}</span>
    </div>
  );
};
