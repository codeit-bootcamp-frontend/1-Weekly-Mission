import { useContext } from 'react';
import { FolderContext } from '@/src/components/FolderArticle/FolderArticle';
import * as Style from './AddToFolder.style';

export default function AddToFolder() {
  const folders = useContext(FolderContext);

  return (
    <Style.Container>
      {folders?.map((folder, index) => (
        <Style.Box key={index}>
          {folder.name}
          <Style.Span>{folder.link.count}개 링크</Style.Span>
        </Style.Box>
      ))}
    </Style.Container>
  );
}
