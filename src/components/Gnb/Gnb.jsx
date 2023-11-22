import { useState, useEffect } from 'react';
import { getUser } from 'apis/api';
import * as S from "./Gnb.style";
import logoImg from "assets/images/logo.svg";
import Button from 'components/Button';

function Gnb() {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState();

  const getUserData = async () => {
    const result = await getUser();
    const { data } = result;
    setUserData(data[0]);
    setIsLogin(!isLogin);
  }

  const profileImage = userData?.image_source;
  const profileAccount = userData?.email;

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo src={logoImg} alt="로고 이미지" />
        {isLogin ?
          <S.ProfileWrapper>
            <S.ProfileImage src={profileImage} alt="프로필 이미지"/>
            <S.ProfileAccount>{profileAccount}</S.ProfileAccount>
          </S.ProfileWrapper>
          : <Button>로그인</Button>
        }

      </S.Wrapper>
    </S.Container>
  );
}

export default Gnb;
