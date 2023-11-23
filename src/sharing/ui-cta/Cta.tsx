import React from "react";
import styles from "./Cta.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type CtaProps = {
  children: React.ReactNode;
};

export const Cta: React.FC<CtaProps> = ({ children }) => {
  return <div className={cx("container")}>{children}</div>;
};
