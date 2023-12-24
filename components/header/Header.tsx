import styles from "./header.module.css";
import Image from "next/image";
import useUserStore from "@/hooks/useStore";

interface HeaderProps {
  folderName: string;
}

export default function Header({ folderName }: HeaderProps) {
  const { user } = useUserStore();
  const name = user[0]?.name;

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
