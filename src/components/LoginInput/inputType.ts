const inputTypes = [
  {
    label: '이메일',
    id: 'email',
    placeholder: '이메일을 입력해 주세요.',
    Regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: '올바른 이메일 주소가 아닙니다.',
    confirm: '이메일을 확인해주세요',
  },
  {
    label: '비밀번호',
    id: 'password',
    placeholder: '비밀번호를 입력해 주세요.',
    Regex: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
    message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.',
    confirm: '비밀번호를 확인해 주세요',
  },
  {
    label: '비밀번호 확인',
    id: 'passwordCheck',
    placeholder: '비밀번호를 입력해 주세요.',
    confirm: '비밀번호가 일치하지 않아요.',
  },
];

export default function inputType(type: string) {
  return inputTypes.find((input) => input.id === type);
}
