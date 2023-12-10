export interface SignupForm {
  email: string;
  password: string;
  passwordCheck: string;
}

export type SubmitFormData = Omit<SignupForm, "passwordCheck">;

export type EmailData = Pick<SignupForm, "email">;
