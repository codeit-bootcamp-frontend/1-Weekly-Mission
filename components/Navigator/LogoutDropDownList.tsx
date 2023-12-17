import { RefObject } from "react";
import ModalPortal from "@/lib/utils/Portal";
import { useLogin } from "@/lib/utils/AuthContext";
import * as Styled from "./LoginBtn.styled";

interface Props {
  anchorRef: RefObject<HTMLDivElement>;
}

function LogoutDropDownList({ anchorRef }: Props) {
  const { logOut } = useLogin();

  return (
    <ModalPortal container={anchorRef.current}>
      <Styled.Ul>
        <li>
          <Styled.Button onClick={logOut}>로그아웃</Styled.Button>
        </li>
      </Styled.Ul>
    </ModalPortal>
  );
}

export default LogoutDropDownList;
