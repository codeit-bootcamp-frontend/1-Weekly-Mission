import { ThemeProvider } from "styled-components";
import theme from "css/display.js";
import searchImg from "assets/Search.svg";
import * as S from "./Search.style.js";
import { useCallback, useState } from "react";
import closeImg from 'assets/_close.png';

export default function Search({items, handleKeyDown}) {
  const [value, setValue] = useState('');

  const handleInputChange = useCallback((e) => {
    const {name} = e.target;
    
    if(name === "search") setValue(e.target.value);
    else if(name === "close") setValue('');
  },[items,value]);

  const handleInputDown = useCallback((e) => {
      const checkItems = items.filter((item) => {
        const { description, title, url } = item;
        return (
          description.includes(value) ||
          title.includes(value) ||
          url.includes(value)
        )
      });
      if (e.key === 'Enter') handleKeyDown(checkItems);
      else handleKeyDown(items);
    },[value, items]);
    
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <img src={searchImg} alt="검색아이콘" />
        <input
          name="search"
          placeholder="링크를 검색해 보세요."
          value={value}
          onChange={handleInputChange}
          autoComplete="off"
          onKeyDown={handleInputDown}
        />
        <img name="close" src={closeImg} alt="닫기버튼" onClick={handleInputChange}/>
      </S.Container>
    </ThemeProvider>
  );
}
