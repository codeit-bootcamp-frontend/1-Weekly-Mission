import { Link } from "react-router-dom";

import * as S from "./CardListStyle";
import CardItem from "./CardItem";
import { LinkData, SampleLinkData } from "types/folder";

interface CardListProps {
  links: LinkData[] | SampleLinkData[];
}

export default function CardList({ links }: CardListProps) {
  return (
    <S.Cards>
      {links?.map((link) => (
        <Link to={link.url} key={link.id} target="_blank">
          <CardItem link={link} />
        </Link>
      ))}
    </S.Cards>
  );
}
