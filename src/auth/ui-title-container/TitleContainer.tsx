import styles from "./TitleContainer.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

type TitleContainerProps = {
  memberCheckText: string;
  linkText: string;
  destination: string;
};

const cx = classNames.bind(styles);

export const TitleContainer = ({
  memberCheckText,
  linkText,
  destination,
}: TitleContainerProps) => {
  return (
    <div className={cx("container")}>
      <Link href="/">
        <Image
          className={cx("logo")}
          src={"/images/linkbrary.svg"}
          alt="Linkbrary 서비스 로고"
          width="210"
          height="30"
        />
      </Link>
      <div className={cx("link_container")}>
        <p>{memberCheckText}</p>
        <Link href={destination} className={cx("link_strong")}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};
