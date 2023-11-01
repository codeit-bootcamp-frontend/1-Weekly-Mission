import * as S from "./Profile.style";

function Profile({ data }) {
  const { name, email, profileImageSource, image_source } = data;

  return (
    <S.ProfileContainer>
      <img src={image_source || profileImageSource} alt={name}></img>
      <p>{email}</p>
    </S.ProfileContainer>
  );
}

export default Profile;
