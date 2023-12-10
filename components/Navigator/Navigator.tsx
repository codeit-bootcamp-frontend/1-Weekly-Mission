import { useRouter } from "next/router";
import { LoginButton, Logo } from "@/components";
import * as Styled from "./NavBar.styled";

const Navigator = () => {
  const router = useRouter();
  const location = router.pathname.split("/")[1]
    ? router.pathname.split("/")[1]
    : "/";

  return (
    <Styled.Nav $location={location}>
      <Styled.Box>
        <Logo />
        <LoginButton />
      </Styled.Box>
    </Styled.Nav>
  );
};

export default Navigator;
