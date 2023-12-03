import Image from "next/image";
import React from "react";
import searchImg from "@/public/img/svg/Search.svg";
import closeIcon from "@/public/img/svg/close.svg";

interface SearchType {
  setSearchResult: React.Dispatch<React.SetStateAction<string>>;
  searchResult: string | undefined;
}

const Search = ({ setSearchResult, searchResult }: SearchType) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchResult(e.target.value);
  };

  const onClick = () => {
    setSearchResult("");
  };
  return (
    <>
      <div className="section-title-second">
        <div className="search-inner-box">
          <Image width={16} height={16} src={searchImg} alt="검색이미지" />
          <input
            name="search"
            placeholder="링크를 검색해보세요"
            onChange={onChange}
            value={searchResult}
          />
          {searchResult ? (
            <Image
              width={23}
              height={23}
              src={closeIcon}
              alt="닫기아이콘"
              onClick={onClick}
            />
          ) : null}
        </div>
      </div>
      <div className="search-result">
        {searchResult ? (
          <>
            <h2>{searchResult}</h2>으로 검색한 결과입니다.
          </>
        ) : null}
      </div>
    </>
  );
};

export default Search;
