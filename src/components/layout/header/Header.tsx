import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import { Link } from "react-router-dom";

import * as S from "./HeaderStyle";
import logo from "assets/logo.svg";
import { getUser } from "api/api";
import Button from "components/button/Button";
import { User } from "types/user";

const USER_ID = 1;

export default function Header() {
  const [user, setUser] = useState<User>({
    email: "",
    image_source: "",
  });
  const { isLoading, error, wrappedFunction: getUserAsyncFunc } = useFetch(getUser);

  const handleUserData = async () => {
    const result = await getUserAsyncFunc(USER_ID);
    if (!result) return;

    const { data } = result;
    setUser(data[0]);
  };

  useEffect(() => {
    handleUserData();
  }, []);

  if (error) console.log(error);

  const hideHeader = location.pathname === "/folder";

  return (
    <S.Wrapper $headerstyle={hideHeader}>
      <S.Container>
        <Link to="/">
          <S.Logo src={logo} alt="logo" />
        </Link>
        <nav>
          {!isLoading && user ? (
            <S.Navbar>
              <S.ProfileImage src={user?.image_source} />
              <S.ProfileEmail>{user?.email}</S.ProfileEmail>
            </S.Navbar>
          ) : (
            <Button size="large" label="로그인" />
          )}
        </nav>
      </S.Container>
    </S.Wrapper>
  );
}
