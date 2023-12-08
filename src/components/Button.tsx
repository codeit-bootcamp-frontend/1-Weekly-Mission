import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

function Button({ children, onClick, size = 'md' }: Props) {
  const sizeStyle =
    size === 'sm'
      ? 'px-14pxr py-8pxr text-12pxr'
      : size === 'md'
        ? ' px-16pxr py-10pxr text-14pxr'
        : 'px-20pxr py-16pxr text-16pxr';

  return (
    <button
      onClick={onClick}
      className={`flex w-full cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-primary to-[#6ADDFD] font-semibold text-gray-light pc:text-18pxr ${sizeStyle}`}
    >
      {children}
    </button>
  );
}

export default Button;
