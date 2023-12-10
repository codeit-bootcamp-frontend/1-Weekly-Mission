import { UseFormRegister } from "react-hook-form";
import Input from "src/components/Input";
import InputLabel from "src/components/Label/InputLabel";
import { ERROR_PASSWORD_EMPTY } from "src/constants/auth";
import usePasswordForm from "src/hooks/usePasswordForm";
import theme from "src/styles/Theme/theme";
import { FormValuesType } from "src/types/FormValue";
import styled from "styled-components";

interface Props {
  register: UseFormRegister<FormValuesType>;
}

function PasswordCorrectInput({ register }: Props) {
  const { errors, isMinLength, isRequired, passwordConfirm } =
    usePasswordForm();

  return (
    <>
      <InputLabel label="비밀번호 확인" htmlFor="passwordSecond" />
      <Input
        type="password"
        id="passwordSecond"
        placeholder={ERROR_PASSWORD_EMPTY}
        register={register}
        isRequired={isRequired}
        isMinLength={isMinLength}
        validation={passwordConfirm}
      />
      {errors.passwordSecond && (
        <StyledError>{errors.passwordSecond.message}</StyledError>
      )}
    </>
  );
}

export default PasswordCorrectInput;

const StyledError = styled.span`
  color: ${theme.color.error};
  font-size: 12px;
`;
