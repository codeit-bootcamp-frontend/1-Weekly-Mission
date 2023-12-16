import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { LoginLayout, LoginInput } from '@/src/components';
import { useAuth } from '@/src/lib/auth/AuthProvider';

const signUp = {
  isSignup: true,
  p: '이미 회원이신가요?',
  link: '로그인 하기',
  href: '/signin',
  button: '회원가입',
  text: '다른 방식으로 가입하기',
};

export default function SignUp() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect (() => {
    if(user) {
      router.push('/folder')
    }
    return
  },[user,router])

  return (
    <LoginLayout data={signUp}>
      <LoginInput type="passwordCheck" />
    </LoginLayout>
  );
}
