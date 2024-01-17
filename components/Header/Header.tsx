import { useQuery } from "@tanstack/react-query";
import { accessTokenAtom } from "@/jotai/atomStation";
import { useAtomValue } from "jotai";
import { User } from "@/types/server.type";
import clsx from "clsx";
import styles from "./Header.module.css";
import HeaderUserProfile from "./HeaderUserProfile";
import Logo from "../Logo/Logo";
import LinkButton from "../Button/LinkButton";
import fetcher from "@/apis/instance";

interface Props {
  className?: string;
  position: string;
}

function Header({ className, position }: Props) {
  const accessToken = useAtomValue(accessTokenAtom);

  const userData = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => fetcher<User[]>({ method: "get", url: "/users", headers: { Authorization: accessToken } }),
  });

  const [user] = userData.data?.data ?? [];

  const headerClass = clsx(styles.root, position === "static" ? styles.static : styles.sticky, className);

  return (
    <header className={headerClass}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        {user ? (
          <HeaderUserProfile user={user} />
        ) : (
          <LinkButton className={styles.button} href="/signin" title="signin">
            로그인
          </LinkButton>
        )}
      </div>
    </header>
  );
}

export default Header;
