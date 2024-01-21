/* 로그인 된 경우 Nav의 profile 을 누르면 나오는 드롭다운 */

import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { removeCookie } from "@/utils/manageCookie";
import { useUserInfoStore } from "@/store/UserInfo";

import styles from "./Dropdown.module.scss";

export default function Dropdown() {
  const router = useRouter();
  const deleteUser = useUserInfoStore((state) => state.deleteUser);
  const queryClient = useQueryClient();

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
    </div>
  );
}
