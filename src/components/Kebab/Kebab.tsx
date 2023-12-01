import { ReactNode } from "react";
import style from "./Kebab.module.css";

function Kebab({ children }: { children: ReactNode }) {
  return <ul className={style.root}>{children}</ul>;
}
export default Kebab;
