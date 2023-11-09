import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import * as S from "./Nav.style.js";
import logoImg from "../../assets/logo.png";
import theme from "../../css/display.js";
import { profileRequestApi } from "../../api/requestApi.js";

export function Nav({ setIsError }) {
  const [user, setUser] = useState({});

  async function profile() {
    try {
      const profile = await profileRequestApi("users/1");
      setUser(profile);
    } catch (error) {
      setIsError(true);
    }
  }

  useEffect(() => {
    profile();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <S.Nav>
        <img src={logoImg} alt="logo"></img>
        <S.Inform>
          {user.image_source && <S.Profile src={user.image_source} />}
          {user.email ? (
            <span>{user.email}</span>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </S.Inform>
      </S.Nav>
    </ThemeProvider>
  );
}
