import CardItem from "./CardItem";
import style from "./CardList.module.css";

export default function CardList({ links }) {
  return (
    <ul className={style.cards}>
      {links?.map((link) => (
        <li key={link.id}>
          <CardItem link={link} />
        </li>
      ))}
    </ul>
  );
}
