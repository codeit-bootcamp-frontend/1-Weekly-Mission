export const EMPTY_EMAIL = '이메일을 입력해주세요.'
export const NO_VALID_EMAIL = '올바른 이메일 주소가 아닙니다.' 
export const EXIST_EMAIL = '이미 존재하는 이메일입니다.' 
export const CHECK_EMAIL = '이메일을 확인해 주세요.' 

export const EMPTY_PW = '비밀번호를 입력해주세요.' 
export const NO_VALID_PW = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.' 
export const NO_SAME_PW = '비밀번호가 일치하지 않습니다.' 
export const CHECK_PW = '비밀번호를 확인해 주세요.' 

//에러 메세지 삭제 함수
// function deleteErrorMsg(...msg) {
//   for (const arg of msg) {
//     const errorMsg = document.querySelector(arg);
//     if (errorMsg) errorMsg.remove();
//   }
// }

//에러 메세지 생성 함수
function createErrorMsg(tempPwDiv,span, spanName, divName, inputName, msg, ...rest) {
  if (tempPwDiv.children.length !== 2) {tempPwDiv.lastElementChild.remove()}
  spanName = document.createElement(span);
  for (const el of rest) {
    spanName.classList.add(el);
  }
  spanName.innerText = msg;
  divName.append(spanName);
  inputName.style.border = '1px solid red';
}

export { createErrorMsg };
