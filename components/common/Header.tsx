import { styled } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/public/assets/images/logo.svg';
import Profile from '@/components/common/Profile';
import Button from '@/components/common/Button';
import useGetUser from '@/hooks/useGetUser';
import useGetSampleUser from '@/hooks/useGetSampleUser';
import { DEVICE_SIZE } from '@/lib/styles/DeviceSize';
import { checkToken } from '@/lib/utils/checkToken';

interface Props {
  page: string;
}

function Header({ page = '' }: Props) {
  const sampleuser = useGetSampleUser();
  const user = useGetUser(1);
  const userData = page === 'shared' ? sampleuser : user;
  const isAlreadyLogin = checkToken(true);

  return (
    <Outer $page={page}>
      <Container>
        <Link href="/" target="_blank">
          <LogoImg src={logoImg} alt="Linkbrary 메인 페이지 바로가기" width={133} height={24} />
        </Link>
        {isAlreadyLogin && userData ? (
          <Profile user={userData} />
        ) : (
          <Link href="/signin">
            <Button type="login">로그인</Button>
          </Link>
        )}
      </Container>
    </Outer>
  );
}

export default Header;

const Outer = styled.header<{ $page: string }>`
  width: 100%;
  padding: 20px 200px;
  background: var(--bg);
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
  position: ${({ $page }) => ($page === 'shared' ? 'fixed' : null)};

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 20px 32px;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    padding: 13px 32px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    max-width: 799px;
  }
`;

const LogoImg = styled(Image)`
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 90px;
    height: 18px;
  }
`;
