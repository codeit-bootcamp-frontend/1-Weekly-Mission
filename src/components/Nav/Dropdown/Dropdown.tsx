import { useRouter } from "next/router";

import { removeCookie } from "@/utils/manageCookie";

import styles from "./Dropdown.module.scss";
import { useUserInfoStore } from "@/store/UserInfo";

export default function Dropdown() {
  const router = useRouter();
  const deleteUser = useUserInfoStore((state) => state.deleteUser);
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const handleLogout = () => {
    removeCookie("accessToken");
    deleteUser();
    router.push("/");
  };

  return (
    <div className={styles["dropdown"]}>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}
