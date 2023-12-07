import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Button({ children }: Props) {
  return (
    <button className='cursor-pointer flex items-center justify-center w-full py-10pxr px-16pxr bg-gradient-to-r from-primary to-[#6ADDFD] rounded-xl text-14pxr font-semibold text-gray-light pc:px-16pxr pc:text-18pxr'>
      {children}
    </button>
  );
}

export default Button;
