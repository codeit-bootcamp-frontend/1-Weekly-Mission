

//올바른 이메일 확인 함수(구글링)
function emailCheck(email) {
	const emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return emailReg.test(email);
}

//올바른 패스워드 확인 함수
function passwordCheck(password) {
	const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
	return passwordReg.test(password);
}

//에러 메세지 발생 시 사용할 함수//
function error_occur (input, input_check, message) {
  input.classList.add("error_box")
  input_check.classList.add("check_message")
  input_check.innerHTML = message
}

//에러 메세지 소멸 시 사용할 함수(조건 만족 시)//
function error_disappear (input, input_check) {
  input.classList.remove("error_box")
  input_check.classList.remove("check_message")
  input_check.innerHTML = ""
}


//export
export {emailCheck, passwordCheck, error_occur, error_disappear}