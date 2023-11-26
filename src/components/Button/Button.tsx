import * as S from "./Button.style";

type ButtonProps = {
  children: React.ReactNode;
};

function Button(props: ButtonProps) {
  return (
    <S.Button
    >
      {props.children}
    </S.Button>
  );
}

export default Button;