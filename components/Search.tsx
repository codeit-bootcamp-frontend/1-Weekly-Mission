import Image from "next/image";
import searchImg from "@/public/img/svg/Search.svg";
import closeIcon from "@/public/img/svg/close.svg";
import styles from "./search.module.css";

interface SearchType {
  setSearchResult: React.Dispatch<React.SetStateAction<string>>;
  searchResult?: string;
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
      <div className={styles.sectionTitleSecond}>
        <div className={styles.searchInnerBox}>
          <Image
            className={styles.searchInnerBoxImg}
            width={16}
            height={16}
            src={searchImg}
            alt="검색이미지"
          />
          <input
            className={styles.searchInnerBoxInput}
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
      <div className={styles.searchResult}>
        {searchResult ? (
          <>
            <h2 className={styles.searchResultH2}>{searchResult}</h2>으로 검색한
            결과입니다.
          </>
        ) : null}
      </div>
    </>
  );
};

export default Search;
