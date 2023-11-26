import { ThemeProvider } from "styled-components";
import theme from "css/display.js";
import searchImg from "assets/Search.svg";
import * as S from "./Search.style.js";
import { useCallback} from "react";
import closeImg from "assets/_close.png";

export default function Search({ items, setCheckItem, onSearch, value }) {
  const handleInputChange = useCallback(
    (e) => {
      const lowerValue = (e.target.value).toLowerCase();
      onSearch(lowerValue);
      if (value) {
        const checkItems = items.filter((item) => {
          const { description, title, url } = item;
          return (
            description.includes(value) ||
            title.includes(value) ||
            url.includes(value)
          );
        });
        setCheckItem(checkItems);
      } else setCheckItem(items);
    },
    [items, value]
  );

  const handleCloseClick = () => {
    onSearch("");
    setCheckItem(items);
  };

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <img src={searchImg} alt="검색아이콘" />
        <input
          name="search"
          placeholder="링크를 검색해 보세요."
          autoComplete="off"
          value={value}
          onChange={handleInputChange}
        />
        <img
          name="close"
          src={closeImg}
          alt="닫기버튼"
          onClick={handleCloseClick}
        />
      </S.Container>
    </ThemeProvider>
  );
}
