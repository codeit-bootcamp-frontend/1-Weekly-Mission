import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { LoginButton, Logo } from "@/components";
import { UserData } from "@/lib/types/data";
import * as Styled from "./NavBar.styled";

interface Props {
  data: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
}

const Navigator = ({ data, setUserData }: Props) => {
  const router = useRouter();
  const location = router.pathname.split("/")[1]
    ? router.pathname.split("/")[1]
    : "/";

  return (
    <Styled.Nav $location={location}>
      <Styled.Box>
        <Logo />
        <LoginButton data={data} setUserData={setUserData} />
      </Styled.Box>
    </Styled.Nav>
  );
};

export default Navigator;
