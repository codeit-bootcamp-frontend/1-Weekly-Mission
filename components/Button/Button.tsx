import * as S from './Button.styled';

interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <S.Button>
      {children}
    </S.Button>
  );
}