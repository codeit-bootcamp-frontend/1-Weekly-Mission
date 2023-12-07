import Profile from "@/components/Nav/Avatar/Profile";
import useData from "@/hooks/useData";
import { URLS } from "@/utils/getData.type";
import { useRouter } from "next/router";

interface AvatarProps {
  id?: number;
}

export default function Avatar({ id }: AvatarProps) {
  const router = useRouter();
  const pathname = router.asPath;
  const type = pathname === "/shared" ? URLS.SHARED_USER : URLS.FOLDER_USER;
  const userData = useData(type, id);

  return <Profile {...userData} />;
}
