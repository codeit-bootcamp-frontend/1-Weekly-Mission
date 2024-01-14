import fetcher from "@/apis/instance";
import styles from "../Card.module.css";
import Button from "@/components/Button/Button";
import { accessTokenAtom } from "@/jotai/atomStation";
import ModalHeader from "@/modals/ModalHeader/ModalHeader";
import { UseToggle } from "@/types/client.type";
import { Link } from "@/types/server.type";
import unifyURL from "@/util/unifyURL";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { MouseEvent } from "react";
import AddLinkModal from "@/modals/AddLink";
import ModalWrapper from "@/modals/ModalWrapper/ModalWrapper";

const CardModal = ({
  card,
  deleteButton,
  addButton,
}: {
  card: Link;
  deleteButton: UseToggle;
  addButton: UseToggle;
}) => {
  const accessToken = useAtomValue(accessTokenAtom);

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (link_ID: number) =>
      fetcher({ method: "delete", url: `/links/${link_ID}`, headers: { Authorization: accessToken } }),
    onSuccess: (data) => {
      if (data?.status === 204) {
        queryClient.invalidateQueries({ queryKey: ["Links"] });
        queryClient.invalidateQueries({ queryKey: ["Folders"] });
        queryClient.invalidateQueries({ queryKey: ["LinksByFolderId"] });
      }
    },
  });

  if (deleteButton.state)
    return (
      <ModalWrapper handleToggle={deleteButton.handleToggle}>
        <ModalHeader title="링크 삭제" subTitle={unifyURL(card.url)} />
        <Button
          type="button"
          className={styles.deleteButton}
          onClick={(e: MouseEvent) => {
            deleteMutation.mutate(card.id);
            deleteButton.handleToggle(e);
          }}
        >
          삭제하기
        </Button>
      </ModalWrapper>
    );

  if (addButton.state) return <AddLinkModal toggler={addButton.handleToggle} title={card.url} />;
};

export default CardModal;
