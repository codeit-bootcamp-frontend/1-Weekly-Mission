import * as S from "./Input.style";

function Input({
  isError = false,
  placeholder,
  errorMessage = "내용을 다시 작성해 주세요.",
}) {
  return (
    <S.InputContainer>
      <S.Input
        type="text"
        error={isError}
        placeholder={placeholder}
      />
      {isError && <S.InputError>{errorMessage}</S.InputError>}
    </S.InputContainer>
  );
}

export default Input;