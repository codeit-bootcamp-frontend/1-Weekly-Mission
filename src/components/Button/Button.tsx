import * as S from "./Button.style";

const Button: {
  className: string,
} = { 
}

function Button({ 
  className,
  children,
  onClick,
}) {
  return (
    <S.Button
      className={className}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
}

export default Button;