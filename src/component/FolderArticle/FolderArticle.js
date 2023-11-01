import { ThemeProvider } from "styled-components";
import display from "../../css/display.js";
import { CardMenuBar } from "../TitleButton/CardMenuBar.js";
import { EmptyData } from "../Empty/EmptyData.js";
import { CardContainer } from "../Card/CardContainer.js";
import { CardButton } from "../TitleButton/CardButton.js";

export function FolderArticle({values, visible, folders}) {
  
  return (
    <ThemeProvider theme={display}>
      <CardButton />
      <CardMenuBar folders={folders} />
      {visible && <CardContainer values={values}/>}
      {!visible && <EmptyData />}
    </ThemeProvider>
  );
}
