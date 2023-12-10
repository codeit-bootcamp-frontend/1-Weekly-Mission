import { UseFormRegister } from "react-hook-form";
import Input from "src/components/Input";
import InputLabel from "src/components/Label/InputLabel";
import { ERROR_EMAIL_EMPTY } from "src/constants/auth";
import useEmailForm from "src/hooks/useEmailForm";
import theme from "src/styles/Theme/theme";
import { FormValuesType } from "src/types/FormValue";
import styled from "styled-components";

interface Props {
  register: UseFormRegister<FormValuesType>;
}

function EmailInput({ register }: Props) {
  const { errors, isRequired, isMinLength, emailValidation } = useEmailForm();

  return (
    <>
      <InputLabel label="이메일" htmlFor="email" />
      <Input
        type="email"
        id="email"
        placeholder={ERROR_EMAIL_EMPTY}
        register={register}
        isRequired={isRequired}
        isMinLength={isMinLength}
        validation={emailValidation}
      />
      {errors.email && <StyledError>{errors.email.message}</StyledError>}
    </>
  );
}

export default EmailInput;

const StyledError = styled.span`
  color: ${theme.color.error};
  font-size: 12px;
`;
