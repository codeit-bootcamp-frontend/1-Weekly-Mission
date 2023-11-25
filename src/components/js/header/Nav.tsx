import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAccount } from "../../../api/apiUrl";
import { AccountType } from "../../../types/AccountType";
import styled from "styled-components";
import Profile from "../NavProfile";
import logoImg from "../../../Assets/logo.svg";

function Nav() {
  const [account, setAccount] = useState<AccountType | null>(null);

  console.log(account);

  const handleLoad = async () => {
    const nextAccount = await getAccount();
    setAccount(nextAccount.data[0]);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <NavWrapper>
      <NavContainer>
        <NavLeft>
          <Link to="/">
            <NavLogo src={logoImg} alt={logoImg} />
          </Link>
        </NavLeft>
        <div className="Nav_right">
          {account?.email ? (
            <Profile className="Nav_profile" account={account} />
          ) : (
            <NavSignInButton to="/" className="Nav_signIn_button">
              로그인
            </NavSignInButton>
          )}
        </div>
      </NavContainer>
    </NavWrapper>
  );
}

export default Nav;

const NavWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 33px 200px 33px;

  @media screen and (max-width: 1199px) {
    max-width: 767px;
    padding: 33px 0px;
  }

  @media screen and (max-width: 767px) {
    padding: 18px 32px 17px;
  }
`;

const NavLeft = styled.div`
  @media screen and (max-width: 767px) {
    min-width: 100px;
  }
`;

const NavLogo = styled.img`
  width: 133px;
  height: 24px;

  @media screen and (max-width: 767px) {
    width: 88px;
    height: 16px;
  }
`;

const NavSignInButton = styled(Link)`
  display: block;
  width: 88px;
  padding: 16px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  font-size: 1.8rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    width: 48px;
    padding: 10px 16px;
    font-size: 1.4rem;
  }
`;
