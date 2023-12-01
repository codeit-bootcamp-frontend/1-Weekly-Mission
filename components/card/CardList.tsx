import Link from "next/link";

import styles from "./Card.module.css";
import CardItem from "./CardItem";
import { LinkData, SampleLinkData } from "@/types/folder";

interface CardListProps {
  links: LinkData[] | SampleLinkData[];
}

export default function CardList({ links }: CardListProps) {
  return (
    <ul className={styles.cards}>
      {links?.map((link) => (
        <Link href={link.url} key={link.id} target="_blank">
          <CardItem link={link} />
        </Link>
      ))}
    </ul>
  );
}
