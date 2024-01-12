import styles from "./header.module.css";
import Image from "next/image";
import { User } from "@/types/types";

interface HeaderProps {
  folderName: string;
  user: User[];
}

export default function Header({ folderName, user }: HeaderProps) {
  const name = user?.length > 0 ? user[0].name : "";
  return (
    <header className={styles.header}>
      <div className={styles.userInfoBox}>
        {user?.map((item) => (
          <Image
            key={item.id}
            src={item.image_source}
            alt="profile"
            className={styles.profileImage}
            width={24}
            height={24}
          />
        ))}
        <span className={styles.userName}>{name}</span>
      </div>
      <span className={styles.folderName}>{folderName}</span>
    </header>
  );
}
