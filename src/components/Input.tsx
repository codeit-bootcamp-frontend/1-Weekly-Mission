import { useState } from 'react';
import { IconEyeOff, IconEyeOn } from '@/public/svgs';

interface Props {
  placeholder?: string;
  errorMessage?: string;
  type?: string;
  onBlur?: () => void;
}

function Input({
  placeholder = '내용 입력',
  errorMessage,
  type: initialType = 'text',
  onBlur,
}: Props) {
  const [type, setType] = useState(initialType);

  const toggleShow = () => {
    setType((prevType) => (prevType === 'text' ? 'password' : 'text'));
  };

  const errorStyle = Boolean(errorMessage) && 'border-red';

  return (
    <div className='relative flex flex-col gap-4pxr'>
      <input
        className={`w-full rounded-xl border border-solid border-gray-20 bg-white px-15pxr py-18pxr text-16pxr font-normal leading-[2.4rem] text-gray-100 outline-none placeholder:text-gray-60 focus:border-primary ${errorStyle}`}
        placeholder={placeholder}
        type={type}
        onBlur={onBlur}
      />
      {initialType === 'password' && (
        <button onClick={toggleShow} className='absolute right-15pxr top-23pxr'>
          {type === 'password' && <IconEyeOff />}
          {type === 'text' && <IconEyeOn />}
        </button>
      )}
      <div className='h-17pxr text-14pxr font-normal text-red'>
        {errorMessage}
      </div>
    </div>
  );
}

export default Input;
