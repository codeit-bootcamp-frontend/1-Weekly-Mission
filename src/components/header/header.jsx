import * as S from "./header.style.js";
import logoIconSrc from "assets/icons/logo.svg";
import profileIconSrc from "assets/icons/profile.svg";
import { useUserProfileContext } from "contexts/UserProfileContext.js";
import { useNavigate } from "react-router-dom";

export default function Header({ isHeaderFixed }) {
  const {
    userProfile: { image_source, email },
  } = useUserProfileContext();

  const navigate = useNavigate();

  return (
    <S.HeaderWrapper $isHeaderFixed={isHeaderFixed}>
      <S.HeaderNav role="navigation">
        <S.HeaderHomeButton
          aria-label="링크브러리 메인 페이지 이동 버튼"
          onClick={() => navigate("/")}
        >
          <img src={logoIconSrc} alt="링크브러리 로고 이미지" width="133" />
        </S.HeaderHomeButton>

        {email ? (
          <S.HeaderProfileButton>
            <S.ProfileIcon
              src={image_source ?? profileIconSrc}
              alt="내 프로필 아이콘 이미지"
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
