import * as S from "./Profile.style";

function Profile({ data }) {
  const { name, email, profileImageSource, image_source } = data;

  return (
    <S.Container>
      <S.Img src={image_source ?? profileImageSource} alt={name}></S.Img>
      <S.P>{email}</S.P>
    </S.Container>
  );
}

export default Profile;
