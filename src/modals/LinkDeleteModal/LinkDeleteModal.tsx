import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import ModalCreator from "../ModalCreator";
import { deleteCard } from "@/api/getCardCRUDApi";

import styles from "./LinkDeleteModal.module.scss";
import useToast from "@/hooks/useToast";

interface LinkDeleteModalProps {
  cardId: string;
  cardUrl: string;
  onBlur: () => void;
}

export default function LinkDeleteModal({
  cardId,
  cardUrl,
  onBlur,
}: LinkDeleteModalProps) {
  const router = useRouter();
  const { folderId } = router.query;
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => deleteCard(cardId),
    onError: () => {
      useToast(false, "링크 삭제에 실패했어요!");
    },
    onSuccess: () => {
      useToast(true, "링크를 삭제했어요!");
      onBlur();
    },
    onSettled: () => {
      queryClient.invalidateQueries(["card-list"], folderId);
    },
  });

  const handleDeleteCard = () => {
    mutate();
  };

  return (
    <ModalCreator>
      <div className={styles["modal-content"]}>
        <button className={styles["close-button"]} onClick={onBlur}>
          x
        </button>
        <h2 className={styles["modal-title"]}>링크 삭제</h2>
        <p className={styles["modal-desc"]}>{cardUrl}</p>
        <button onClick={handleDeleteCard} className={styles["modal-button"]}>
          삭제하기
        </button>
      </div>
    </ModalCreator>
  );
}
