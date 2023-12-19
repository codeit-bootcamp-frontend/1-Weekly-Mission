import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { LoginLayout } from '@/src/components';
import { useAuth } from '@/src/lib/auth/AuthProvider';

const signIn = {
  p: '회원이 아니신가요?',
  link: '회원  가입하기',
  href: '/signup',
  button: '로그인',
  text: '소셜로그인',
};

export default function SignIn() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect (() => {
    if(user) {
      router.push('/folder')
    }
    return
  },[user,router])

  return <LoginLayout data={signIn} ></LoginLayout>;
}
