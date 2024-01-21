/* 폴더 공유 모달
TODO - 카톡, 페북 공유 기능 구현할 것
TODO - 링크 복사 제대로 고칠 것
*/

import Image from "next/image";
import { useRouter } from "next/router";

import useToast from "@/hooks/useToast";
import ModalCreator from "@/modals/ModalCreator";
import { useUserInfoStore } from "@/store/UserInfo";

import styles from "./FolderShareModal.module.scss";

interface FolderShareModalProps {
  folderId: string;
  folderTitle: string;
}

export default function FolderShareModal({
  folderId,
  folderTitle,
}: FolderShareModalProps) {
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const router = useRouter();
  const handleLinkCopyButton = () => {
    // TODO - 배포 후 링크 수정할 것.
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(
          router &&
            `http://localhost:3000/shared?userId=${userInfo?.id}&folderId=${folderId}`,
        )
        .then(() => useToast(true, "링크가 복사되었습니다!"))
        .catch(() => {
          useToast(false, "다시 시도해주세요!");
        });
    }
  };

  return (
    <ModalCreator>
      <h2 className={styles["modal-title"]}>폴더 공유</h2>
      <p className={styles["modal-desc"]}>{folderTitle}</p>
      <div className={styles["sns-group"]}>
        <button className={styles["sns-button"]}>
          <Image
            src="/icons/kakao-icon.svg"
            alt="카카오"
            width={42}
            height={42}
          />
          <p>카카오톡</p>
        </button>
        <button className={styles["sns-button"]}>
          <Image
            src="/icons/facebook-icon.svg"
            alt="페이스북 공유"
            width={42}
            height={42}
          />
          <p>페이스북</p>
        </button>
        <button className={styles["sns-button"]} onClick={handleLinkCopyButton}>
          <Image
            src="/icons/link-icon.svg"
            alt="링크 공유"
            width={42}
            height={42}
          />
          <p>링크 복사</p>
        </button>
      </div>
    </ModalCreator>
  );
}
