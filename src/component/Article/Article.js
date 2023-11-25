import { useState } from "react";
import { Search, CardContainer, FolderArticle } from "component";
import { ThemeProvider } from "styled-components";
import theme from "css/display.js";
import * as S from "./Article.style.js";

export default function Article({ items, visible, folders }) {
  const [checkItem, setCheckItem] = useState([]);
  console.log(checkItem);

  const handleKeyDown = (checkItems) => {
    setCheckItem(checkItems);
  }

  return (
    <ThemeProvider theme={theme}>
      <S.ArticleContainer>
        <S.ArticleSection folder={folders}>
          <Search items={items} handleKeyDown={handleKeyDown}/>
          {!folders && <CardContainer items={items} />}
          {folders && (
            <FolderArticle visible={visible} items={items} folders={folders} />
          )}
        </S.ArticleSection>
      </S.ArticleContainer>
    </ThemeProvider>
  );
}
