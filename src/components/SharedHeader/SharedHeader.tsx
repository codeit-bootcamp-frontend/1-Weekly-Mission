/* shared 페이지에서 폴더를 공유한 유저의 프로필을 보여주는 header 컴포넌트 */

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
