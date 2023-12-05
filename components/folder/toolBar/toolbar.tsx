import { useSearchParams } from 'next/navigation';
import FolderButton from './folderButton';
import { FolderData } from '@/src/type/folderType';

interface Props {
  folders: FolderData[] | undefined;
}

export default function ToolBar({ folders }: Props) {
  const searchParams = useSearchParams();
  const currentFolder: null | string = searchParams.get('folderId');

  return (
    <div className='flex gap-x-[0.5rem] gap-y-[0.75rem] flex-wrap max-w-[75rem]'>
      <FolderButton text='전체' isSelected={'' === currentFolder} />
      {folders?.map((folder) => (
        <FolderButton
          text={folder.name}
          key={folder.name}
          id={folder.id}
          isSelected={String(folder.id) === currentFolder}
        />
      ))}
    </div>
  );
}
