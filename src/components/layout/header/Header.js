import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";

import * as style from "./HeaderStyle";
import logo from "assets/logo.svg";
import { getUser } from "api/api";

export default function Header() {
  const [user, setUser] = useState(null);
  const { isLoading, error, wrappedFunction: getUserAsyncFunc } = useFetch(getUser);

  const handleUserData = async () => {
    const result = await getUserAsyncFunc();
    // if (error) console.log(error);
    if (!result) return;

    setUser(result);
  };

  if (error) console.log(error);

  useEffect(() => {
    handleUserData();
  }, []);

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
