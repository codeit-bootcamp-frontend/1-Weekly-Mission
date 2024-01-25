/* 링크 삭제 모달 */

import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCard } from "@/api/getCardCRUDApi";
import useToast from "@/hooks/useToast";
import ModalCreator from "@/modals/ModalCreator";
import { useModalStore } from "@/store/ModalStore";

import styles from "./LinkDeleteModal.module.scss";

interface LinkDeleteModalProps {
  cardId: string;
  cardUrl: string;
}

export default function LinkDeleteModal({
  cardId,
  cardUrl,
}: LinkDeleteModalProps) {
  const router = useRouter();
  const { folderId } = router.query;
  const queryClient = useQueryClient();
  const hideModal = useModalStore((state) => state.hideModal);

  const { mutate } = useMutation({
    mutationFn: () => deleteCard(cardId),
    onError: () => {
      useToast(false, "링크 삭제에 실패했어요!");
    },
    onSuccess: () => {
      useToast(true, "링크를 삭제했어요!");
      hideModal();
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["card-list", folderId] });
    },
  });

  const handleDeleteCard = () => {
    mutate();
  };

  return (
    <ModalCreator>
      <h2 className={styles["modal-title"]}>링크 삭제</h2>
      <p className={styles["modal-desc"]}>{cardUrl}</p>
      <button onClick={handleDeleteCard} className={styles["modal-button"]}>
        삭제하기
      </button>
    </ModalCreator>
  );
}
