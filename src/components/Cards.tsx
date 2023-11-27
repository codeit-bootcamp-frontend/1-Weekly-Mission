import React from "react";
import CardItem from "./CardItem";
import { Links } from "../dataType/dataType";

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
    item?: string | null
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
    /* folder페이지는 props가 있고 shared페이지에는 없음 타입지정 any */
    prevKey,
    handleCebabClick,
    handleListClick,
    iscebabClick,
  };
  if (!linksData) return;

  const newLinkData = linksData.filter((link) => {
    console.log(link);
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
    <div className="section-title section-title-third">
      <div className="section-title-third-inner">
        {newLinkData?.map((item) => (
          <a key={item.id} href={item.url} target="_blank">
            <CardItem item={item} {...cardProps} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cards;
