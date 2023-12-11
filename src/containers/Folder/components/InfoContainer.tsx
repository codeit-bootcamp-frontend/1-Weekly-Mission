import useModal from '@/hooks/useModal';
import { Folder } from '@/types/Folder.types';
import { IconDelete, IconEdit, IconShare } from '@/public/svgs';

interface Props {
  defaultFolder: Folder;
  selectedFolder: Folder;
  userId: number;
}

function InfoContainer({ defaultFolder, selectedFolder, userId }: Props) {
  const [modal, setModal] = useModal({
    userId: userId,
    folderName: selectedFolder?.name,
    folderId: selectedFolder?.id,
  });

  const settingButtonStyle =
    'flex items-center justify-center gap-3pxr text-14pxr font-semibold text-gray-60';

  return (
    <>
      <div className='flex w-full flex-col pt-28pxr tablet:flex-row tablet:justify-between'>
        <h1 className='mb-12pxr text-20pxr font-semibold'>
          {selectedFolder?.name}
        </h1>
        <div className='flex gap-14pxr'>
          {selectedFolder?.id !== defaultFolder.id && (
            <>
              <button
                onClick={() => setModal('share')}
                className={settingButtonStyle}
              >
                <IconShare />
                공유
              </button>
              <button
                onClick={() => setModal('edit')}
                className={settingButtonStyle}
              >
                <IconEdit />
                이름 변경
              </button>
              <button
                onClick={() => setModal('deleteFolder')}
                className={settingButtonStyle}
              >
                <IconDelete />
                삭제
              </button>
            </>
          )}
        </div>
      </div>
      {modal}
    </>
  );
}

export default InfoContainer;
