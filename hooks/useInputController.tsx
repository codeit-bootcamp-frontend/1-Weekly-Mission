import { ChangeEvent, useState } from "react";

interface func {
  values: string;
  setErrorText: React.Dispatch<React.SetStateAction<string>>;
  valueToCompare?: string;
}

interface Props {
  func?: ({ values, setErrorText }: func) => void;
  valueToCompare?: string;
}

function useInputController({ func, valueToCompare }: Props) {
  const [values, setValues] = useState("");
  const [errorText, setErrorText] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setValues(value);
  }

  const handleBlur = () => {
    if (func) {
      func({ values, setErrorText, valueToCompare });
    }
  };

  const handleFocus = () => {
    if (errorText) {
      setErrorText("");
    }
  };

  return {
    values,
    setValues,
    errorText,
    setErrorText,
    handleChange,
    handleBlur,
    handleFocus,
  };
}

export default useInputController;
