import { useForm } from "react-hook-form";
import {
  EMAIL_STANDARD,
  ERROR_EMAIL_EMPTY,
  ERROR_EMAIL_VALIDATION,
} from "src/constants/auth";
import { FormValuesType } from "src/types/FormValue";

function useEmailForm() {
  const {
    register,
    formState: { errors },
  } = useForm<FormValuesType>({
    mode: "onBlur",
  });

  const isRequired = () => ERROR_EMAIL_EMPTY;

  const isMinLength = () => {
    return {
      value: 0,
      message: ERROR_EMAIL_EMPTY,
    };
  };

  const emailValidation = () => {
    return {
      value: EMAIL_STANDARD,
      message: ERROR_EMAIL_VALIDATION,
    };
  };

  return {
    register,
    isRequired,
    isMinLength,
    emailValidation,
    errors,
  };
}

export default useEmailForm;
