import { fetchGet } from "@/apis/api";
import { UserLinksItem } from "@/types/api";
import { useState } from "react";

interface useSearchbarProps {
  setShowCards: (value: UserLinksItem[]) => void;
  DEFAULT_USER_ID: number;
  initialUserLinks: UserLinksItem[];
}

/** 검색창에서 검색을 통한 카드 데이터를 보여주는 함수 */
const useSearchbar = ({
  // cards,
  initialUserLinks: cards,
  setShowCards,
  DEFAULT_USER_ID,
}: useSearchbarProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchbar = async (searchedText: string) => {
    setSearchText(searchedText);
    if (searchedText.length > 0) {
      const filteredCards = cards.filter(
        (link: { description: string; url: string; title: string }) => {
          return (
            link["description"]?.includes(searchedText) ||
            link["url"]?.includes(searchedText) ||
            link["title"]?.includes(searchedText)
          );
        }
      );

      setShowCards(filteredCards);
    } else {
      const query = `/api/users/${DEFAULT_USER_ID}/links`;
      const fetchedData = await fetchGet(query);
      setShowCards(fetchedData.data);
    }
  };

  return { handleSearchbar, searchText };
};

export default useSearchbar;
