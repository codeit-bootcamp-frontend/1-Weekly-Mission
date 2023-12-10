import { useRouter } from "next/router";
import { useState } from "react";
import { shareKakaoLink } from "src/utils/shareKakaoLink";

type Return = {
  modalTitle: string;
  modalSubTitle: string;
  modalButtonContent: string;
  isModalOpen: boolean;
  showModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  showShareKakao: () => void;
  showShareFacebook: () => void;
  showShareLinkCopy: () => void;
};

export const useModal = (folderName: string): Return => {
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubTitle, setModalSubTitle] = useState("");
  const [modalButtonContent, setModalButtonContent] = useState("");
  const [isModalOpen, setModalIsOpen] = useState(false);
  const { asPath } = useRouter();

  const showModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonName = e.currentTarget.value;
    const url = e.currentTarget.id;

    switch (buttonName) {
      case "add":
        setModalTitle("폴더에 추가");
        setModalButtonContent("추가하기");
        break;
      case "addFolder":
        setModalTitle("폴더 추가");
        setModalButtonContent("추가하기");
        break;
      case "share":
        setModalTitle("폴더 공유");
        setModalSubTitle(folderName);
        break;
      case "edit":
        setModalTitle("폴더 이름 변경");
        setModalButtonContent("변경하기");
        break;
      case "delete":
        setModalTitle("폴더 삭제");
        setModalSubTitle(folderName);
        setModalButtonContent("삭제하기");
        break;
      case "linkDelete":
        setModalTitle("링크 삭제");
        setModalSubTitle(url);
        setModalButtonContent("삭제하기");
        break;
      default:
        setModalTitle("");
        setModalSubTitle("");
        break;
    }
    setModalIsOpen(!isModalOpen);
  };

  const showShareKakao = () => shareKakaoLink(window.location.href, asPath);

  const showShareFacebook = () => {
    window.open(`http://www.facebook.com/sharer.php?u=${window.location.href}`);
  };

  const showShareLinkCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert("주소가 복사 되었습니다!");
  };

  return {
    modalTitle,
    modalSubTitle,
    modalButtonContent,
    showModal,
    isModalOpen,
    showShareFacebook,
    showShareKakao,
    showShareLinkCopy,
  };
};
