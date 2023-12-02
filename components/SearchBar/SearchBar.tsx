import { FormEvent, SetStateAction, useState } from "react";
import SearchIMG from "@/public/Search.svg";
import { LinksData } from "@/lib/types/data";
import * as Styled from "./StyledSearchBar";

interface Links {
  data: LinksData[];
}

type setLinksData = (value: SetStateAction<Links>) => void;

interface Props {
  linksData: LinksData[];
  setLinksData: setLinksData;
  originalLinksData: LinksData[];
}

const SearchBar = ({ linksData, setLinksData, originalLinksData }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    const filteredLinks = linksData.filter((item) => {
      if (
        item["description"]?.includes(inputValue) ||
        item["url"]?.includes(inputValue) ||
        item["title"]?.includes(inputValue)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setLinksData((prevData) => ({
      ...prevData,
      data: filteredLinks,
    }));
  };

  const handleCancelClick = () => {
    setInputValue("");
    setLinksData((prevData) => ({
      ...prevData,
      data: originalLinksData,
    }));
  };

  return (
    <Styled.Form onSubmit={handleFormSubmit}>
      <label htmlFor="search">
        <SearchIMG alt="검색 돋보기 이미지" />
      </label>
      <Styled.Input
        id="search"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="링크를 검색해 보세요."
      />
      <Styled.CloseBtn onClick={handleCancelClick} />
    </Styled.Form>
  );
};

export default SearchBar;
