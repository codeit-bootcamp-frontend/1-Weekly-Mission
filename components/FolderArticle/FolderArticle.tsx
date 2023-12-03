import { CardMenuBar, EmptyData, CardContainer } from "@/components";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/display";
import * as S from "./FolderArticle.style";
import { createContext } from "react";
import { Link } from "@/pages/shared";

export interface Folder {
  name: string;
  id: number;
  created_at: string;
  user_id: number;
  link: {count: number};
}

export type Folders = Folder[];

interface Props {
  items: Link[];
  isVisible: boolean;
  folders: Folders;
}

export const FolderContext = createContext<Folders | null>(null);

export default function FolderArticle({ items, isVisible, folders }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <FolderContext.Provider value={folders}>
        <S.Container>
          <CardMenuBar folders={folders} />
          {isVisible && <CardContainer items={items} active={folders} />}
          {!isVisible && <EmptyData />}
        </S.Container>
      </FolderContext.Provider>
    </ThemeProvider>
  );
}
