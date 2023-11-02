import { ThemeProvider } from "styled-components";
import theme from "../../css/display.js";
import { CardMenuBar } from "../TitleButton/CardMenuBar.js";
import { EmptyData } from "../Empty/EmptyData.js";
import { CardContainer } from "../Card/CardContainer.js";
import { CardButton } from "../TitleButton/CardButton.js";

export function FolderArticle({items, visible, folders}) {
  
  return (
    <ThemeProvider theme={theme}>
      <CardButton />
      <CardMenuBar folders={folders} />
      {visible && <CardContainer items={items}/>}
      {!visible && <EmptyData />}
    </ThemeProvider>
  );
}
