import Avatar from "@/components/Nav/Avatar/Avatar";
import Logo from "@/components/Nav/Avatar/Logo";
import { Button } from "@/components/Nav/Avatar/SignButton.styled";
import { Background, Nav } from "@/components/Nav/Navigation.styled";
import Link from "next/link";

interface Props {
  id?: number;
  setIsUser?: React.Dispatch<React.SetStateAction<boolean>>;
  page?: string;
}

export default function Navigation({ id, setIsUser, page = "" }: Props) {
  return (
    <>
      <Background />
      <Nav page={page}>
        <Logo src="/logo.svg" alt="링크브러리 홈화면으로 이동" />
        {page === "/" ? (
          <Button>
            <Link href="/signin">로그인</Link>
          </Button>
        ) : (
          <Avatar id={id} setIsUser={setIsUser} />
        )}
      </Nav>
    </>
  );
}
