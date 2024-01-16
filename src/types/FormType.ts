// 회원가입 react hook form 폼 타입
export interface SignupFormType {
  email: string;
  password: string;
  passwordRepeat: string;
}

// 로그인 react hook form 폼 타입
export interface SigninFormType {
  email: string;
  password: string;
}

// 폴더 생성, 폴더 이름 변경 react hook form 폼 타입
export interface FolderAddFormType {
  name: string;
}
