import * as style from "./CardListStyle";
import CardItem from "./CardItem";

export default function CardList({ links }) {
  return (
    <style.Cards>
      {links?.map((link) => (
        <li key={link.id}>
          <CardItem link={link} />
        </li>
      ))}
    </style.Cards>
  );
}
