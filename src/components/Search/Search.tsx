import { ReactNode } from "react";

import styles from "./Search.module.css";

interface Props {
  children: ReactNode;
}

const Search = ({ children }: Props) => {
  return <div className={styles.search}>{children}</div>;
};

export default Search;
