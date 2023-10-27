import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <style.Logo src={logo} alt="logo" />
        </Link>
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
