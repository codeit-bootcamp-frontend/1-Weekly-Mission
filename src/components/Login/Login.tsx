import { Link } from "react-router-dom";
import "./Login.css";
import React from "react";

function Login() {
  return (
    <Link className="login" to="/">
      로그인
    </Link>
  );
}

export default Login;
