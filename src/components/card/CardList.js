import { Link } from "react-router-dom";

import * as style from "./CardListStyle";
import CardItem from "./CardItem";

export default function CardList({ links }) {
  return (
    <style.Cards>
      {links?.map((link) => (
        <Link to={link.url} key={link.id} target="_blank">
          <CardItem link={link} />
        </Link>
      ))}
    </style.Cards>
  );
}
