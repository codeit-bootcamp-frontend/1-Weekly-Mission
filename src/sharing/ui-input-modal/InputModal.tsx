import styles from "./InputModal.module.scss";
import classNames from "classnames/bind";
import {
  ChangeEventHandler,
  Dispatch,
  KeyboardEventHandler,
  MouseEventHandler,
  SetStateAction,
} from "react";
import { Input } from "@/src/sharing/ui-input";
import { Modal } from "@/src/sharing/ui-modal";
import { ModalContentBox } from "@/src/sharing/ui-modal-content-box";
import { ModalContentButton } from "@/src/sharing/ui-modal-content-button";
import { ModalContentTitle } from "@/src/sharing/ui-modal-content-title";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetcher from "../util/axiosInstance";
import { Return_folder, SelectedFolderId } from "@/src/folder/type";
const cx = classNames.bind(styles);

type InputModalProps = {
  isOpen: boolean;
  title: string;
  placeholder: string;
  buttonText: string;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  setInputValue: Dispatch<SetStateAction<string>>;
  selectedFolderId?: SelectedFolderId;
};

export const InputModal = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  onCloseClick,
  onKeyDown,
  value,
  onChange,
  setInputValue,
  selectedFolderId,
}: InputModalProps) => {
  const queryClient = useQueryClient();

  const folderMutation = useMutation({
    mutationFn: (type: "add" | "edit") => {
      const url = type === "add" ? "/folders" : `/folders/${selectedFolderId}`;
      return fetcher<Return_folder>({
        url,
        method: type === "add" ? "POST" : "PUT",
        data: { name: value },
      });
    },
    onSuccess: (data) => {
      if (data.status === 201) {
        queryClient.invalidateQueries({ queryKey: ["folders"] });
      }
      setInputValue("");
    },
  });

  const handleClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = (
    e
  ) => {
    onCloseClick(e);
    const mutationType = title.includes("폴더 추가") ? "add" : "edit";
    folderMutation.mutate(mutationType);
  };

  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={<ModalContentTitle>{title}</ModalContentTitle>}
        content={
          <div className={cx("modal-content")}>
            <Input
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
            <ModalContentButton onClick={handleClick}>
              {buttonText}
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
