import styles from "./OauthBadge.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type OauthBadgeProps = {
  href: string;
  imageSource: string;
  alt: string;
};

export const OauthBadge = ({ href, imageSource, alt }: OauthBadgeProps) => {
  return (
    <a href={href} rel="noopener noreferrer">
      <img className={cx("badge")} src={imageSource} alt={alt} />
    </a>
  );
};
