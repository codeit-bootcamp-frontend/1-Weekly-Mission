import classNames from "classnames";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import styles from "./AddLinkModalContent.module.css";

import checkImg from "../../../assets/images/check.svg";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalButton from "../ModalButton/ModalButton";
import Image from "next/image";
import fetcher from "@/lib/axios";
import { useSetFolderId } from "@/contexts/UserContext";
import { UserFolders } from "@/@types/folder.types";

interface Props {
  inputValue: string;
  folderListData?: UserFolders[];
  onClose?: () => void;
}

function AddLinkModalContent({ inputValue, folderListData, onClose }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const setFolderId = useSetFolderId();
  const [selectedFolder, setSelectedFolder] = useState<UserFolders | null>(
    null
  );

  const addLinkMutation = useMutation({
    mutationFn: async (newLink: { url: string; folderId: number }) => {
      const response = await fetcher<UserFolders[]>({
        url: `/links`,
        method: "post",
        data: newLink,
      });
      return response.data;
    },
    onSuccess: () => {
      if (selectedFolder) {
        const folderId = selectedFolder.id;
        setFolderId(folderId);
        router.push(`/folder/${folderId}`);

        queryClient.invalidateQueries({ queryKey: ["links"] });
        queryClient.invalidateQueries({ queryKey: ["folders"] });
      }
    },
    onError: (error) => {
      const errorResponse = (error as any).response;
      window.alert(errorResponse?.data.message);
    },
  });

  const folderListDataArray = folderListData?.sort((a, b) => a.id - b.id);

  const handleCheckClick = (folder: UserFolders) => {
    setSelectedFolder(folder);
  };

  const handleAddLink = () => {
    if (selectedFolder) {
      addLinkMutation.mutate({ url: inputValue, folderId: selectedFolder.id });

      if (onClose) {
        onClose();
      }
    }
  };

  return (
    <div className={styles.addLinkModal}>
      <div className={styles.headerContainer}>
        <ModalTitle>폴더에 추가</ModalTitle>
        <p className={styles.link}>{inputValue}</p>
      </div>
      <div className={styles.optionsContainer}>
        {folderListDataArray?.map((folder) => {
          if (folder.name === "⭐️ 즐겨찾기") return;
          return (
            <div
              className={classNames(
                styles.optionContainer,
                selectedFolder === folder && styles.selected
              )}
              key={folder.id}
              id={folder.name}
              onClick={() => handleCheckClick(folder)}
            >
              <div className={styles.option}>
                <h2>{folder.name}</h2>
                <p>{`${folder?.link_count}개 링크`}</p>
              </div>
              {selectedFolder === folder && (
                <Image src={checkImg} alt="check" />
              )}
            </div>
          );
        })}
      </div>
      <ModalButton color="blue" onClick={handleAddLink}>
        추가하기
      </ModalButton>
    </div>
  );
}

export default AddLinkModalContent;
