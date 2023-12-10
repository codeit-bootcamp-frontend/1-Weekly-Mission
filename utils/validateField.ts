interface ValidateField {
  setError: (fieldName: string, errorObject: { message: string }) => void;
  fieldName: string;
  value: string;
  regex?: RegExp;
  errorMessageEmpty: string;
  errorMessageInvalid?: string;
}

const validateField = ({
  setError,
  fieldName,
  value,
  regex,
  errorMessageEmpty,
  errorMessageInvalid,
}: ValidateField): boolean => {
  if (value.trim() === "") {
    setError(fieldName, {
      message: errorMessageEmpty,
    });
    return false;
  }

  if (regex && errorMessageInvalid) {
    if (!regex.test(value)) {
      setError(fieldName, {
        message: errorMessageInvalid,
      });
      return false;
    }
  }

  setError(fieldName, {
    message: "",
  });
  return true;
};

export default validateField;
