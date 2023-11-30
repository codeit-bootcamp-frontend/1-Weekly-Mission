import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSampleUser, getUserProfile } from "pages/api/api";
import { useCallback, useEffect, useState } from "react";
import Logo from "src/assets/icon/logo.svg";
import styles from "src/components/Header/Header.module.css";
import Login from "src/components/Login/Login";
import styled from "styled-components";

function Header() {
  const [user, setUser] = useState<UserData | undefined>(undefined);
  const pathname = usePathname();
  const sharedPage = pathname === "/shared";

  const loginInfo = useCallback(async () => {
    const headerResult = sharedPage
      ? await getSampleUser()
      : await getUserProfile();
    if (!headerResult) return;

    if (sharedPage) {
      setUser(headerResult);
    } else {
      const { data } = headerResult;
      setUser(data[0]);
    }
  }, [sharedPage]);

  useEffect(() => {
    loginInfo();
  }, [loginInfo]);

  const { id, email, profileImageSource, image_source } = user || {};

  return (
    <header className={styles.header}>
      <StyledNav $pathname={pathname}>
        <Link href="/">
          <Image src={Logo} alt="로고 이미지" />
        </Link>
        {id !== undefined ? (
          <div className={styles.profile}>
            <Image
              width={45}
              height={45}
              src={profileImageSource ?? image_source ?? ""}
              alt="프로필 이미지"
            />
            <p className={styles.email}>{email}</p>
          </div>
        ) : (
          <Login />
        )}
      </StyledNav>
    </header>
  );
}

export default Header;

const StyledNav = styled.nav<{ $pathname: string }>`
  width: 100%;
  display: flex;
  position: ${({ $pathname }) =>
    $pathname === "/shared" ? "fixed" : "static"};
  padding: 3.3rem 20rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  @media (max-width: 1199px) {
    padding: 2rem 3.2rem;
    margin: 0 auto;
  }
  @media (max-width: 767px) {
    padding: 2rem 3.2rem;
    margin: 0 auto;
  }
`;
