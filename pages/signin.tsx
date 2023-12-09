import LoginLayout from '@/components/LoginLayout/LoginLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const signIn = {
  p: '회원이 아니신가요?',
  link: '회원  가입하기',
  href: '/signup',
  button: '로그인',
  text: '소셜로그인',
  formUrl: '/sign-in',
  require: {email : "", password: ""},
};

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      router.push('/folder');
    }
  });

  return <LoginLayout data={signIn}></LoginLayout>;
}
