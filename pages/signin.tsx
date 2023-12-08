import LoginLayout from '@/components/LoginLayout/LoginLayout';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const signIn = {
  p: '회원이 아니신가요?',
  link: '회원  가입하기',
  href: '/signup',
  button: '로그인',
  text: '소셜로그인',
};

export default function SignIn() {
  return <LoginLayout data={signIn}></LoginLayout>;
}
