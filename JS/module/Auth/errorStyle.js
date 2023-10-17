export const EMAIL_EMPTY = '아이디를 입력해주세요.'
export const EMAIL_NOT_VALID = '올바른 이메일 주소가 아닙니다.'
export const EMAIL_OCCUPIED = '이미 사용중인 이메일입니다.'
export const PASSWORD_EMPTY = '비밀번호를 입력해주세요.'
export const PASSWORD_NOT_VALID = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
export const PASSWORD_NOT_SAME = '비밀번호가 일치하지 않아요.'

export function errorStyle(inputTag, errorTag, message){;
  inputTag.classList.add('red_border'); 
  errorTag.classList.add('show');
  errorTag.textContent = message; 
}

export function removeErrorStyle(inputTag, errorTag){
  inputTag.classList.remove('red_border')
  errorTag.classList.remove('show');
}

