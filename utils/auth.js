import { PASSWORD_TOGGLE_CONSTANT } from "/utils/constants.js";

// 비밀번호 토글
function getPasswordVisibility(inputType) {
	return inputType === "password"
		? PASSWORD_TOGGLE_CONSTANT.visible
		: PASSWORD_TOGGLE_CONSTANT.invisible;
}

export { getPasswordVisibility };
