import Button from "@/components/Button/Button";
import ModalHeader from "./ModalHeader/ModalHeader";
import { useAtomValue } from "jotai";
import { accessTokenAtom } from "@/jotai/atomStation";
import { Folders } from "@/types/server.type";
import fetcher from "@/apis/instance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styles from "./AddLink.module.css";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import ModalWrapper from "./ModalWrapper/ModalWrapper";
import clsx from "clsx";

const AddLinkModal = ({ toggler, title }: { toggler: (e: MouseEvent) => void; title: string }) => {
  const accessToken = useAtomValue(accessTokenAtom);

  const { data: folderData } = useQuery({
    queryKey: ["Folders"],
    queryFn: () => fetcher<Folders[]>({ method: "get", url: "/folders", headers: { Authorization: accessToken } }),
  });

  const folders = folderData?.data ?? [];

  const [selected, setSelected] = useState(0);

  const queryClient = useQueryClient();

  const AddLinkMutation = useMutation({
    mutationFn: () =>
      fetcher({
        method: "post",
        url: "/links",
        headers: { Authorization: accessToken },
        data: {
          url: title,
          folderId: selected,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Links"] });
      queryClient.invalidateQueries({ queryKey: ["Folders"] });
      queryClient.invalidateQueries({ queryKey: ["LinksByFolderId"] });
    },
  });

  return (
    <ModalWrapper handleToggle={toggler}>
      <ModalHeader title="폴더에 추가" subTitle={title} />
      <ul className={styles.root}>
        {folders.map((list) => {
          const isSelected = selected === list.id;

          return (
            <button
              className={clsx(`${styles.button}`, isSelected && `${styles.selected}`)}
              key={list.id}
              onClick={() => {
                setSelected(list.id);
              }}
            >
              <p className={styles.folderName}>{list.name}</p>
              <span className={styles.linkLength}>{list.link_count}개 링크</span>
              <Image width={14} height={14} className={styles.labelImg} src="/icons/check.svg" alt="" />
            </button>
          );
        })}
      </ul>
      <Button
        onClick={(e: MouseEvent) => {
          AddLinkMutation.mutate();
          toggler(e);
        }}
        type="button"
        className={styles.addLinkButton}
      >
        추가하기
      </Button>
    </ModalWrapper>
  );
};

export default AddLinkModal;
