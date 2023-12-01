import logo from '@/public/assets/icons/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  profile: {
    email: string;
    image_source: string;
  } | null;
}

export default function Nav({ profile }: Props) {
  return (
    <div className='bg-bg'>
      <div className='flex justify-between items-center m-auto px-8 py-[0.8125rem] dt:px-[12.5rem] tb:py-8 max-w-[120rem]'>
        <Link href='/'>
          <Image
            priority
            src={logo}
            alt='로고'
            className='w-[88.667px] h-4 tb:w-[8.3125rem] tb:h-[1.5rem]'
          />
        </Link>
        {profile?.email ? (
          <div className='flex items-center text-[0.875rem] gap-[0.325rem]'>
            <div className='w-[1.75rem] h-[1.75rem] relative'>
              <Image
                fill
                sizes='(max-width: 768px)100vw'
                src={profile.image_source}
                alt='프로필 이미지'
              />
            </div>
            <div className='hidden tb:block'>{profile.email}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
