import Avatar from "@/components/Nav/Avatar/Avatar";
import Logo from "@/components/Nav/Avatar/Logo";
import { Background, Nav, StyledLink } from "@/components/Nav/Navigation.styled";

interface Props {
  id?: number;
  setIsUser?: React.Dispatch<React.SetStateAction<boolean>>;
  $page?: string;
}

export default function Navigation({ id, setIsUser, $page = "" }: Props) {
  return (
    <>
      {/* <Background /> s*/}
      <Nav $page={$page}>
        <Logo src="/logo.svg" alt="링크브러리 홈화면으로 이동" />
        {$page === "/" ? <StyledLink href="/signin">로그인</StyledLink> : <Avatar id={id} setIsUser={setIsUser} />}
      </Nav>
    </>
  );
}
