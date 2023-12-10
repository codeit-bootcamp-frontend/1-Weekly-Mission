import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { UserData } from "@/lib/Type";

interface HeaderProps {
  userData: UserData;
}

export default function Header({ userData }: HeaderProps) {
  return (
    <header>
      <GNB>
        <Container>
          <h1>
            <Link href="/">
              <LogoImage
                src="/images/logo.svg"
                alt="Linkbrary 로고"
                width={133}
                height={24}
              />
            </Link>
          </h1>
          {!userData?.email ? (
            <Button href="/signin">로그인</Button>
          ) : (
            <Profile>
              <ProfileImg
                className="profile__img"
                src={userData?.profileImageSource || "/images/profileImg.png"}
                width={28}
                height={28}
                alt="유저 프로필 이미지"
              />
              <Email>{userData?.email}</Email>
            </Profile>
          )}
        </Container>
      </GNB>
    </header>
  );
}

const GNB = styled.nav`
  z-index: 1;

  position: fixed;
  top: 0;

  width: 100%;
  height: 6.3rem;
  padding: 1.3rem 3.2rem;

  background-color: var(--linkbrary-bg);

  @media (min-width: 768px) {
    height: 9.4rem;
    padding: 3.2rem 20rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoImage = styled(Image)`
  width: 8.8rem;
  height: fit-content;
  padding-bottom: 1.6rem;

  @media (min-width: 768px) {
    width: 13.3rem;
  }
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 12.8rem;
  height: fit-content;
  padding: 1.6rem 2rem;

  font-size: 1.8rem;
  font-weight: 600;

  color: #f5f5f5;
  background-image: linear-gradient(135deg, #6d6afe 0%, #6ae3fe 100%);

  border-radius: 0.8rem;

  @media (max-width: 767px) {
    width: 8rem;
    font-size: 1.4rem;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled(Image)`
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 0.6rem;
  border-radius: 50%;
`;

const Email = styled.span`
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--gray-100);
`;
