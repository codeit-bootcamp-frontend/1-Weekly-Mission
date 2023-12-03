import Link from "next/link";
import {
  InputBoxContainer,
  SocialBoxContainer,
  UserContentWrapper,
  UserHeaderContainer,
  UserWrapper,
} from "./UserStyled";
import Image from "next/image";
import UserInput from "../input/UserInput";
import DefaultBtn from "../button/DefaultButton";
import LogoImg from "@/public/assets/common/img_logo.png";
import GoogleIcon from "@/public/assets/user/img_google.png";
import KakaoIcon from "@/public/assets/user/img_kakao.png";

interface IState {
  state: "signin" | "signup";
}

const User = ({ state }: IState) => {
  const handleSignin = () => {
    // 로그인 처리 필요
  };

  const handleSignup = () => {
    // 회원가입 처리 필요
  };

  return (
    <UserWrapper>
      <UserHeaderContainer>
        <Link href="/">
          <Image
            src={LogoImg}
            alt="logoImg"
            height="38"
            width="210"
            className="logoImg"
            priority
          />
        </Link>
        {state === "signin" ? (
          <div className="userContainer">
            <div className="userTitle">회원이 아닌신가요?</div>
            <Link className="moveToPage" href="/signup">
              회원 가입하기
            </Link>
          </div>
        ) : (
          <div className="userContainer">
            <div className="userTitle">이미 회원이신가요?</div>
            <Link className="moveToPage" href="/signin">
              로그인 하기
            </Link>
          </div>
        )}
      </UserHeaderContainer>

      <UserContentWrapper>
        <InputBoxContainer>
          <form>
            <UserInput label="email" placeholder="이메일을 입력해주세요." />
            <UserInput
              label="password"
              placeholder={
                state === "signin"
                  ? "비밀번호를 입력해주세요."
                  : "영문, 숫자를 조합해 8자 이상 입력해 주세요."
              }
            />
            {state === "signup" && (
              <UserInput
                label="passwordConfirm"
                placeholder="비밀번호와 일치하는 값을 입력해 주세요"
              />
            )}
            {state === "signin" ? (
              <DefaultBtn onClick={handleSignin} type="default">
                로그인
              </DefaultBtn>
            ) : (
              <DefaultBtn onClick={handleSignup} type="default">
                회원가입
              </DefaultBtn>
            )}
          </form>
        </InputBoxContainer>

        <SocialBoxContainer>
          <div className="boxTitle">
            {state === "signin" ? "소셜 로그인" : "다른 방식으로 가입하기"}
          </div>
          <div className="iconContainer">
            <Link href="https://www.google.com/" target="_blank">
              <Image className="socialIcon" src={GoogleIcon} alt="googleIcon" />
            </Link>
            <Link href="https://www.kakaocorp.com/page/" target="_blank">
              <Image className="socialIcon" src={KakaoIcon} alt="kakaoIcon" />
            </Link>
          </div>
        </SocialBoxContainer>
      </UserContentWrapper>
    </UserWrapper>
  );
};

export default User;
