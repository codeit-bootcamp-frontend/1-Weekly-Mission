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

//도메인 주소 
const domain = "https://bootcamp-api.codeit.kr";

//export
export { emailCheck, passwordCheck, domain}