import { useRouter } from "next/router";

import { removeCookie } from "@/utils/manageCookie";

import styles from "./Dropdown.module.scss";
import { useUserInfoStore } from "@/store/UserInfo";
import { useQueryClient } from "@tanstack/react-query";

export default function Dropdown() {
  const router = useRouter();
  const deleteUser = useUserInfoStore((state) => state.deleteUser);
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const queryClient = useQueryClient();

  const handleLogout = () => {
    removeCookie("accessToken");
    deleteUser();
    queryClient.invalidateQueries("user");
    console.log(userInfo);
    router.push("/");
  };

  return (
    <div className={styles["dropdown"]}>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}
