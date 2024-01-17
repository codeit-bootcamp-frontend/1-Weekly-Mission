import { OauthBadge } from "../ui-oauth-badge";
import styles from "./Oauth.module.scss";
import classNames from "classnames/bind";
import { OAUTH_BADGES } from "./constant";

const cx = classNames.bind(styles);

type OauthProps = {
  description: string;
};

export const Oauth = ({ description }: OauthProps) => {
  return (
    <div className={cx("container")}>
      <p className={cx("description")}>{description}</p>
      <div className={cx("links")}>
        {OAUTH_BADGES.map((badgeData) => (
          <OauthBadge {...badgeData} key={badgeData.alt} />
        ))}
      </div>
    </div>
  );
};
