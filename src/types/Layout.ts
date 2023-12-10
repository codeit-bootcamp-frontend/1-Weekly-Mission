export interface AuthIntroType {
  memberStatus: string;
  linkTitle: string;
  link: string;
}

export interface AuthLayoutType extends AuthIntroType {
  submitBtnTitle: string;
  submitBtnLink: string;
  socialBtnTitle: string;
}
