import Image from "next/image";
import styles from "./FolderAdd.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetcher from "@/apis/instance";
import useToggle from "@/hooks/useToggle";
import { MouseEvent } from "react";
import ModalWrapper from "@/modals/ModalWrapper/ModalWrapper";
import ModalHeader from "@/modals/ModalHeader/ModalHeader";
import Button from "@/components/Button/Button";
import InputWrapper from "@/components/input/InputWrapper";
import Input from "@/components/input/Input";
import useInput from "@/hooks/useInput";
import { useAtomValue, useSetAtom } from "jotai";
import { accessTokenAtom, folderIdAtom } from "@/jotai/atomStation";
import { Folders } from "@/types/server.type";

const FolderAdd = () => {
  const queryClient = useQueryClient();
  const folderAddButton = useToggle();
  const accessToken = useAtomValue(accessTokenAtom);
  const setFolder_Id = useSetAtom(folderIdAtom);

  const input = useInput({
    inputConfig: { id: "folder", name: "folder", placeholder: "내용 입력" },
  });

  const folderMutation = useMutation({
    mutationFn: () =>
      fetcher<Folders[]>({
        method: "post",
        url: "/folders",
        headers: { Authorization: accessToken },
        data: { name: input.input.value },
      }),
    onSuccess: ({ data: [{ id }] }) => {
      queryClient.invalidateQueries({ queryKey: ["Folders"] });
      input.input.setValue("");
      setFolder_Id(id);
    },
  });

  return (
    <>
      <button
        className={styles.root}
        type="button"
        onClick={(e: MouseEvent) => {
          folderAddButton.handleToggle(e);
        }}
      >
        폴더 추가 <Image width={16} height={16} className={styles.image} src="/icons/add.svg" alt="" />
      </button>

      {folderAddButton.state && (
        <ModalWrapper handleToggle={folderAddButton.handleToggle}>
          <ModalHeader title="폴더 추가" />
          <InputWrapper {...input.wrapper}>
            <Input {...input.input} />
          </InputWrapper>
          <Button
            type="button"
            className={styles.folderAddButton}
            onClick={(e: MouseEvent) => {
              folderMutation.mutate();
              folderAddButton.handleToggle(e);
            }}
          >
            추가하기
          </Button>
        </ModalWrapper>
      )}
    </>
  );
};

export default FolderAdd;
