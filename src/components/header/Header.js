import * as style from "./HeaderStyle";
import logo from "assets/logo.svg";

export default function Header({ user, isLoading }) {
  return (
    <style.Wrapper>
      <style.Container>
        <style.Logo src={logo} alt="logo" />
        <nav>
          {isLoading ? (
            <style.LoginBtn>로그인</style.LoginBtn>
          ) : (
            <style.Navbar>
              <style.ProfileImage src={user?.profileImageSource} />
              <style.ProfileEmail>{user?.email}</style.ProfileEmail>
            </style.Navbar>
          )}
        </nav>
      </style.Container>
    </style.Wrapper>
  );
}
