import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconGoogle, IconKakaotalk } from '@/public/svgs';

function Social() {
  const { pathname: type } = useRouter();

  return (
    <section
      className='flex h-66pxr w-full items-center justify-between rounded-lg border
 border-solid border-gray-20 bg-gray-10 px-24pxr py-12pxr text-14pxr text-gray-100'
    >
      <span>
        {type === '/signin' ? '소셜 로그인' : '다른 방식으로 가입하기'}
      </span>
      <div className='flex gap-16pxr'>
        <Link href='https://www.google.com'>
          <IconGoogle />
        </Link>
        <Link href='https://www.kakaocorp.com/page'>
          <IconKakaotalk />
        </Link>
      </div>
    </section>
  );
}

export default Social;
