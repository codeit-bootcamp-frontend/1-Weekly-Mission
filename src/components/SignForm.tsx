import * as S from "./SignFormStyles";

export default function SignupForm() {
  return (
    <S.Form>
      <S.Label>이메일</S.Label>
      <S.Input id="email" placeholder="이메일을 입력해주세요." type="text" autoComplete="off" />
      <S.ErrorMessage></S.ErrorMessage>
      <S.Label>비밀번호</S.Label>
      <div>
        <S.Input
          id="password"
          placeholder="비밀번호를 입력해주세요."
          type="password"
          autoComplete="off"
        />
        {/* <img class="form__input--selected" src="images/eye-off.svg" alt="비밀번호 숨기기 기능" /> */}
      </div>
      <S.ErrorMessage></S.ErrorMessage>
      <S.Label>비밀번호 확인</S.Label>
      <div>
        <S.Input
          id="passwordCheck"
          placeholder="비밀번호를 한번 더 입력해주세요."
          type="password"
          autoComplete="off"
        />
        {/* <img class="form__input--selected" src="images/eye-off.svg" alt="비밀번호 숨기기 기능" /> */}
      </div>
      <S.ErrorMessage></S.ErrorMessage>
      <S.FormButton>회원가입</S.FormButton>
    </S.Form>
  );
}
