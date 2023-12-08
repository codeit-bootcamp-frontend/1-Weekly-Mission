import { getAllFolder, getFolderLinks } from "pages/api/api";
import { useEffect, useState } from "react";
import isEmpty from "src/utils/isEmpty";
import { filterCardsSearch } from "src/utils/searchFilterCards";

type Return = {
  cards: Card[];
  searchResult: string;
  setSearchResult: any;
};

export const useFolderAndCardInfo = (initFolderId: string) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [searchResult, setSearchResult] = useState("");

  const folderAndCardInfo = async (folderId: string) => {
    const introResult = isEmpty(folderId)
      ? await getAllFolder()
      : await getFolderLinks(folderId as string);
    if (!introResult) return;

    if (searchResult) {
      const filterCard = filterCardsSearch(introResult, searchResult);
      setCards(filterCard);
    }

    if (!searchResult) {
      setCards(introResult);
    }
  };

  useEffect(() => {
    return () => setCards([]);
  }, [initFolderId]);

  useEffect(() => {
    folderAndCardInfo(initFolderId);
  }, [initFolderId]);

  useEffect(() => {
    folderAndCardInfo(initFolderId);
  }, [searchResult]);

  return { cards, searchResult, setSearchResult };
};
