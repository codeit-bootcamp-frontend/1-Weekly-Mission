import React from 'react'
import * as S from './ProfileStyle'

function Profile({ email, profileImage }) {
  return (
    <S.Profile>
      <S.ProfileImg src={profileImage} alt="프로필 사진" />
      <S.ProfileEmail className="flex-center">{email}</S.ProfileEmail>
    </S.Profile>
  )
}

export default Profile
