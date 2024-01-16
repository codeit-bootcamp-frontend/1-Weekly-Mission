import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import ModalCreator from "@/modals/ModalCreator";
import { deleteFolder } from "@/api/getFolderCRUDApi";

import styles from "./FolderDeleteModal.module.scss";
import useToast from "@/hooks/useToast";

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
      useToast(false, "폴더 삭제에 실패했어요!");
    },
    onSuccess: () => {
      useToast(true, "폴더가 삭제되었어요!");
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
