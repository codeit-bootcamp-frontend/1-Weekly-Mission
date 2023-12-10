import Link from 'next/link';
import { Folder } from '@/components/FolderArticle/FolderArticle';
import * as Style from './CardMenuBar.style';

interface Props {
  folder: Folder;
  folderId: number | undefined | null;
}

export default function CardButton({ folder, folderId }: Props) {
  const { id, name } = folder;
  const path = `/folder/${id}`;

  return (
    <Link href={path}>
      <Style.Button active={folderId === id}>{name}</Style.Button>
    </Link>
  );
}
