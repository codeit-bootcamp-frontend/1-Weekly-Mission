import React from "react";
import CardItem from "./CardItem";

interface CardsType {
  linkCardsData: any;
  prevKey?: number | null;
  handleCebabClick?: (
    event: React.MouseEvent<HTMLImageElement>,
    itemId: number
  ) => void;
  handleListClick?: (
    event: any,
    title: string,
    btn: string,
    item?: string | null
  ) => void;
  iscebabClick?: boolean;
}

const Cards = ({
  linkCardsData,
  prevKey,
  handleCebabClick,
  handleListClick,
  iscebabClick,
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

  return (
    <div className="section-title section-title-third">
      <div className="section-title-third-inner">
        {linksData?.map((item: any) => (
          <a key={item.id} href={item.url} target="_blank">
            <CardItem item={item} {...cardProps} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cards;
