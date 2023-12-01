import Logo from "./Logo";
import { reduceData, useReduce } from "@/hooks/useData";
import { getData } from "@/utils/getData";
import { URLS } from "@/utils/getData.type";
import Profile from "@/components/Nav/Profile";
import SignButton from "@/components/Nav/SignButton";
import { Backgorund, Nav } from "@/components/Nav/Navigation.styled";
import { useRouter } from "next/router";
import { Button } from "@/components/Nav/SignButton.styled";
import Link from "next/link";

interface Props {
  id?: number;
  setIsUser?: React.Dispatch<React.SetStateAction<boolean>>;
  page?: string;
}

function Navigation({ id, setIsUser, page = "" }: Props) {
  return (
    <>
      <Backgorund />
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

export default Navigation;

interface AvatarProps {
  id?: number;
  setIsUser?: React.Dispatch<React.SetStateAction<boolean>>;
}

function Avatar({ id, setIsUser }: AvatarProps) {
  const router = useRouter();
  const pathname = router.asPath;
  const type = pathname === "/shared" ? URLS.SHARED_USER : URLS.FOLDER_USER;

  const { state: userData, dispatch } = useReduce<typeof type>(reduceData<typeof type>);
  const handleLoadUser = (e: React.MouseEvent) => {
    dispatch(getData(type, id));
    if (setIsUser) {
      setIsUser(true);
    }
  };

  const avatar = userData ? <Profile {...userData} /> : <SignButton onClick={handleLoadUser}>로그인</SignButton>;

  return <>{avatar}</>;
}
