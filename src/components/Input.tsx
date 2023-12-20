import { InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import { IconEyeOff, IconEyeOn } from '@/public/svgs';

interface InputProps {
  field: InputHTMLAttributes<HTMLInputElement>;
  placeholder: string;
  type: string;
  error: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ field, placeholder, type: initialType, error = false }, ref) => {
    const [type, setType] = useState(initialType);

    const toggleShow = () => {
      setType((prevType) => (prevType === 'text' ? 'password' : 'text'));
    };

    const errorStyle = Boolean(error) ? 'border-red' : '';
    const focusStyle = !Boolean(error) ? 'focus:border-primary' : '';

    return (
      <div className='relative'>
        <input
          {...field}
          ref={ref}
          type={type}
          placeholder={placeholder}
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
      </div>
    );
  },
);
Input.displayName = 'Input';

interface InputContainerProps<T extends FieldValues>
  extends UseControllerProps<T> {
  children: ReactNode;
  placeholder?: string;
  type?: string;
}

export function InputContainer<T extends FieldValues>({
  children,
  placeholder = '값을 입력하세요.',
  type = 'text',
  ...controls
}: InputContainerProps<T>) {
  const { field, fieldState } = useController(controls);

  return (
    <div className='relative flex w-full flex-col'>
      <label htmlFor={field.name} className='pb-12pxr text-14pxr font-normal'>
        {children}
      </label>
      <Input
        field={field}
        ref={field.ref}
        type={type}
        placeholder={placeholder}
        error={Boolean(fieldState?.error?.message)}
      />
      <div className='h-17pxr pt-4pxr text-14pxr font-normal text-red'>
        {fieldState?.error?.message}
      </div>
    </div>
  );
}
