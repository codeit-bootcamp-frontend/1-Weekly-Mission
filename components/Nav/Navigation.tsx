import logoImg from "src/assets/logo.svg";
import Logo from "./Logo";
import { reduceData, useReduce } from "src/hooks/useData";
import { useLocation } from "react-router";
import { getData } from "src/utils/getData";
import { URLS } from "src/utils/getData.type";
import Profile from "src/components/Nav/Profile";
import SignButton from "src/components/Nav/SignButton";
import { Backgorund, Nav } from "src/components/Nav/Navigation.styled";

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
        <Logo src={logoImg} alt="링크브러리 홈화면으로 이동" />
        <Avatar id={id} setIsUser={setIsUser} />
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
  const { pathname } = useLocation();
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
