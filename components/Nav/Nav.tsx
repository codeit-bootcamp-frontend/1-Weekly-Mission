import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import axios from "@/lib/axios";
import logoImg from "@/src/assets/logo.png";
import theme from "@/styles/display";
import * as S from "./Nav.style";
import { useState, useEffect } from "react";

interface Data {
  image_source?: string; 
  email?: string;
}

export default function Nav() {
  type User = {image_source?: string; email?: string};
  const [user, setUser] = useState<Data | undefined>();

  async function profile() {
    const result = await axios.get("users/1");
    const data = result.data.data[0];
    setUser(data);
  }

  useEffect(() => {
    profile();
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <S.Nav>
        <Image src={logoImg} alt="logo" width={133} height={24}></Image>
        <S.Inform>
          {user?.image_source && <S.Profile src={user.image_source} />}
          {user?.email ? (
            <span>{user.email}</span>
          ) : (
            <Link href="/login">로그인</Link>
          )}
        </S.Inform>
      </S.Nav>
    </ThemeProvider>
  );
}
