export const EMAIL_MAP = {
  empty: {
    checker: isEmpty,
    message: "이메일을 입력해주세요",
    textColor: "red",
    borderColor: "3px solid red",
  },

  notValid: {
    checker: isEmailValid,
    message: "올바른 이메일 주소가 아닙니다",
    textColor: "red",
    borderColor: "3px solid red",
  },

  valid: {
    message: "",
    textColor: "",
    borderColor: "",
  },

  alreadyUsed: {
    message: "이미 사용 중인 이메일입니다",
    textColor: "red",
    borderColor: "3px solid red",
  },
  login: {
    message: "이메일를 확인해주세요",
    textColor: "red",
    borderColor: "3px solid red",
  },
};

export const PASSWORD_MAP = {
  empty: {
    checker: isEmpty,
    message: "비밀번호을 입력해주세요",
    textColor: "red",
    borderColor: "3px solid red",
  },

  notValid: {
    checker: isPasswordValid,
    message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요",
    textColor: "red",
    borderColor: "3px solid red",
  },

  valid: {
    message: "",
    textColor: "",
    borderColor: "",
  },
  login: {
    message: "비밀번호를 확인해주세요",
    textColor: "red",
    borderColor: "3px solid red",
  },
};

export const REPASSWORD_MAP = {
  empty: {
    checker: isEmpty,
    message: "비밀번호확인을 입력해주세요",
    textColor: "red",
    borderColor: "3px solid red",
  },

  notMatch: {
    checker: isPasswordMatch,
    message: "비밀번호가 일치하지 않습니다",
    textColor: "red",
    borderColor: "3px solid red",
  },

  valid: {
    message: "",
    textColor: "",
    borderColor: "",
  },
};

export function isEmpty(inputValue) {
  return inputValue.trim().length ? false : true;
}

export function isEmailValid(inputValue) {
  // @codeit.com 얘만 유효하다
  const re = /[a-zA-Z0-9]{2,10}@codeit\.com$/;
  const texts = inputValue.trim();
  return re.test(texts);
}

export function showErrorMessageEffect(input, errorMsgsLabel, state) {
  errorMsgsLabel.innerText = state.message;
  errorMsgsLabel.style.color = state.textColor;
  input.style.border = state.borderColor;
}

export function isPasswordValid(inputValue) {
  const texts = inputValue.trim();
  const atLeastOneCharacter = /[a-zA-z]{1,}/g;
  const atLeastOneNumber = /[0-9]{1,}/g;
  return (
    atLeastOneCharacter.test(texts) &&
    atLeastOneNumber.test(texts) &&
    texts.length > 8
  );
}
export function isPasswordMatch(passwordValue, rePasswordValue) {
  return passwordValue.trim() === rePasswordValue.trim();
}
export function isCodeItLogin(email, password) {
  return (
    email.value.trim() === "test@codeit.com" &&
    password.value.trim() === "codeit101"
  );
}

export function passwordVisibility(eye, passwordInput) {
  try {
    if (!eye) {
      throw new Error("not found eye icon");
    }
    if (!passwordInput) {
      throw new Error("not found password input");
    }
  } catch (error) {
    alert(error);
  } finally {
    if (eye.classList.contains("fa-eye")) {
      eye.classList.remove("fa-eye");
      eye.classList.add("fa-eye-slash");
      passwordInput.type = "password";
    } else if (eye.classList.contains("fa-eye-slash")) {
      eye.classList.remove("fa-eye-slash");
      eye.classList.add("fa-eye");
      passwordInput.type = "text";
    }
  }
}

export async function postData(host, path, body) {
  const url = `https://${host}/${path}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text-plain, */*",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(url, options);
  return response;
}
