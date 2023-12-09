import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

function Button({
  children,
  onClick,
  type,
  size = 'md',
  color = 'default',
}: Props) {
  const sizeStyle =
    size === 'sm'
      ? 'px-14pxr py-8pxr text-12pxr'
      : size === 'md'
        ? ' px-16pxr py-10pxr text-14pxr'
        : 'px-20pxr py-16pxr text-16pxr';

  const colorStyle =
    color === 'default' ? 'bg-gradient-to-r from-primary to-[#6ADDFD]' : color;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex w-full cursor-pointer items-center justify-center rounded-xl font-semibold text-gray-light ${sizeStyle} ${colorStyle}`}
    >
      {children}
    </button>
  );
}

export default Button;
