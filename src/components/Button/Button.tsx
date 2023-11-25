import * as S from "./Button.style";

type ButtonProps = {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
};

function Button(props: ButtonProps) {
  return (
    <S.Button
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </S.Button>
  );
}

export default Button;