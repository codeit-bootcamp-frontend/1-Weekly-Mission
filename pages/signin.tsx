import SignLayout from '@/components/sign/signLayout';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/sign/signButton';
import SignInput from '@/components/sign/signInput';
import { ChangeEvent, FocusEvent, useState } from 'react';

interface InputValue {
  [key: string]: string;
}

interface Validation {
  [key: string]: boolean | null;
}

interface Reg {
  [key: string]: RegExp;
}

const ValidateReg: Reg = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password: /^[0-9a-zA-Z]{8,}/,
};

const ErrorMessage = {
  email: '',
};

export default function SignIn() {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [inputValue, setInputValue] = useState<InputValue>({
    email: '',
    password: '',
  });
  const [validation, setValidation] = useState<Validation>({
    email: null,
    password: null,
  });

  const handleEyeClick = () => {
    setEyeOpen((prev) => !prev);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    const {
      target: { id, value },
    } = e;
    const result = ValidateReg[id].test(value);
    setValidation((prev) => ({ ...prev, [id]: result }));
  };

  return (
    <SignLayout>
      <div className='flex flex-col items-center '>
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
          <SignInput
            id='email'
            name='이메일'
            eyeShow={false}
            inputValue={inputValue}
            validation={validation}
            onInputChange={handleInputChange}
            onInputBlur={handleInputBlur}
          />
          <SignInput
            id='password'
            name='비밀번호'
            inputValue={inputValue}
            eyeShow={true}
            eyeOpen={eyeOpen}
            validation={validation}
            onEyeClick={handleEyeClick}
            onInputChange={handleInputChange}
            onInputBlur={handleInputBlur}
          />
        </div>
        <Button text='로그인' />
      </div>
    </SignLayout>
  );
}
