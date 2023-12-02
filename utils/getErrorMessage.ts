import { VALIDATE_ERROR_MSG } from "@/constants/constants";
import { getErrorMessageProps, notEqualPasswordProps } from "@/types/type";

const getErrorMessage = ({ name, inputValue, isValid }: getErrorMessageProps) => {
  if (!inputValue.length) return VALIDATE_ERROR_MSG[name]["empty"];
  if (!isValid) return VALIDATE_ERROR_MSG[name]["wrong"];
  return "";
};

const notEqualPassword = ({ passwordValue, checkValue }: notEqualPasswordProps) =>
  passwordValue !== checkValue ? VALIDATE_ERROR_MSG.userPassword.notEqual : "";

getErrorMessage.notEqualPassword = notEqualPassword;

export default getErrorMessage;
