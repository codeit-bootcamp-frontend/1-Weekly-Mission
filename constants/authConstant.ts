export const checkEmailText = "이메일을 확인해주세요.";
export const checkPwText = "비밀번호를 확인해주세요.";

export const emailPattern = {
  value: new RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  ),
  message: "올바른 이메일 주소가 아닙니다.",
};

export const passwordPattern = {
  value: new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/),
  message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
};
