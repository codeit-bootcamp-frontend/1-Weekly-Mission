import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Button({ children }: Props) {
  return (
    <button className='flex w-full cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-primary to-[#6ADDFD] px-16pxr py-10pxr text-14pxr font-semibold text-gray-light pc:px-16pxr pc:text-18pxr'>
      {children}
    </button>
  );
}

export default Button;
