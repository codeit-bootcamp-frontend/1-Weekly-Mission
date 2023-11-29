import { CardMenuBar, EmptyData, CardContainer } from "component";
import { ThemeProvider } from "styled-components";
import theme from "css/display.js";
import * as S from './FolderArticle.style.js'
import { createContext } from "react";

export const FolderContext = createContext();

export default function FolderArticle({items, isVisible, folders}) {
  console.log(isVisible)
  return (
    <ThemeProvider theme={theme}>
      <FolderContext.Provider value={folders}>
        <S.Container>
          <CardMenuBar folders={folders} items={items} />
          {isVisible && <CardContainer items={items} active={folders} />}
          {!isVisible && <EmptyData />}
        </S.Container>  
      </FolderContext.Provider>
    </ThemeProvider>
  );
}