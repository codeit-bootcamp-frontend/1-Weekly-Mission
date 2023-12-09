import styled from "styled-components";
import SignupContainer from "@/containers/Member/SignupContainer";
import useLoggedIn from "@/hooks/userLoggedIn";

const SignupPage = () => {
  useLoggedIn();

  return (
    <StyledBackground>
      <SignupContainer />
    </StyledBackground>
  );
};

export default SignupPage;

const StyledBackground = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: var(--linkbrary-bg);
`;
