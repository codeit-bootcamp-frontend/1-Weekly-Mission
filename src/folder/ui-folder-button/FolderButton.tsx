import styles from "./FolderButton.module.scss";
import classNames from "classnames/bind";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

const cx = classNames.bind(styles);

type FolderButtonProps = {
  text: string;
  href: Url;
  isSelected?: boolean;
};

export const FolderButton = ({ text, href, isSelected = false }: FolderButtonProps) => {
  return (
    <Link className={cx("container", { selected: isSelected })} href={href}>
      <span>{text}</span>
    </Link>
  );
};
