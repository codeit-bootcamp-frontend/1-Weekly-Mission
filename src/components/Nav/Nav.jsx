import React from 'react'
import * as S from './NavStyle'
import Profile from './Profile'

import logoImg from '../../assets/logo.png'
import { Button } from '../Button/ButtonStyle'

function Nav({ path, email, profileImageSource }) {
  return (
    <S.NavContainer path={path}>
      <S.NavContent className="container">
        <S.LogoImage src={logoImg} alt="로고 이미지" />

        {email && profileImageSource ? (
          <Profile email={email} profileImage={profileImageSource} />
        ) : (
          <Button>로그인</Button>
        )}
      </S.NavContent>
    </S.NavContainer>
  )
}

export default Nav
