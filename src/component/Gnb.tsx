import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../api";
import logo from "../assets/img/logo.svg";
import ProfileImg from "./ProfileImg";
import CTA from "./CTA";
import * as Styled from "../style/Gnb";

interface Props {
  isFixed?: boolean;
}

function Gnb({ isFixed }: Props) {
  const [userData, setUserData] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  async function getUserData() {
    try {
      const { id, email, name, image_source } = await getUser();
      setUserData({
        id,
        email,
        name,
        profile: image_source,
      });
      setIsLogin(true);
    } catch (error) {
      console.log(error);
      setIsLogin(false);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Styled.Header isFixed={isFixed ? true : false}>
        <Styled.HeaderContainer>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          {isLogin ? (
            <Styled.Div>
              <ProfileImg src={userData["profile"]} />
              <Styled.Span>{userData["email"]}</Styled.Span>
            </Styled.Div>
          ) : (
            <CTA href="/signin">로그인</CTA>
          )}
        </Styled.HeaderContainer>
      </Styled.Header>
    </>
  );
}

export default Gnb;
