import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import { getSharedUser } from "@/api/getUser";

import styles from "./SharedHeader.module.scss";

interface SharedHeaderProps {
  userId: string;
  folderTitle?: string;
}

export default function SharedHeader({
  userId,
  folderTitle,
}: SharedHeaderProps) {
  const { data: sharedUserData } = useQuery({
    queryKey: ["shared-user"],
    queryFn: () => getSharedUser(userId),
    enabled: !!userId,
    retry: 3,
  });

  console.log(sharedUserData);

  return (
    <div className={styles["header-container"]}>
      <Image
        src={sharedUserData?.image_source || "/icons/no-img-card.svg"}
        alt=""
        width={60}
        height={60}
      />
      <p>{sharedUserData?.name ?? "익명이"}</p>
      <h3>{folderTitle}</h3>
    </div>
  );
}
