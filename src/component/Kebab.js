import style from "./Kebab.module.css";
function Kebab({ children }) {
  return <ul className={style.root}>{children}</ul>;
}
export default Kebab;
