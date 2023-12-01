import SignLayout from '@/components/sign/signLayout';
import Link from 'next/link';
import Button from '@/components/sign/signButton';
import SignInput from '@/components/sign/signInput';
import { ChangeEvent, useState } from 'react';

export default function SignIn() {
  const [InputValue, setInputValue] = useState({ email: '', password: '' });
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <SignLayout>
      <div className='flex flex-col items-center'>
        <div className='flex leading-6 gap-2 items-start'>
          회원이 아니신가요?
          <Link
            href='/signup'
            className='font-semibold text-primary border-solid border-b-[1px] leading-[normal]'
          >
            회원 가입하기
          </Link>
        </div>
        <div className='flex flex-col w-full pt-[1.875rem] pb-[0.375rem]'>
          <SignInput name='이메일' eyeShow={false} />
          <SignInput name='비밀번호' eyeShow={true} />
        </div>
        <Button text='로그인' />
      </div>
    </SignLayout>
  );
}
