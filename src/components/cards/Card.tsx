import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TimeAgo from 'react-timeago';
import useModal, { ModalsKey } from '@/hooks/useModal';
import { Link as ILink } from '@/types/Folder.types';
import { IconKebab, IconStar } from '@/public/svgs';

const DEFAULT_IMAGE_SRC = '/images/default-link-img.svg';

interface Props {
  data: ILink;
  userId: number;
}

function Card({ data, userId }: Props) {
  const {
    url,
    title,
    description,
    created_at: baseCreateAt,
    createdAt,
    image_source,
    imageSource,
  } = data;

  const createdDate = new Date(baseCreateAt ?? createdAt ?? '');

  const reduceText = (text: string, length: number) => {
    if (!text) return;
    if (text.length > length) {
      return `${text.slice(0, length)}...`;
    } else {
      return text;
    }
  };

  const reducedTitle = reduceText(title, 70);
  const reducedDescription = reduceText(description, 100);

  const [modal, setModal] = useModal({ url: url, userId: userId });

  const setKebabModal = (modalKey?: ModalsKey) => {
    setModal(modalKey);
  };

  const [kebab, setKebab] = useState(false);

  const kebabRef = useRef<HTMLButtonElement>(null);

  const closePopup: EventListener = (e: Event) => {
    if (
      kebabRef.current &&
      !kebabRef.current.contains(e.target as HTMLElement)
    ) {
      setKebab(false);
    }
  };

  const toggleKebab = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setKebab((curr) => !curr);
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, []);

  return (
    <>
      <Link
        href={url}
        target='_blank'
        rel='noreferrer noopener'
        className='block w-full rounded-3xl shadow-[0_0.5rem_2.5rem_0_rgba(0,0,0,0.08)] pc:h-[34rem] pc:w-[34rem]'
      >
        <div className='relative flex h-[60vw] w-full items-center justify-center overflow-hidden rounded-t-3xl tablet:h-[30vw] pc:h-[21rem] pc:w-[34rem]'>
          <Image
            src={imageSource ?? image_source ?? DEFAULT_IMAGE_SRC}
            alt='링크 이미지'
            fill
            className='object-cover hover:scale-125 hover:duration-700'
          />
          <button
            type='button'
            className='absolute right-15pxr top-15pxr bg-transparent'
          >
            <IconStar />
          </button>
        </div>
        <div className='grid h-[11rem] grid-rows-[repeat(4,_1fr)] gap-6pxr px-20pxr py-15pxr'>
          <div className='relative row-start-1 text-9pxr font-normal text-[#666]'>
            <TimeAgo date={createdDate} />
            <button
              type='button'
              onClick={toggleKebab}
              ref={kebabRef}
              className='absolute right-0'
            >
              <IconKebab />
            </button>
            {kebab && <KebabPopup setKebabModal={setKebabModal} />}
          </div>
          <p className='row-start-2 text-17pxr font-normal leading-tight tablet:text-17pxr pc:text-15pxr'>
            {reducedTitle}
          </p>
          <p className='row-start-3 text-0 font-normal pc:text-10pxr'>
            {reducedDescription}
          </p>
          <p className='row-start-4 text-9pxr font-normal text-[#333]'>
            {createdDate.toLocaleDateString()}
          </p>
        </div>
      </Link>
      {modal}
    </>
  );
}

export default Card;

interface KebabPopupProps {
  setKebabModal: (modalKey?: ModalsKey) => void;
}

function KebabPopup({ setKebabModal }: KebabPopupProps) {
  const setDeleteLinkModal = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setKebabModal('deleteLink');
  };

  const setAddToFolderModal = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setKebabModal('addToFolder');
  };

  return (
    <div className='absolute right-0 top-18pxr z-popup flex w-100pxr flex-col bg-white shadow-[0_0.2rem_0.8rem_0_rgba(51,50,54,0.1)]'>
      <button
        onClick={setDeleteLinkModal}
        className='w-100pxr px-12pxr py-7pxr text-14pxr font-normal text-gray-100 hover:bg-gray-10 hover:text-primary'
      >
        삭제하기
      </button>
      <button
        onClick={setAddToFolderModal}
        className='w-100pxr px-12pxr py-7pxr text-14pxr font-normal text-gray-100 hover:bg-gray-10 hover:text-primary'
      >
        폴더에 추가
      </button>
    </div>
  );
}
