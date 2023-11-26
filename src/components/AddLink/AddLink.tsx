import { ReactNode } from "react";
import styles from "./AddLink.module.css";

interface Props {
  children?: ReactNode;
}

const AddLink = ({ children }: Props) => {
  return <div className={styles.addLink}>{children}</div>;
};

export default AddLink;
