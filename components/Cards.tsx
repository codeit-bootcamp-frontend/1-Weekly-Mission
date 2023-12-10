import CardItem from "./CardItem";
import { Links } from "../dataType/dataType";
import styles from "./cards.module.css";
import Link from "next/link";

interface CardsType {
  linkCardsData: { data: Links[] } | null;
  prevKey?: number | null;
  handleCebabClick?: (
    event: React.MouseEvent<HTMLImageElement>,
    itemId: number
  ) => void;
  handleListClick?: (
    event: React.MouseEvent<HTMLLIElement>,
    title: string,
    btn: string,
    item?: string
  ) => void;
  iscebabClick?: boolean;
  searchResult: string;
}

const Cards = ({
  linkCardsData,
  prevKey,
  handleCebabClick,
  handleListClick,
  iscebabClick,
  searchResult,
}: CardsType) => {
  if (!linkCardsData) return;

  const { data: linksData } = linkCardsData;

  const cardProps = {
    prevKey,
    handleCebabClick,
    handleListClick,
    iscebabClick,
  };

  const newLinkData = linksData.filter((link) => {
    if (searchResult.length > 0) {
      const searchResultToLower = searchResult?.toLowerCase();
      const urlToLower = link.url ? link.url?.toLowerCase() : "";
      const titleToLower = link.title ? link.title?.toLowerCase() : "";
      const desToLower = link.description
        ? link.description?.toLowerCase()
        : "";
      if (
        urlToLower.indexOf(searchResultToLower) > -1 ||
        titleToLower.indexOf(searchResultToLower) > -1 ||
        desToLower.indexOf(searchResultToLower) > -1
      ) {
        return linksData;
      }
    } else {
      return linksData;
    }
  });

  return (
    <div className={styles.sectionTitleThird}>
      <div className={styles.sectionTitleThirdInner}>
        {newLinkData?.map((item) => (
          <Link
            className={styles.sectionTitleThirdInnerA}
            key={item.id}
            href={`${item.url}`}
            target="_blank"
          >
            <CardItem item={item} {...cardProps} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
