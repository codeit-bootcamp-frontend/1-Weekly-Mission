import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import ModalCreator from "@/modals/ModalCreator";

import styles from "./FolderDeleteModal.module.scss";
import deleteFolder from "@/api/deleteFolder";
import { useRouter } from "next/router";

interface FolderDeleteModalProps {
  folderId: string;
  folderTitle: string;
  onBlur: () => void;
}

export default function FolderDeleteModal({
  folderId,
  folderTitle,
  onBlur,
}: FolderDeleteModalProps) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: deleteFolderMutation } = useMutation({
    mutationFn: (folderId: string) => deleteFolder(folderId),
    onError: () => {
      toast.error("폴더 삭제에 실패했습니다!");
    },
    onSuccess: () => {
      toast.success("폴더가 삭제되었습니다!");
      queryClient.invalidateQueries(["folder-list"]);
      onBlur();
      router.push("/folders");
    },
  });

  const clickDeletefolderModal = () => {
    if (folderId) deleteFolderMutation(folderId);
    else return;
  };

  return (
    <ModalCreator>
      <div className={styles["modal-content"]}>
        <button className={styles["close-button"]} onClick={onBlur}>
          x
        </button>
        <h2 className={styles["modal-title"]}>폴더 삭제</h2>
        <p className={styles["modal-desc"]}>{folderTitle}</p>
        <button
          onClick={clickDeletefolderModal}
          className={styles["modal-button"]}
        >
          삭제하기
        </button>
      </div>
    </ModalCreator>
  );
}
