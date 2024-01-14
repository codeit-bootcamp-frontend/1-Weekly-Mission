import fetcher from "@/apis/instance";
import styles from "./FolderEdit.module.css";
import Button from "@/components/Button/Button";
import Input from "@/components/input/Input";
import InputWrapper from "@/components/input/InputWrapper";
import ModalHeader from "@/modals/ModalHeader/ModalHeader";
import ModalWrapper from "@/modals/ModalWrapper/ModalWrapper";
import { UseToggle } from "@/types/client.type";
import { MouseEvent, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAtom, useAtomValue } from "jotai";
import { accessTokenAtom, folderIdAtom } from "@/jotai/atomStation";
import useInput from "@/hooks/useInput";
import Image from "next/image";

const FolderModal = ({
  title,
  shareFolder,
  changeFolderName,
  deleteFolder,
}: {
  title: string;
  shareFolder: UseToggle;
  changeFolderName: UseToggle;
  deleteFolder: UseToggle;
}) => {
  const accessToken = useAtomValue(accessTokenAtom);

  const [folder_Id, setFolder_Id] = useAtom(folderIdAtom);

  const changeFolderInput = useInput({
    inputConfig: { id: "folder", name: "folder", placeholder: `${title}` },
  });

  const { Kakao }: any = window;

  const queryClient = useQueryClient();

  const url = "https://linkbrary-sigma.vercel.app";

  useEffect(() => {
    Kakao.init("dfa81690fbc58d64ad3c328ec8bd78a5");

    return () => Kakao.cleanup();
  }, [Kakao]);

  const shareKakao = () => {
    Kakao.Link.sendCustom({
      templateId: 101471,
      templateArgs: {
        folder_Id,
        message: `${title} 폴더를 공유해드립니다 :)`,
      },
    });
  };
  const changeFolderNameMutaiton = useMutation({
    mutationFn: () =>
      fetcher({
        method: "put",
        url: `/folders/${folder_Id}`,
        headers: { Authorization: accessToken },
        data: { name: changeFolderInput.input.value },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Folders"] });
      changeFolderInput.input.setValue("");
    },
  });

  const deleteFolderMutaiton = useMutation({
    mutationFn: () =>
      fetcher({ method: "delete", url: `/folders/${folder_Id}`, headers: { Authorization: accessToken } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Folders"] });
    },
  });

  const shareItems = [
    {
      img: "/icons/share_kakao.png",
      sub: "카카오톡",
      onClick: (e: MouseEvent) => {
        shareKakao();
        shareFolder.handleToggle(e);
      },
    },
    {
      img: "/icons/share_facebook.png",
      sub: "페이스북",
      onClick: (e: MouseEvent) => {
        window.open(`http://www.facebook.com/sharer.php?u=${url}/shared/${folder_Id}`);
        shareFolder.handleToggle(e);
      },
    },
    {
      img: "/icons/share_link.png",
      sub: "링크 복사",
      onClick: (e: MouseEvent) => {
        navigator.clipboard.writeText(`${url}/shared/${folder_Id}`);
        shareFolder.handleToggle(e);
      },
    },
  ];

  if (shareFolder.state)
    return (
      <ModalWrapper handleToggle={shareFolder.handleToggle}>
        <ModalHeader title="공유하기" subTitle={title}></ModalHeader>
        <div className={styles.body}>
          {shareItems.map((item) => {
            return (
              <div className={styles.link} key={item.sub}>
                <button onClick={item.onClick}>
                  <Image width={42} height={42} src={item.img} alt="" />
                </button>
                <p>{item.sub}</p>
              </div>
            );
          })}
        </div>
      </ModalWrapper>
    );

  if (deleteFolder.state)
    return (
      <ModalWrapper handleToggle={deleteFolder.handleToggle}>
        <ModalHeader title="폴더 삭제" subTitle={title} />
        <Button
          type="button"
          className={styles.deleteButton}
          onClick={(e: MouseEvent) => {
            deleteFolderMutaiton.mutate();
            deleteFolder.handleToggle(e);
            setFolder_Id(0);
          }}
        >
          삭제하기
        </Button>
      </ModalWrapper>
    );

  if (changeFolderName.state)
    return (
      <ModalWrapper handleToggle={changeFolderName.handleToggle}>
        <ModalHeader title="폴더 이름 변경" />

        <InputWrapper {...changeFolderInput.wrapper}>
          <Input {...changeFolderInput.input} />
        </InputWrapper>

        <Button
          type="button"
          className={styles.changeButton}
          onClick={(e: MouseEvent) => {
            changeFolderNameMutaiton.mutate();
            changeFolderName.handleToggle(e);
          }}
        >
          변경하기
        </Button>
      </ModalWrapper>
    );
};

export default FolderModal;
