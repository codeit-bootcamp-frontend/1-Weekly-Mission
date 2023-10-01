// Signin, Signup 비밀번호 토글
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
const passwordToggle = document.querySelector(".auth__toggle-password");
const passwordConfirmToggle = document.querySelector(
	".auth__toggle-password--confirm"
);

passwordToggle.addEventListener("click", () => {
	const passwordInput = document.querySelector(".auth__input-password");
	const passwordIcon = document.querySelector(".auth__icon-password");

	if (passwordInput.type === "password") {
		passwordInput.type = PASSWORD_TOGGLE_CONSTANT.visible.inputType;
		passwordIcon.src = PASSWORD_TOGGLE_CONSTANT.invisible.imageSrc;
		passwordIcon.alt = PASSWORD_TOGGLE_CONSTANT.invisible.imageAlt;
	} else {
		passwordInput.type = PASSWORD_TOGGLE_CONSTANT.invisible.inputType;
		passwordIcon.src = PASSWORD_TOGGLE_CONSTANT.visible.imageSrc;
		passwordIcon.alt = PASSWORD_TOGGLE_CONSTANT.visible.imageAlt;
	}
});

passwordConfirmToggle?.addEventListener("click", () => {
	const passwordConfirmInput = document.querySelector(
		".auth__input-password--confirm"
	);
	const passwordConfirmIcon = document.querySelector(
		".auth__icon-password--confirm"
	);

	if (passwordConfirmInput.type === "password") {
		passwordInput.type = PASSWORD_TOGGLE_CONSTANT.visible.inputType;
		passwordIcon.src = PASSWORD_TOGGLE_CONSTANT.invisible.imageSrc;
		passwordIcon.alt = PASSWORD_TOGGLE_CONSTANT.invisible.imageAlt;
	} else {
		passwordInput.type = PASSWORD_TOGGLE_CONSTANT.invisible.inputType;
		passwordIcon.src = PASSWORD_TOGGLE_CONSTANT.visible.imageSrc;
		passwordIcon.alt = PASSWORD_TOGGLE_CONSTANT.visible.imageAlt;
	}
});
