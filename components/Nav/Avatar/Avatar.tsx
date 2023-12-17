import Profile from "@/components/Nav/Avatar/Profile";
import { PATHS } from "@/constants/path";
import useData from "@/hooks/useData";
import { useRouter } from "next/router";

interface AvatarProps {
  id?: number;
}

export default function Avatar({ id }: AvatarProps) {
  const router = useRouter();
  const pathname = router.pathname;
  const type = pathname === "/shared" ? PATHS.SHARED_USER : PATHS.FOLDER_USER;
  const userData = useData(type, id);

  return <Profile {...userData} />;
}
