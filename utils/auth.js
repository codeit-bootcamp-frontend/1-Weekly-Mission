const passwordToggle = document.querySelector(".auth__toggle-password");
passwordToggle.addEventListener("click", () => {
	const passwordInput = document.querySelector(".auth__input-password");
	const passwordIcon = document.querySelector(".auth__icon-password");

	if (passwordInput.type === "password") {
		passwordInput.type = "text";
		passwordIcon.src = "/public/icons/password-visible.svg";
		passwordIcon.alt = "비밀번호 보이기 아이콘";
	} else {
		passwordInput.type = "password";
		passwordIcon.src = "/public/icons/password-invisible.svg";
		passwordIcon.alt = "비밀번호 숨김 아이콘";
	}
});

const passwordConfirmToggle = document.querySelector(
	".auth__toggle-password--confirm"
);
passwordConfirmToggle.addEventListener("click", () => {
	const passwordConfirmInput = document.querySelector(
		".auth__input-password--confirm"
	);
	const passwordConfirmIcon = document.querySelector(
		".auth__icon-password--confirm"
	);

	if (passwordConfirmInput.type === "password") {
		passwordConfirmInput.type = "text";
		passwordConfirmIcon.src = "/public/icons/password-visible.svg";
		passwordConfirmIcon.alt = "비밀번호 보이기 아이콘";
	} else {
		passwordConfirmInput.type = "password";
		passwordConfirmIcon.src = "/public/icons/password-invisible.svg";
		passwordConfirmIcon.alt = "비밀번호 숨김 아이콘";
	}
});
