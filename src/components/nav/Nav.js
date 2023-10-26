import React, { useEffect, useState } from "react";
import { getUsersData } from "../../api/users";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Person } from "../../assets/images/person.svg";
import { ReactComponent as Login } from "../../assets/images/login.svg";
import Profile from "../profile/Profile";
import styles from "./Nav.module.css";
import useFetch from "../../hooks/useFetch";

const ResponSiveProfie = styled.div`
  display: flex;
  align-items: center;
`;

export default function Nav() {
  const [isUser, setIsUser] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  // const response = useFetch("https://bootcamp-api.codeit.kr/api/sample/user");
  // const [data, isLoading] = response;

  const handlUserDate = async () => {
    const { email } = await getUsersData();
    if (email) {
      setUserEmail(email);
      setIsUser(true);
      return;
    }
    setIsUser(false);
  };
  useEffect(() => {
    handlUserDate();
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <Logo />

        <ResponSiveProfie>
          {isUser ? <Person /> : <Login />}
          {isUser && <span className="user-email">{userEmail}</span>}
        </ResponSiveProfie>
      </div>
    </div>
  );
}
