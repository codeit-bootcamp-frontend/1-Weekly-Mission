import * as Styled from "../style/ProfileImg";

function ProfileImg({ src }) {
  return (
    <Styled.Box>
      <Styled.Image src={src} alt="profile" />
    </Styled.Box>
  );
}

export default ProfileImg;
