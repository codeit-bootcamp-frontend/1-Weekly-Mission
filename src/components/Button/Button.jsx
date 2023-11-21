import * as S from "./Button.style";

function Button({ children }) {
  return (
    <S.StyledButton>{children}</S.StyledButton>
  );
}

export default Button;