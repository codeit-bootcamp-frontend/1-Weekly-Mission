import { useRouter } from "next/router";
import { RefObject } from "react";
import ModalPortal from "@/lib/utils/Portal";
import { useLogin } from "@/lib/utils/LoginContext";
import { removeLocalStorage } from "@/lib/utils/localStorage";
import * as Styled from "./LoginBtn.styled";

interface Props {
  anchorRef: RefObject<HTMLDivElement>;
}

function LogoutDropDownList({ anchorRef }: Props) {
  const { setIsLogin } = useLogin();
  const route = useRouter();

  const handleLogOutClick = () => {
    removeLocalStorage();
    setIsLogin(false);
    route.push("/");
  };

  return (
    <ModalPortal container={anchorRef.current}>
      <Styled.Ul>
        <li>
          <Styled.Button onClick={handleLogOutClick}>로그아웃</Styled.Button>
        </li>
      </Styled.Ul>
    </ModalPortal>
  );
}

export default LogoutDropDownList;
