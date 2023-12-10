import { useForm } from "react-hook-form";
import {
  ERROR_PASSWORD_EMPTY,
  ERROR_PASSWORD_NOTCORRECT,
  ERROR_PASSWORD_VALIDATION,
  PASSWORD_STANDARD,
} from "src/constants/auth";
import { FormValuesType } from "src/types/FormValue";

function usePasswordForm() {
  const {
    register,
    setError,
    formState: { errors },
  } = useForm<FormValuesType>({
    mode: "onBlur",
  });

  const isRequired = () => ERROR_PASSWORD_EMPTY;

  const isMinLength = () => {
    return {
      value: 8,
      message: ERROR_PASSWORD_VALIDATION,
    };
  };

  const passwordValidation = () => {
    return {
      value: PASSWORD_STANDARD,
      message: ERROR_PASSWORD_VALIDATION,
    };
  };

  const passwordConfirm = (data: FormValuesType) => {
    if (data.password !== data.passwordSecond) {
      setError(
        "password",
        { message: ERROR_PASSWORD_NOTCORRECT },
        { shouldFocus: true }
      );
    }
  };

  return {
    register,
    isRequired,
    isMinLength,
    passwordValidation,
    passwordConfirm,
    errors,
  };
}

export default usePasswordForm;
