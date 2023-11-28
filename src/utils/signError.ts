import postCheckEmail from "../apis/user/postCheckEmail";
import { isEmail, isPassword } from "./validation";

const errorText = {
  email: {
    null: "이메일을 입력해주세요",
    wrong: "올바른 이메일 주소가 아닙니다",
    dup: "이미 사용 중인 이메일입니다",
  },
  password: {
    null: "비밀번호를 입력해주세요",
    wrong: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요",
  },
  passwordCheck: {
    wrong: "비밀번호가 일치하지 않아요",
  },
};

interface Props {
  values: string;
  setErrorText: React.Dispatch<React.SetStateAction<string>>;
}

const signinEmail = ({ values, setErrorText }: Props) => {
  if (values === "") {
    setErrorText(errorText["email"]["null"]);
  } else if (!isEmail(values)) {
    setErrorText(errorText["email"]["wrong"]);
  } else {
    setErrorText("");
  }
};

const signinPassword = ({ values, setErrorText }: Props) => {
  if (values === "") {
    setErrorText(errorText["password"]["null"]);
  } else {
    setErrorText("");
  }
};

const signupEmail = async ({ values, setErrorText }: Props) => {
  if (values === "") {
    setErrorText(errorText["email"]["null"]);
  } else if (!isEmail(values)) {
    setErrorText(errorText["email"]["wrong"]);
  } else if (await postCheckEmail(values)) {
    setErrorText(errorText["email"]["dup"]);
  } else {
    setErrorText("");
  }
};

const signupPassword = ({ values, setErrorText }: Props) => {
  if (values === "") {
    setErrorText(errorText["password"]["null"]);
  } else if (!isPassword(values)) {
    setErrorText(errorText["password"]["wrong"]);
  } else {
    setErrorText("");
  }
};

// const signupPasswordCheck = ({ values, setErrorText }: Props) => {
//   if (values) {
//     setErrorText(errorText["passwordCheck"]["wrong"]);
//   } else {
//     setErrorText("");
//   }
// };

export { signinEmail, signinPassword, signupEmail, signupPassword };
