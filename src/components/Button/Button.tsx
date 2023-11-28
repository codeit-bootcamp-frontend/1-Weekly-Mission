import * as S from "./Button.style";

interface ButtonProps {
  children: string;
};

function Button({ children }: ButtonProps) {
  return (
    <S.Button
    >
      {children}
    </S.Button>
  );
}

export default Button;