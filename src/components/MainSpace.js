import "../styles/Main.css";
import "../styles/reset.css";
import CardCollection from "./CardCollection";
import SearchIcon from "../images/Search.svg";

function MainSpace({ items }) {
  return (
    <main>
      <section>
        <CardCollection cardItems={items} />
      </section>
    </main>
  );
}

export default MainSpace;
