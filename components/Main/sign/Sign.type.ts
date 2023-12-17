export interface Signin {
  signin?: boolean;
}

export interface InputType {
  type: "email" | "password" | "passwordCheck";
}

export type InputRef = {
  current: null;
  emBlur(): boolean;
  pwBlur(): boolean;
  pwChBlur(): boolean;
};
