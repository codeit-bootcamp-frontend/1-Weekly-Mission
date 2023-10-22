import CardItem from "./CardItem";
import "./CardList.css";

export default function CardList({ links }) {
  return (
    <ul className="cards">
      {links?.map((link) => (
        <li key={link.id}>
          <CardItem link={link} />
        </li>
      ))}
    </ul>
  );
}
