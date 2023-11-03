import "../styles/Main.css";
import "../styles/reset.css";
import CardCollection from "./CardCollection";

function MainSpace({ items, openMAF }) {
  return (
    <main>
      <section>
        <CardCollection cardItems={items} openMAF={openMAF} />
      </section>
    </main>
  );
}

export default MainSpace;
