import Card from "./Card";
import "../../style/style.css";
import "./CardList.css";

function CardList({ links }) {
  if (!links) {
    return <div>No links available.</div>;
  }
  return (
    <div className="CardList">
      {links.map((link, index) => (
        <Card key={index} link={link} />
      ))}
    </div>
  );
}

export default CardList;
