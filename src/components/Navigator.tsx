import { RefObject } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useRequest from '@/hooks/useRequest';
import Button from '@/components/Button';
import { IconLinkbrary } from '@/public/svgs';

const DEFAULT_PROFILE_IMAGE_SRC = '/image/default-profile-img.png';

interface Props {
  isLoggedIn: boolean;
  userId: number;
  navRef?: RefObject<HTMLDivElement>;
}

interface UserInfo {
  data: {
    auth_id: string;
    created_at: string;
    email: string;
    id: number;
    image_source: string;
    name: string;
  }[];
}

function Navigator({ isLoggedIn, userId, navRef }: Props) {
  const { data } = useRequest<UserInfo>({
    skip: !isLoggedIn,
    options: {
      url: `/users/${userId}`,
      method: 'get',
    },
  });

  const userInfo = data?.data?.[0];

  return (
    <header ref={navRef} className='w-full bg-background'>
      <div className='flex items-center justify-between w-full mx-auto py-13pxr px-32pxr  max-w-7xl tablet:px-32pxr pc:py-20pxr pc:px-[20rem] pc:max-w-[192rem]'>
        <Link href='/' className='mr-5pxr'>
          <IconLinkbrary />
          <h1 className='sr-only'>Linkbrary - 링크브러리</h1>
        </Link>
        {isLoggedIn ? (
          <div className='flex items-center justify-end gap-7pxr w-80pxr ml-5pxr'>
            <Image
              src={userInfo?.image_source ?? DEFAULT_PROFILE_IMAGE_SRC}
              alt='사용자 프로필 사진'
            />
            <p className='hidden font-normal text-gray-100 text-14pxr tablet:block tablet:break-keep'>
              {userInfo?.email}
            </p>
          </div>
        ) : (
          <Link href='/signin' className='w-80pxr ml-5pxr pc:w-[13rem]'>
            <Button>로그인</Button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navigator;
