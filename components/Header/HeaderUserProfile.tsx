import { User } from "@/types/server.type";
import styles from "./HeaderUserProfile.module.css";
import Image from "next/image";

function HeaderUserProfile({ user }: { user: User }) {
  return (
    <div className={styles.profile}>
      <div className={styles.profileImage}>
        {user ? <Image width={28} height={28} src={user.image_source} alt="profile" /> : ""}
      </div>
      {user ? <p className={styles.userProfile}>{user.email}</p> : ""}
    </div>
  );
}

export default HeaderUserProfile;
