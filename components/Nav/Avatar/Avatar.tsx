import Profile from "@/components/Nav/Avatar/Profile";
import SignButton from "@/components/Nav/Avatar/SignButton";
import { reduceData, useReduce } from "@/hooks/useData";
import { getData } from "@/utils/getData";
import { URLS } from "@/utils/getData.type";
import { useRouter } from "next/router";

interface AvatarProps {
  id?: number;
  setIsUser?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Avatar({ id, setIsUser }: AvatarProps) {
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
