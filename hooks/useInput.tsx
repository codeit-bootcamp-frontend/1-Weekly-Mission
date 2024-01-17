import { handleInputErrorFunc } from "@/types/client.type";
import { ChangeEvent, useState } from "react";

type inputConfigType = {
  id: string;
  type?: string;
  name?: string;
  initialvalue?: string;
  eyeButton?: boolean;
  placeholder?: string | undefined;
};

type errorConfigType = {
  func: ({ value, setErrorText, valueToCompare }: handleInputErrorFunc) => void;
  valueToCompare?: string;
};

type titleConfigType = { title: string; eyeButton?: boolean };

interface Props {
  inputConfig: inputConfigType;
  titleConfig?: titleConfigType;
  errorConfig?: errorConfigType;
}

function useInput({ errorConfig, inputConfig, titleConfig }: Props) {
  const [value, setValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const [eyesValue, setEyesValue] = useState(false);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setValue(value);
  }

  const onBlur = () => {
    if (errorConfig?.func) {
      const { func, valueToCompare } = errorConfig;
      func({ value, setErrorText, valueToCompare });
    }
  };

  const onFocus = () => {
    if (errorText) {
      setErrorText("");
    }
  };

  const onEyesToggle = () => {
    setEyesValue((current) => !current);
  };

  const typeChanger = (type: string | undefined) => {
    if (!type) return "text";
    if (!eyesValue) return type;
    return "text";
  };

  const changedType = typeChanger(inputConfig.type);

  return {
    input: {
      value,
      setValue,
      onChange,
      eyesValue,
      onEyesToggle,
      ...inputConfig,
      type: changedType,
      autoComplete: "off",
    },
    wrapper: { onBlur, onFocus, errorText, setErrorText, hrmlFor: inputConfig.id, ...titleConfig },
  };
}

export default useInput;
