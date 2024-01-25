/* 링크 추가 모달
TODO - 디자인 수정할 것
TODO - 이미 추가된 폴더는 어떻게 표시할지 고민할 것
*/

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { createCard } from "@/api/getCardCRUDApi";
import useToast from "@/hooks/useToast";
import ModalCreator from "@/modals/ModalCreator";
import { useFolderListStore } from "@/store/FolderLilstStore";
import { useModalStore } from "@/store/ModalStore";

import styles from "./LinkAddModal.module.scss";

interface ModalProps {
  link: string;
}

export default function LinkAddModal({ link }: ModalProps) {
  const { register, getValues } = useForm({
    mode: "onBlur",
  });
  const folderList = useFolderListStore((state) => state.folderList);
  const hideModal = useModalStore((state) => state.hideModal);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: { url: string; folderId: string }) =>
      createCard(data.url, data.folderId),
    onError: () => {
      useToast(false, "링크 추가에 실패했어요!");
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["card-list"] }),
  });

  const handleSubmitButton = () => {
    if (folderList) {
      folderList.forEach((folder) => {
        if ("id" in folder)
          if (getValues(`id.${folder.id}`) && folder.id)
            mutate({ url: link, folderId: String(folder.id) });
      });
    }
    hideModal();
  };

  return (
    <ModalCreator>
      <h2 className={styles["modal-title"]}>폴더에 추가</h2>
      <p className={styles["modal-desc"]}>{link}</p>
      {folderList && (
        <div>
          {folderList.map((folder) => {
            if ("id" in folder) {
              return (
                <div className={styles["folder-checkbox"]} key={folder.id ?? 0}>
                  <input
                    type="checkbox"
                    {...register(`id.${folder.id}`)}
                    key={folder.id}
                  />
                  {folder.name} {folder.link_count} 개 링크
                </div>
              );
            }
          })}
        </div>
      )}
      <button onClick={handleSubmitButton} className={styles["modal-button"]}>
        추가하기
      </button>
    </ModalCreator>
  );
}
