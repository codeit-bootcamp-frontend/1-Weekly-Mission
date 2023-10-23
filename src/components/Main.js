import styles from "../styles/main.css";
import Cards from "./Cards.js";
import Search from "./Search.js";
import Profile from "./Profile.js";
import { getUserData, getFolders } from "../api/api.js";

function Main() {
  return (
    <div className={styles.root}>
      <Profile />
      <Search />
      {/* <Cards /> */}
    </div>
  );
}

export default Main;
