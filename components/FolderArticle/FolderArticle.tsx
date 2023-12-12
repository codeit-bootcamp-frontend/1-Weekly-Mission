import { createContext } from 'react';
import { CardMenuBar, EmptyData, CardContainer } from '@/components';
import { Link } from '@/pages/shared';
import * as Style from './FolderArticle.style';

export interface Folder {
  name: string;
  id: number;
  created_at: string;
  user_id: number;
  link: { count: number };
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
    <FolderContext.Provider value={folders}>
      <Style.Container>
        <CardMenuBar />
        {isVisible && <CardContainer items={items} />}
        {!isVisible && <EmptyData />}
      </Style.Container>
    </FolderContext.Provider>
  );
}
