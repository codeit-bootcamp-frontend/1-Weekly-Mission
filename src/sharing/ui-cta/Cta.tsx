import { ReactNode } from "react";
import styles from "./Cta.module.scss";
import classNames from "classnames/bind";

interface CtaProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const Cta = ({ children }: CtaProps) => {
  return <div className={cx("container")}>{children}</div>;
};
