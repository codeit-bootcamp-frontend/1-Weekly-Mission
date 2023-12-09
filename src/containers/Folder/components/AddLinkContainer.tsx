import { useState, RefObject } from 'react';
import useModal from '@/hooks/useModal';
import { IconLink } from '@/public/svgs';
import Button from '@/components/Button';

interface Props {
  userId: number;
  addLinkRef: RefObject<HTMLDivElement>;
  float: boolean;
}

function AddLinkContainer({ userId, addLinkRef, float }: Props) {
  const [url, setUrl] = useState('');

  const [modal, setModal] = useModal({ url: url, userId: userId });

  const setAddToFolderModal = () => {
    setModal('addToFolder');
  };

  return (
    <>
      <div
        ref={addLinkRef}
        className='flex justify-center bg-background px-32pxr pb-40pxr pt-24pxr tablet:px-33pxr tablet:pb-90pxr tablet:pt-60pxr'
      >
        <form className='relative flex w-full max-w-[80rem] items-center'>
          <div className='absolute left-12pxr'>
            <IconLink />
          </div>
          <input
            className='h-53pxr w-full rounded-3xl border border-solid border-primary py-8pxr pl-33pxr pr-10pxr text-14pxr font-normal outline-none placeholder:text-gray-60 tablet:py-16pxr tablet:pr-20pxr tablet:text-16pxr'
            placeholder='링크를 추가해 보세요'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className='absolute right-10pxr w-90pxr'>
            <Button type='button' onClick={setAddToFolderModal}>
              추가하기
            </Button>
          </div>
        </form>
      </div>

      {float && (
        <div
          ref={addLinkRef}
          className='fixed bottom-0 z-floating flex h-85pxr w-full justify-center bg-background px-33pxr py-16pxr shadow-[-2rem_1rem_5rem_rgba(0,0,0,0.4)] tablet:h-[11.7rem] tablet:px-33pxr tablet:py-24pxr'
        >
          <form className='relative flex w-full max-w-[80rem] items-center'>
            <div className='absolute left-12pxr'>
              <IconLink />
            </div>
            <input
              className='h-53pxr w-full rounded-3xl border border-solid border-primary py-8pxr pb-33pxr pt-10pxr text-14pxr font-normal outline-none placeholder:text-gray-60 tablet:py-16pxr tablet:pb-33pxr tablet:pt-20pxr tablet:text-16pxr'
              placeholder='링크를 추가해 보세요'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <div className='absolute right-10pxr w-80pxr pc:w-90pxr'>
              <Button onClick={setAddToFolderModal}>추가하기</Button>
            </div>
          </form>
        </div>
      )}
      {modal}
    </>
  );
}

export default AddLinkContainer;
