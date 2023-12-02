import { useState, useEffect } from "react";
import { SelectedFolderContentsInfo, SharedLinkInfo } from "../types";

interface Props {
  folderCards: SharedLinkInfo[] | SelectedFolderContentsInfo[];
  searchKeyword: string;
}

const useFilteredCards = (folderCards: Props["folderCards"], searchKeyword: Props["searchKeyword"]) => {
  const [filteredCards, setFilteredCards] = useState<Props["folderCards"]>([]);

  useEffect(() => {
    if (folderCards && folderCards.length > 0 && searchKeyword !== "") {
      let updatedCards: Props["folderCards"] = [];

      if ("created_at" in folderCards[0]) {
        updatedCards = (folderCards as SelectedFolderContentsInfo[]).filter(
          (folderCard) =>
            folderCard.description?.includes(searchKeyword) ||
            folderCard.title?.includes(searchKeyword) ||
            folderCard.url?.includes(searchKeyword)
        );
      } else if ("createdAt" in folderCards[0]) {
        updatedCards = (folderCards as SharedLinkInfo[]).filter(
          (folderCard) =>
            folderCard.description?.includes(searchKeyword) ||
            folderCard.title?.includes(searchKeyword) ||
            folderCard.url?.includes(searchKeyword)
        );
      }

      setFilteredCards(updatedCards);
    } else {
      setFilteredCards(folderCards);
    }
  }, [folderCards, searchKeyword]);

  return filteredCards;
};

export default useFilteredCards;
