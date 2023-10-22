import { PASSWORD_TOGGLE_CONSTANT } from "/utils/constants.js";

function getPasswordVisibility(inputType) {
	return inputType === "password"
		? PASSWORD_TOGGLE_CONSTANT.visible
		: PASSWORD_TOGGLE_CONSTANT.invisible;
}

export { getPasswordVisibility };
