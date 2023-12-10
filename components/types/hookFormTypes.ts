import { MouseEventHandler } from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

export type FormValues = {
  email: string;
  password: string;
  repassword?: string;
};

// formOBject
const FormValueObject = {
  email: "email",
  password: "password",
  repassword: "repassword",
};

export type FORMVALUEOBJECT = keyof typeof FormValueObject;

const password = {
  text: "text",
  password: "password",
};

// passwordTtype
export type PASSWORD = keyof typeof password;
type REQUIRED = {
  value: boolean;
  message: string;
};

type MINLENGTH = {
  value: number;
  message: string;
};

type PATTERN = {
  value: RegExp;
  message: string;
};
export type InputProps = {
  type: string;
  errors: any;
  label: Path<FormValues>;
  name: FORMVALUEOBJECT;
  register: UseFormRegister<FormValues>;
  placeholder: string;
  required?: REQUIRED;
  minLength?: MINLENGTH;
  pattern?: PATTERN;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isEyeShow?: boolean;
  isReEyeShow?: boolean;
};
