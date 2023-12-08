import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import axios from "@/lib/axios";
import logoImg from "@/src/assets/logo.png";
import theme from "@/styles/display";
import * as S from "./Nav.style";
import { useState, useEffect } from "react";

type Data = {
  image_source?: string; 
  email?: string;
}

export default function Nav( {data} : {data ?: Data}) {

  return (
    <ThemeProvider theme={theme}>
      <S.Nav>
        <Image src={logoImg} alt="logo" width={133} height={24}></Image>
        <S.Inform>
          {data?.image_source && <S.Profile src={data.image_source} />}
          {data?.email ? (
            <span>{data.email}</span>
          ) : (
            <Link href="/signin">로그인</Link>
          )}
        </S.Inform>
      </S.Nav>
    </ThemeProvider>
  );
}
