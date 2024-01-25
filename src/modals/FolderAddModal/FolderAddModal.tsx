/* 폴더 추가 모달 */

import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createFolder } from "@/api/getFolderCRUDApi";
import useToast from "@/hooks/useToast";
import ModalCreator from "@/modals/ModalCreator";
import { useModalStore } from "@/store/ModalStore";
import { FolderAddFormType } from "@/types/FormType";

import styles from "./FolderAddModal.module.scss";

export default function FolderAddModal() {
  const { register, handleSubmit, getValues } = useForm<FolderAddFormType>({
    mode: "onBlur",
    defaultValues: {
      name: "",
    },
  });
  const hideModal = useModalStore((state) => state.hideModal);

  const queryClient = useQueryClient();

  const { mutate: createFolderMutation } = useMutation({
    mutationFn: (name: string) => createFolder(name),
    onError: () => {
      useToast(false, "폴더 생성에 실패했어요!");
    },
    onSuccess: () => {
      useToast(true, "폴더 생성에 성공했어요!");
      hideModal();
      queryClient.invalidateQueries({ queryKey: ["folder-list"] });
    },
  });

  const clickSubmitButton: SubmitHandler<FolderAddFormType> = () => {
    const nameValue = getValues("name");
    if (nameValue) {
      createFolderMutation(nameValue);
    } else return;
  };

  return (
    <ModalCreator>
      <h2 className={styles["modal-title"]}>폴더 추가</h2>
      <form onSubmit={handleSubmit(clickSubmitButton)}>
        <input
          id="name"
          className={styles["modal-input"]}
          type="text"
          placeholder="내용 입력"
          {...register("name")}
        />
        <button className={styles["modal-button"]}>추가하기</button>
      </form>
    </ModalCreator>
  );
}
