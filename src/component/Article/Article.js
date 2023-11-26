import { useEffect, useState } from "react";
import { Search, CardContainer, FolderArticle } from "component";
import { ThemeProvider } from "styled-components";
import theme from "css/display.js";
import * as S from "./Article.style.js";

export default function Article({ items, folders }) {
  const [checkItem, setCheckItem] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("");
  console.log(checkItem)

  const handleSearch = (value) => {
    setValue(value)
  }

  useEffect(()=> {
    setCheckItem(items);
  },[items]);

  useEffect(() => {
    setIsVisible(checkItem.length !== 0);
  }, [checkItem]);

  return (
    <ThemeProvider theme={theme}>
      <S.ArticleContainer>
        <S.ArticleSection folder={folders}>
          <Search items={items} setCheckItem={setCheckItem} onSearch={handleSearch} value={value} />
          {value && <S.P><span>{value}</span>으로 검색한 결과입니다.</S.P>}
          {!folders && <CardContainer isVisible={isVisible} items={checkItem} />}
          {folders && (
            <FolderArticle isVisible={isVisible} items={checkItem} folders={folders} />
          )}
        </S.ArticleSection>
      </S.ArticleContainer>
    </ThemeProvider>
  );
}
