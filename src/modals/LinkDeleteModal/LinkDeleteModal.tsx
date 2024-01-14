import { useMutation, useQueryClient } from "@tanstack/react-query";
import ModalCreator from "../ModalCreator";
import styles from "./LinkDeleteModal.module.scss";
import deleteCard from "@/api/deleteCard";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

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
    onError: (error) => {
      console.log(error);
      toast.error("링크 삭제에 실패했습니다!");
    },
    onSuccess: () => {
      toast.success("링크를 삭제했습니다!");
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
