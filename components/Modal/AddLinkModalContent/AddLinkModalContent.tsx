import { useState } from "react";
import classNames from "classnames";

import styles from "./AddLinkModalContent.module.css";

import checkImg from "../../../assets/images/check.svg";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalButton from "../ModalButton/ModalButton";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetcher from "@/lib/axios";

interface Props {
  inputValue: string;
  folderListData?: UserFolders[];
}

function AddLinkModalContent({ inputValue, folderListData }: Props) {
  const queryClient = useQueryClient();
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
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });

  const folderListDataArray = folderListData?.sort((a, b) => a.id - b.id);

  const handleCheckClick = (folder: UserFolders) => {
    setSelectedFolder(folder);
  };

  const handleAddLink = () => {
    if (selectedFolder) {
      // 선택된 폴더와 입력된 링크 정보를 이용해 새로운 링크를 추가합니다.
      addLinkMutation.mutate({ url: inputValue, folderId: selectedFolder.id });
    }
  };

  return (
    <div className={styles.addLinkModal}>
      <div className={styles.headerContainer}>
        <ModalTitle>폴더에 추가</ModalTitle>
        <p className={styles.link}>{inputValue}</p>
      </div>
      <div className={styles.optionsContainer}>
        {folderListDataArray?.map((folder) => (
          <div
            className={classNames(
              styles.optionContainer,
              selectedFolder === folder && styles.selected
            )}
            key={folder.name}
            id={folder.name}
            onClick={() => handleCheckClick(folder)}
          >
            <div className={styles.option}>
              <h2>{folder.name}</h2>
              <p>{`${folder?.link_count}개 링크`}</p>
            </div>
            {selectedFolder === folder && <Image src={checkImg} alt="check" />}
          </div>
        ))}
      </div>
      <ModalButton color="blue" onClick={handleAddLink}>
        추가하기
      </ModalButton>
    </div>
  );
}

export default AddLinkModalContent;
