import { useRouter } from "next/router";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { getFolderList } from "@/api/getFolderCRUDApi";
import { createCard } from "@/api/getCardCRUDApi";
import useToast from "@/hooks/useToast";
import ModalCreator from "@/modals/ModalCreator";

import styles from "./LinkAddModal.module.scss";

interface ModalProps {
  link: string;
  onBlur: () => void;
}

export default function LinkAddModal({ link, onBlur }: ModalProps) {
  const { register, getValues, handleSubmit, formState } = useForm({
    mode: "onBlur",
  });

  const { data: folderList } = useQuery({
    queryKey: ["folder-list"],
    queryFn: () => getFolderList(),
    staleTime: 1000 * 30,
  });
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: { url: string; folderId: string }) =>
      createCard(data.url, data.folderId),
    onError: () => {
      useToast(false, "링크 추가에 실패했어요!");
    },
    onSuccess: () => queryClient.invalidateQueries(["card-list"]),
  });
  const router = useRouter();

  const handleSubmitButton = () => {
    if (folderList) {
      folderList.forEach((folder) => {
        if (getValues(`id.${folder.id}`) && folder.id)
          mutate({ url: link, folderId: String(folder.id) });
      });
    }
    onBlur();
    router.push("/folders");
  };

  return (
    <ModalCreator>
      <div className={styles["modal-content"]}>
        <button className={styles["close-button"]} onClick={onBlur}>
          x
        </button>
        <h2 className={styles["modal-title"]}>폴더에 추가</h2>
        <p className={styles["modal-desc"]}>{link}</p>
        {folderList && (
          <div>
            {folderList.map((folder) => {
              if (folder) {
                return (
                  <div
                    className={styles["folder-checkbox"]}
                    key={folder.id ?? 0}
                  >
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
      </div>
    </ModalCreator>
  );
}
