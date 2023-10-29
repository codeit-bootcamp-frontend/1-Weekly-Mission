import styled from "styled-components";
import defaultUserIcon from "../../images/defaultProfileImage.png";
import NavAvatarImage from "../atoms/NavAvatarImage";
import DeviceSizes from "../../utils/DeviceSizes";
import { Link } from "react-router-dom";
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.6rem;
  height: 2.8rem;
  & p {
    color: #373740;
    font-size: 1.4rem;
    ${DeviceSizes.mobile} {
      display: none;
    }
  }
`;

const UserInfo = ({ userProfileImg = defaultUserIcon, userEmail }) => {
  return (
    <>
      <Link to="/folder">
        <StyledDiv>
          <NavAvatarImage src={userProfileImg} alt="프로필 사진" />
          <p>{userEmail}</p>
        </StyledDiv>
      </Link>
    </>
  );
};

export default UserInfo;
