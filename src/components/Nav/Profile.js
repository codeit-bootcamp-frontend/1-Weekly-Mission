import S from "../styled"

function Profile({ email, profileImg }) {
  return (
    <S.DivProfile >
      <S.ImgProfile src={profileImg} alt="프로필 사진" />
      <S.SpanProfile >{email}</S.SpanProfile>
    </S.DivProfile>
  )
}

export default Profile