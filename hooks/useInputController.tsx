import { ChangeEvent, useState } from "react";

interface func {
  value: string;
  setErrorText: React.Dispatch<React.SetStateAction<string>>;
  valueToCompare?: string;
}

interface Props {
  func?: ({ value, setErrorText }: func) => void;
  valueToCompare?: string;
}

function useInputController({ func, valueToCompare }: Props) {
  const [value, setValue] = useState("");
  const [errorText, setErrorText] = useState("");

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setValue(value);
  }

  const onBlur = () => {
    if (func) {
      func({ value, setErrorText, valueToCompare });
    }
  };

  const onFocus = () => {
    if (errorText) {
      setErrorText("");
    }
  };

  return {
    setValue,
    setErrorText,
    value,
    errorText,
    onChange,
    onBlur,
    onFocus,
  };
}

export default useInputController;
