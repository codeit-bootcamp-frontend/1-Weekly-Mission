import styles from './Modal.module.css';
import { useState } from 'react';
import useRequest from '@/hooks/useRequest';
import { Folder } from '@/types/Folder.types';
import { IconCheck } from '@/public/svgs';
import Button from '@/components/Button';

interface Props {
  url: string;
  userId: number;
}

function AddToFolder({ url, userId }: Props) {
  const { data: folders } = useRequest<{ data: Folder[] }>({
    options: {
      url: `/users/${userId}/folders`,
      method: 'get',
    },
  });

  const [selectedFolderId, setSelectedFolderId] = useState<number>();

  const selectFolder = (folderId: number) => {
    setSelectedFolderId(folderId);
  };

  const selectedStyle = { button: 'bg-background', text: 'text-primary' };

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>폴더에 추가</h1>
        <p className={styles.description}>{url}</p>
      </div>
      <ul className='flex flex-col gap-4pxr'>
        {folders?.data?.map((folder: Folder) => (
          <li key={folder?.id}>
            <button
              onClick={() => selectFolder(folder?.id)}
              className={`flex w-full
             items-center gap-8pxr rounded-[0.8rem] p-8pxr ${
               folder?.id === selectedFolderId ? selectedStyle.button : ''
             }`}
            >
              <h2
                className={`text-16pxr font-normal leading-[2.4rem] text-gray-100 ${
                  folder?.id === selectedFolderId ? selectedStyle.button : ''
                }`}
              >
                {folder?.name}
              </h2>
              <span className='text-14pxr font-normal text-gray-60'>
                {folder?.link?.count}개 링크
              </span>
              {folder?.id === selectedFolderId && (
                <div className='ml-auto'>
                  <IconCheck />
                </div>
              )}
            </button>
          </li>
        ))}
      </ul>
      <Button size='lg'>추가하기</Button>
    </>
  );
}

export default AddToFolder;
