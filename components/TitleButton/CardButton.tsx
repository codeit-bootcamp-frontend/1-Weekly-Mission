import Link from 'next/link';
import * as Style from './CardMenuBar.style';

interface CardButtonProps {
  folder: Folder;
  folderId: number | undefined | null;
}

export default function CardButton({ folder, folderId }: CardButtonProps) {
  const { id, name } = folder;
  const path = `/folder/${id}`;

  return (
    <Link href={path}>
      <Style.Button active={folderId == id}>{name}</Style.Button>
    </Link>
  );
}
