import React from "react";
import logoImage from "/public/icon/logo.svg";
import Image from "next/image";
import styled from "styled-components";

const LoginWrapper = styled.div`
  background: #f0f6ff;
  height: 100%;
`;

function Login() {
  return (
    <LoginWrapper>
      <Image src={logoImage} width={210} height={38} alt="logo" />
    </LoginWrapper>
  );
}

export default Login;
