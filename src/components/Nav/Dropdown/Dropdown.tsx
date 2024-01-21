/* 로그인 된 경우 Nav의 profile 을 누르면 나오는 드롭다운 */

import Link from "next/link";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { removeCookie } from "@/utils/manageCookie";
import { useUserInfoStore } from "@/store/UserInfo";

import styles from "./Dropdown.module.scss";
import { useFolderListStore } from "@/store/FolderLilstStore";

export default function Dropdown() {
  const router = useRouter();
  const deleteUser = useUserInfoStore((state) => state.deleteUser);
  const queryClient = useQueryClient();
  const folderList = useFolderListStore((state) => state.folderList);

  const handleLogout = () => {
    removeCookie("accessToken");
    removeCookie("refreshToken");
    deleteUser();
    queryClient.invalidateQueries({ queryKey: ["user"] });
    router.push("/");
  };

  return (
    <div className={styles["dropdown"]}>
      <button onClick={handleLogout}>로그아웃</button>
      <Link href="/folders">전체</Link>
      {folderList.map((folder) => {
        if ("id" in folder) {
          return (
            <Link href={`/folders/${folder.id}`} key={folder.id}>
              {folder.name}
            </Link>
          );
        }
      })}
    </div>
  );
}
