import { ChangeEvent, useState } from "react";

interface Props {
  values: string;
  setErrorText: React.Dispatch<React.SetStateAction<string>>;
}

interface func {
  func?: ({ values, setErrorText }: Props) => void;
}

function useInputController({ func }: func) {
  const [values, setValues] = useState("");
  const [errorText, setErrorText] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setValues(value);
  }

  const handleBlur = () => {
    if (func) {
      func({ values, setErrorText });
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
