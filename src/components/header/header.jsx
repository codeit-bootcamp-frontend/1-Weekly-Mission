import * as S from "./header.style.js";
import logoIconSrc from "assets/icons/logo.svg";
import profileIconSrc from "assets/icons/profile.svg";
import { useUserProfileContext } from "contexts/UserProfileContext.js";

export default function Header({ email }) {
  const { userProfile } = useUserProfileContext();
  return (
    <S.HeaderWrapper>
      <S.HeaderNav role="navigation">
        <S.HeaderHomeButton>
          <img
            src={logoIconSrc}
            alt="링크브러리 로고 이미지"
            aria-label="링크브러리 로고"
            width="133"
          />
        </S.HeaderHomeButton>

        {userProfile.email ? (
          <S.HeaderProfileButton>
            <S.ProfileIcon
              src={profileIconSrc}
              alt="프로필 아이콘"
              width="28"
              height="28"
            />
            <S.ProfileEmail>{userProfile.email}</S.ProfileEmail>
          </S.HeaderProfileButton>
        ) : (
          <S.HeaderSignInButton>로그인</S.HeaderSignInButton>
        )}
      </S.HeaderNav>
    </S.HeaderWrapper>
  );
}
