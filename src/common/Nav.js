import React, { useEffect, useState } from "react";
import "./Nav.css";
import { getUsers } from "../api";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as Person } from "../assets/Person.svg";
import { ReactComponent as Login } from "../assets/Login.svg";

const ResponSiveNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.2rem;
  background-color: #edf7ff;
  height: 7rem;
  /* tablet */
  @media (min-width: 768px) {
    height: 9.5rem;
  }
  /* descktop*/
  @media (min-width: 1200px) {
    padding: 0 20rem;
    height: 9.5rem;
  }
`;

const ResponSiveProfie = styled.div`
  display: flex;
  align-items: center;
`;
export default function Nav() {
  const [isUser, setIsUser] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const handlUserDate = async () => {
    const { email } = await getUsers();
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
      <ResponSiveNavbar>
        <Logo />
        <ResponSiveProfie>
          {isUser ? <Person /> : <Login />}
          {isUser && <span className="user-email">{userEmail}</span>}
        </ResponSiveProfie>
      </ResponSiveNavbar>
    </div>
  );
}
