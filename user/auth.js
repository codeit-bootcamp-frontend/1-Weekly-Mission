const REGEX = {
	"user-email":
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	"user-password": /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
};

const ERROR_MSG = {
	"user-email": {
		empty: "이메일을 입력해주세요.",
		wrong: "올바른 이메일 주소가 아닙니다.",
		check: "이메일을 확인해주세요",
	},
	"user-password": {
		empty: "비밀번호를 입력해주세요.",
		wrong: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
		check: "비밀번호를 확인해주세요",
	},
};

const ERROR_MSG_CLASS = {
	msg: "form__warning-message",
	input: "form__input--warning",
};

const PASSWORD_VIEW_MODE = {
	on: {
		current: "on",
		next: "off",
		type: "password",
	},
	off: {
		current: "off",
		next: "on",
		type: "text",
	},
};

const USER = {
	"test@ddd.com": "testtesttes1t",
	"test@codeit.com": "codeit101",
};

// 인풋 focustout시 유효성검사
const validateInput = ({ tagName, id, value, parentNode, classList }) => {
	if (tagName !== "INPUT") return;

	const isValid = REGEX[id].test(value) && value.length > 0;
	const msgType = isValid ? "" : value.length ? "wrong" : "empty";

	toggleError(parentNode, classList, ERROR_MSG[id][msgType]);
};

//에러 메시지 삭제
const removeError = (parentNode, classList) => {
	const [existingErrorMsg] = parentNode
		.closest(".form__field")
		.getElementsByClassName(ERROR_MSG_CLASS.msg);

	if (!existingErrorMsg) return;

	existingErrorMsg.remove();
	classList.remove(ERROR_MSG_CLASS.input);
};

//에러 메시지 생성
const showError = (parentNode, classList, errorText) => {
	const errorMsg = document.createElement("p");

	errorMsg.classList.add(ERROR_MSG_CLASS.msg);
	errorMsg.textContent = errorText;

	classList.add(ERROR_MSG_CLASS.input);
	parentNode.insertAdjacentElement("afterend", errorMsg);
};

//에러 메시지 생성,삭제 토글
const toggleError = (parentNode, classList, errorText) => {
	removeError(parentNode, classList);
	if (errorText) showError(parentNode, classList, errorText);
};

//비밀번호 인풋 password <-> text 토글
const togglePasswordInput = ({ target }) => {
	if (!target.classList.contains("form__eye-icon")) return;

	const viewMode = target.src.includes("off")
		? PASSWORD_VIEW_MODE.off
		: PASSWORD_VIEW_MODE.on;

	const input = target.previousElementSibling;

	target.src = target.src.replace(viewMode.current, viewMode.next);
	input.type = viewMode.type;
};

//유저 정보 확인 임시
const isValidUser = ([email, password]) => USER[email.value] === password.value;

//로그인 폼 전송
const authFormLogin = () => {
	const inputArr = authForm.querySelectorAll("#user-email, #user-password");
	if (isValidUser(inputArr)) authForm.submit();
	else {
		inputArr.forEach(({ parentNode, classList, id }) =>
			toggleError(parentNode, classList, ERROR_MSG[id].check)
		);
	}
};

const authForm = document.querySelector(".auth__form");

authForm.addEventListener(
	"focusout",
	({ target, relatedTarget }) =>
		//로그인 버튼 누를때도 focusout 되버려서 submit할땐 실행안되도록...
		relatedTarget?.type !== "submit" && validateInput(target)
);

authForm.addEventListener("click", togglePasswordInput);

document
	.querySelector(".auth__button")
	.addEventListener("click", authFormLogin);
