import classNames from "classnames";
import styles from "./ImageWrapper.module.scss";
type ImageWrapperProps = {
  children: React.ReactNode;
  className: string;
};

export const ImageWrapper = ({ children, className }: ImageWrapperProps) => {
  const wrapperClasses = classNames(className, styles.image);
  return <div className={wrapperClasses}>{children}</div>;
};
