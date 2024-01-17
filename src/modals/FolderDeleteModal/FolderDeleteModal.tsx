import { useRouter } from "next/router";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import { deleteFolder } from "@/api/getFolderCRUDApi";
import useToast from "@/hooks/useToast";
import ModalCreator from "@/modals/ModalCreator";

import styles from "./FolderDeleteModal.module.scss";
import { useModalStore } from "@/store/useModalStore";

interface FolderDeleteModalProps {
  folderId: string;
  folderTitle: string;
}

export default function FolderDeleteModal({
  folderId,
  folderTitle,
}: FolderDeleteModalProps) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const hideModal = useModalStore((state) => state.hideModal);

  const { mutate: deleteFolderMutation } = useMutation({
    mutationFn: (folderId: string) => deleteFolder(folderId),
    onError: () => {
      useToast(false, "폴더 삭제에 실패했어요!");
    },
    onSuccess: () => {
      useToast(true, "폴더가 삭제되었어요!");
      queryClient.invalidateQueries({ queryKey: ["folder-list"] });
      hideModal();
      router.push("/folders");
    },
  });

  const clickDeletefolderModal = () => {
    if (folderId) deleteFolderMutation(folderId);
    else return;
  };

  return (
    <ModalCreator>
      <h2 className={styles["modal-title"]}>폴더 삭제</h2>
      <p className={styles["modal-desc"]}>{folderTitle}</p>
      <button
        onClick={clickDeletefolderModal}
        className={styles["modal-button"]}
      >
        삭제하기
      </button>
    </ModalCreator>
  );
}
