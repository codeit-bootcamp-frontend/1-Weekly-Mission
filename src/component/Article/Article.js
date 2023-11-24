import { ThemeProvider } from "styled-components";
import theme from "css/display.js";
import * as S from "./Article.style.js";
import { Search, CardContainer, FolderArticle } from "component";

export default function Article({ items, visible, folders }) {
  return (
    <ThemeProvider theme={theme}>
      <S.ArticleContainer>
        <S.ArticleSection folder={folders}>
          <Search />
          {!folders && <CardContainer items={items} />}
          {folders && (
            <FolderArticle visible={visible} items={items} folders={folders} />
          )}
        </S.ArticleSection>
      </S.ArticleContainer>
    </ThemeProvider>
  );
}
