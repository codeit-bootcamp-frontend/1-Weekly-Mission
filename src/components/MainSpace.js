import "../styles/Main.css";
import "../styles/reset.css";
import CardCollection from "./CardCollection";

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
