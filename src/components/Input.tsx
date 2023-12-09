import { InputHTMLAttributes, useState } from 'react';
import { IconEyeOff, IconEyeOn } from '@/public/svgs';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  type?: string;
}

function Input({
  id,
  placeholder,
  errorMessage,
  onChange,
  type: initialType = 'text',
  onBlur,
}: Props) {
  const [type, setType] = useState(initialType);

  const toggleShow = () => {
    setType((prevType) => (prevType === 'text' ? 'password' : 'text'));
  };

  const errorStyle = Boolean(errorMessage) ? 'border-red' : '';
  const focusStyle = !Boolean(errorMessage) ? 'focus:border-primary' : '';

  return (
    <div className='relative flex flex-col gap-4pxr'>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full rounded-xl border border-solid border-gray-20 bg-white px-15pxr py-18pxr text-16pxr font-normal leading-[2.4rem] text-gray-100 outline-none placeholder:text-gray-60 ${focusStyle} ${errorStyle}`}
      />
      {initialType === 'password' && (
        <button
          type='button'
          onClick={toggleShow}
          className='absolute right-15pxr top-23pxr'
        >
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
