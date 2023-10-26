import * as S from "./Profile.style";

function Profile({ data }) {
  const { name, email, profileImageSource } = data;

  return (
    <S.ProfileContainer>
      <img src={profileImageSource} alt={name}></img>
      <p>{email}</p>
    </S.ProfileContainer>
  );
}

export default Profile;
