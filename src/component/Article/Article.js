import { ThemeProvider } from "styled-components";
import display from "../../css/display.js";
import * as S from "./Article.style.js";
import { Search } from "../Search/Search.js";
import { CardContainer } from "../Card/CardContainer.js";
import { FolderArticle } from "../FolderArticle/FolderArticle.js";

export function Article({ items }) {

  return (
    <ThemeProvider theme={display}>
      <S.ArticleContainer>
        <S.ArticleSection>
          <Search />
          {items && <CardContainer items={items}/> }
          {!items && <FolderArticle visible={visible} values={values} folders={folders} />}
        </S.ArticleSection>
      </S.ArticleContainer>
    </ThemeProvider>
  );
}
