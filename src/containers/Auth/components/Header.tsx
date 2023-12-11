import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconLinkbrary } from '@/public/svgs';

const REDIRECT_URL = {
  '/signin': '/signup',
  '/signup': '/signin',
};

const TEXT = {
  '/signin': {
    a11y: '링크브러리 로그인',
    redirect: '회원이 아니신가요? ',
    redirectLink: '회원 가입하기',
  },
  '/signup': {
    a11y: '링크브러리 회원가입',
    redirect: '이미 회원이신가요? ',
    redirectLink: '로그인 하기',
  },
};

function Header() {
  const { pathname: type } = useRouter() as { pathname: keyof typeof TEXT };

  return (
    <section className='flex w-full flex-col items-center justify-center gap-16pxr'>
      <span className='sr-only'>{TEXT[type].a11y}</span>
      <Link href='/'>
        <IconLinkbrary />
      </Link>
      <p className='text-16pxr font-normal leading-6'>
        {TEXT[type].redirect}
        <Link
          href={REDIRECT_URL[type]}
          className='font-semibold text-primary underline'
        >
          {TEXT[type].redirectLink}
        </Link>
      </p>
    </section>
  );
}

export default Header;
