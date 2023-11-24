import { useContext } from 'react';
import { FolderContext } from 'component/FolderArticle/FolderArticle.js';
import * as Style from './AddToFolder.style.js';

export default function AddToFolder () {
  const folders = useContext(FolderContext);
  console.log(folders);

  return (
    <>
      <Style.Container>
        {folders.map((folder) => 
        (<><Style.Box>
          {folder.name}
          <Style.Span>{folder.link.count}개 링크</Style.Span>
          </Style.Box></>))}
      </Style.Container>
    </>
  )
}