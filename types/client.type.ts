import { ChangeEvent, Dispatch, MouseEvent, ReactNode } from "react";

export type handleInputErrorFunc = {
  value: string;
  setErrorText: Dispatch<React.SetStateAction<string>>;
  valueToCompare?: string;
};

export type UseInput = {
  input: InputProps;
  wrapper: WrapperProps;
};

export type UseToggle = {
  state: boolean;
  handleToggle: (e: MouseEvent) => void;
};

export type InputProps = {
  id: string;
  value: string;
  type: string;
  name?: string;
  placeholder?: string | undefined;
  eyeButton?: boolean;
  eyesValue?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEyesToggle: () => void;
};

export type WrapperProps = {
  title?: string;
  htmlFor?: string;
  errorText?: string;
  setErrorText: Dispatch<React.SetStateAction<string>>;
  onBlur: () => void;
  onFocus: () => void;
};

export type InputWrapperProps = {
  children: ReactNode;
  className?: string;
} & WrapperProps;
