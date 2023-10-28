import * as S from "./header.style.js";
import logoImgSource from "assets/icons/logo.svg";
import profileImgSource from "assets/icons/profile.svg";

export default function HeaderComponent({ email }) {
  return (
    <S.HeaderWrapper>
      <S.HeaderNav role="navigation">
        <S.HeaderHomeButton>
          <img
            src={logoImgSource}
            alt="링크브러리 로고 이미지"
            aria-label="링크브러리 로고"
            width="133"
          />
        </S.HeaderHomeButton>

        {email ? (
          <S.HeaderProfileButton>
            <S.ProfileIcon
              src={profileImgSource}
              alt="프로필 아이콘"
              width="28"
              height="28"
            />
            <S.ProfileEmail>{email}</S.ProfileEmail>
          </S.HeaderProfileButton>
        ) : (
          <S.HeaderSignInButton>로그인</S.HeaderSignInButton>
        )}
      </S.HeaderNav>
    </S.HeaderWrapper>
  );
}
