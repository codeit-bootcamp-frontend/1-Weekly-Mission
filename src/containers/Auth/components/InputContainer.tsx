import { InputHTMLAttributes, ReactNode } from 'react';
import Input from '@/components/Input';

interface InputContainerProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  children: ReactNode;
}

function InputContainer({
  id,
  type,
  placeholder,
  errorMessage,
  onChange,
  onBlur,
  children,
}: InputContainerProps) {
  return (
    <div className='flex flex-col gap-12pxr'>
      <label htmlFor={id} className=' text-14pxr font-normal'>
        {children}
      </label>
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        errorMessage={errorMessage}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

export default InputContainer;
