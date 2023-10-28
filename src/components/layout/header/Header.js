import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import { Link } from "react-router-dom";

import * as style from "./HeaderStyle";
import logo from "assets/logo.svg";
import { getUser } from "api/api";
import Button from "components/button/Button";

const USER_ID = 1;

export default function Header() {
  const [user, setUser] = useState(null);
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
    <style.Wrapper headerstyle={hideHeader}>
      <style.Container>
        <Link to="/">
          <style.Logo src={logo} alt="logo" />
        </Link>
        <nav>
          {isLoading ? (
            <Button size="large" label="로그인" />
          ) : (
            <style.Navbar>
              <style.ProfileImage src={user.image_source} />
              <style.ProfileEmail>{user.email}</style.ProfileEmail>
            </style.Navbar>
          )}
        </nav>
      </style.Container>
    </style.Wrapper>
  );
}
