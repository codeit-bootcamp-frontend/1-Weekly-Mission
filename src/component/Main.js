import Search from "./Search";
import Cards from "./Cards";
import style from "../css/Main.module.css";
function Main() {
  return (
    <div className={style.root}>
      <Search />
      <Cards />
    </div>
  );
}
export default Main;
