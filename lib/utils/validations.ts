import { FocusEvent } from 'react';

const emailType = /[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/i;

/**
 * target으로 들어온 값이 비었는지 확인하는 함수
 */
export function isEmpty(target: HTMLInputElement): boolean {
  return !target.value;
}

/**
 * Email 유효성 검사하는 함수
 */
export function isNotValidEmail(target: HTMLInputElement): boolean {
  return !emailType.test(target.value);
}

export function validateEmail(event: FocusEvent<HTMLInputElement>) {
  if (isEmpty(event.target)) return '이메일을 입력해주세요.';
  if (isNotValidEmail(event.target)) return '올바른 이메일 주소가 아닙니다.';
  return '';
}

export function validatePassword(event: FocusEvent<HTMLInputElement>) {
  if (isEmpty(event.target)) return '비밀번호를 입력해주세요.';
  return '';
}
