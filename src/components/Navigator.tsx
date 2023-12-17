import Image from 'next/image';
import Link from 'next/link';
import { RefObject, useEffect } from 'react';
import useRequest from '@/hooks/useRequest';
import Button from '@/components/Button';
import { IconLinkbrary } from '@/public/svgs';

const DEFAULT_PROFILE_IMAGE_SRC = '/images/default-profile-img.png';

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
  const { data, fetch } = useRequest<UserInfo>({
    skip: !isLoggedIn,
    options: {
      url: `/users`,
      method: 'get',
    },
  });

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    fetch({ headers: { Authorization: `Bearer ${accessToken}` } });
  });

  const userInfo = data?.data?.[0];

  return (
    <header ref={navRef} className='w-full bg-background'>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-32pxr py-13pxr tablet:px-32pxr pc:max-w-[192rem] pc:px-[20rem] pc:py-20pxr'>
        <Link href='/' className='mr-5pxr'>
          <IconLinkbrary />
          <h1 className='sr-only'>Linkbrary - 링크브러리</h1>
        </Link>
        {isLoggedIn ? (
          <div className='ml-5pxr flex w-80pxr items-center justify-end gap-7pxr'>
            <Image
              src={userInfo?.image_source ?? DEFAULT_PROFILE_IMAGE_SRC}
              alt='사용자 프로필 사진'
              width={28}
              height={28}
            />
            <p className='hidden text-14pxr font-normal text-gray-100 tablet:block tablet:break-keep'>
              {userInfo?.email}
            </p>
          </div>
        ) : (
          <Link href='/signin' className='ml-5pxr w-80pxr pc:w-[13rem]'>
            <Button>로그인</Button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navigator;
