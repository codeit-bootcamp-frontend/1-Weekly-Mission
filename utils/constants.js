// 로그인, 회원가입 폼 비밀번호 토글
const PASSWORD_TOGGLE_CONSTANT = {
	visible: {
		inputType: "text",
		imageSrc: "/public/icons/password-visible.svg",
		imageAlt: "비밀번호 보이기 아이콘",
	},
	invisible: {
		inputType: "password",
		imageSrc: "/public/icons/password-invisible.svg",
		imageAlt: "비밀번호 숨김 아이콘",
	},
};

// 로그인, 회원가입
const USERS = [
	{
		email: "test@codeit.com",
		password: "codeit101",
	},
];

const AUTH_HINT = {
	email: {
		default: "",
		isNotFilled: "이메일을 입력해주세요.",
		isNotValidated: "올바른 이메일 주소가 아닙니다.",
		isNotExists: "이메일을 변경해주세요.",
		isExists: "이미 사용중인 이메일입니다.",
	},
	password: {
		default: "",
		isNotFilled: "비밀번호를 입력해주세요.",
		isNotCorrect: "비밀번호를 변경해주세요.",
		isNotValidated: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
		isNotConfirmed: "비밀번호가 일치하지 않아요.",
	},
};

const EMAIL_PATTERN = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

const INPUT_STATUS = {
	default: "default",
	isNotFilled: "isNotFilled",
	isNotValidated: "isNotValidated",
	isExists: "isExists",
	isNotExists: "isNotExists",
	isNotConfirmed: "isNotConfirmed",
	isNotCorrect: "isNotCorrect",
};

const INPUT_HINT_CLASSNAME = "auth__input--hint";

const FOLDER_PAGE_PATH = "/pages/forder.html";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export {
	PASSWORD_TOGGLE_CONSTANT,
	USERS,
	AUTH_HINT,
	EMAIL_PATTERN,
	PASSWORD_PATTERN,
	INPUT_STATUS,
	INPUT_HINT_CLASSNAME,
	FOLDER_PAGE_PATH,
	BASE_URL,
};
