import { LoginButton, Logo } from "components";
import * as Styled from "./StyledNavBar";

const Navigator = ({ isLogin, data, sticky }) => {
  return (
    <Styled.Nav sticky={sticky}>
      <Styled.Box>
        <Logo />
        <LoginButton isLogin={isLogin} data={data} />
      </Styled.Box>
    </Styled.Nav>
  );
};

export default Navigator;
