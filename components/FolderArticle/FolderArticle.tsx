import { createContext } from 'react';
import { CardMenuBar, EmptyData, CardContainer } from '@/components';
import * as Style from './FolderArticle.style';

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
