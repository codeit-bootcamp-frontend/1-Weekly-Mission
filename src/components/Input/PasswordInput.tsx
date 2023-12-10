import Input from "src/components/Input";
import InputLabel from "src/components/Label/InputLabel";
import { ERROR_PASSWORD_EMPTY } from "src/constants/auth";
import usePasswordForm from "src/hooks/usePasswordForm";
import theme from "src/styles/Theme/theme";
import styled from "styled-components";

function PasswordInput() {
  const { register, errors, isMinLength, isRequired, passwordValidation } =
    usePasswordForm();

  return (
    <>
      <InputLabel label="비밀번호" htmlFor="password" />
      <Input
        type="password"
        id="password"
        placeholder={ERROR_PASSWORD_EMPTY}
        register={register}
        isRequired={isRequired}
        isMinLength={isMinLength}
        validation={passwordValidation}
      />
      {errors.password && <StyledError>{errors.password.message}</StyledError>}
    </>
  );
}

export default PasswordInput;

const StyledError = styled.span`
  color: ${theme.color.error};
  font-size: 12px;
`;
