import styled from "styled-components";
import SigninContainer from "@/containers/Member/SigninContainer";
import useLoggedIn from "@/hooks/userLoggedIn";

const SigninPage = () => {
  useLoggedIn();

  return (
    <StyledBackground>
      <SigninContainer />
    </StyledBackground>
  );
};

export default SigninPage;

const StyledBackground = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: var(--linkbrary-bg);
`;
