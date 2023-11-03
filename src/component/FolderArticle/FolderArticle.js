import { ThemeProvider } from "styled-components";
import theme from "../../css/display.js";
import { CardMenuBar } from "../TitleButton/CardMenuBar.js";
import { EmptyData } from "../Empty/EmptyData.js";
import { CardContainer } from "../Card/CardContainer.js";
import * as S from './FolderArticle.style.js'

export function FolderArticle({items, visible, folders}) {
  
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <CardMenuBar folders={folders} items={items} />
        {visible && <CardContainer items={items}/>}
        {!visible && <EmptyData />}
      </S.Container>  
    </ThemeProvider>
  );
}
