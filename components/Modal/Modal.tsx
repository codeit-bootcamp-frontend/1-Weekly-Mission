import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useEffect, useRef, useState } from "react";
import imgCheck from "@/public/check.svg";
import imgClose from "@/public/close.svg";
import imgKakao from "@/public/kakao.svg";
import imgFB from "@/public/modalfacebook.svg";
import imgLink from "@/public/modallink.svg";
import ModalFrame from "@/components/Modal/ModalFrame";
import { FolderData } from "@/utils/getData.type";
import { useRouter } from "next/router";
import Image from "next/image";
import { ButtonClose, ButtonSubmit, Contents, CopyText, InputSubmit, List, SnsWrapper, Text, WrapperCopy } from "@/components/Modal/Modal.styled";
import ModalPortal from "@/components/Modal/ModalPortal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { getCookie } from "@/utils/getCookie";

interface MakeModalProps {
  title?: string;
  type?: string;
  data?: {};
  setModal: React.Dispatch<React.SetStateAction<React.ReactElement | null>>;
}

export const makeModal = ({ title, type, data, setModal }: MakeModalProps) => {
  switch (type) {
    case "폴더 추가":
      return <Modal modalName="폴더 추가" placeholder="폴더 이름을 입력해주세요." buttonText="추가하기" setModal={setModal} />;

    case "공유":
      return <Modal modalName="폴더 공유" title={title} share setModal={setModal} />;

    case "이름 변경":
      return <Modal modalName="폴더 이름 변경" placeholder="변경할 이름을 입력해주세요." buttonText="변경하기" setModal={setModal} />;

    case "삭제":
      return <Modal modalName="폴더 삭제" title={title} buttonText="삭제하기" buttonColor="red" setModal={setModal} />;

    case "삭제하기":
      return <Modal modalName="링크 삭제" title={title} buttonText="삭제하기" setModal={setModal} />;

    case "추가하기":
      return <Modal modalName="폴더에 추가" title={title} buttonText="추가하기" add data={data} setModal={setModal} />;

    case "폴더에 추가":
      return <Modal modalName="폴더에 추가" title={title} buttonText="추가하기" add data={data} setModal={setModal} />;
    default:
      return <div>다시 시도해주십시오.</div>;
  }
};

interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<React.ReactElement | null>>;
  modalName: string;
  title?: string;
  placeholder?: string;
  buttonColor?: string;
  buttonText?: string;
  share?: boolean;
  add?: boolean;
  data?: {};
}

export function Modal({ title, modalName, placeholder, buttonColor, buttonText, share, add, data, setModal }: ModalProps) {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const [selectedFolderId, setSelectedFolderId] = useState(0);

  const handleClose = () => {
    setModal(null);
  };

  const postLink = () => {
    const accessToken = getCookie("accessToken");
    return axiosInstance.post("/links", { url: title, folderId: selectedFolderId }, { headers: { Authorization: accessToken } });
  };

  const postFolder = () => {
    const accessToken = getCookie("accessToken");
    return axiosInstance.post("/folders", { name: value }, { headers: { Authorization: accessToken } });
  };

  const router = useRouter();
  const folderId = router.query.folderId ?? null;

  const putFolder = () => {
    const accessToken = getCookie("accessToken");
    return axiosInstance.put(`/folders/${folderId}`, { name: value }, { headers: { Authorization: accessToken } });
  };

  const deleteFolder = () => {
    const accessToken = getCookie("accessToken");
    return axiosInstance.delete(`/folders/${folderId}`, { headers: { Authorization: accessToken } });
  };

  const queryClient = useQueryClient();

  const linkMutation = useMutation({
    mutationKey: ["linkData", selectedFolderId],
    mutationFn: () => postLink(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["linkData"] });
      handleClose();
    },
  });

  const folderMutation = useMutation({
    mutationKey: ["folderData"],
    mutationFn: (method: "post" | "put" | "delete") => (method === "post" ? postFolder() : method === "put" ? putFolder() : deleteFolder()),
    onSuccess: (data) => {
      handleClose();
      if (!data.data) {
        router.push("/folder");
        return;
      }
      router.push(`/folder?folderId=${data.data[0].id}`);
      queryClient.invalidateQueries({ queryKey: ["folderData"] });
    },
  });

  const handleMutate = (e: MouseEvent) => {
    e.preventDefault();
    if (add && selectedFolderId) {
      linkMutation.mutate();
      return;
    }
    if (modalName === "폴더 추가" && value) {
      folderMutation.mutate("post");
      return;
    }
    if (modalName === "폴더 이름 변경" && value) {
      folderMutation.mutate("put");
      return;
    }
    if (modalName === "폴더 삭제") {
      folderMutation.mutate("delete");
      return;
    }
  };

  return (
    <ModalPortal>
      <ModalFrame onClick={handleClose}>
        <Contents>
          <ModalTitle modalName={modalName} title={title as string} />
          {share && <ModalShare />}
          {add && <ModalAdd selectedFolderId={selectedFolderId} setSelectedFolderId={setSelectedFolderId} data={data as FolderData[]} />}
          {placeholder && <InputSubmit value={value} onChange={handleChange} placeholder={placeholder} />}
          {buttonText && (
            <ButtonSubmit onClick={handleMutate} color={buttonColor}>
              {buttonText}
            </ButtonSubmit>
          )}
          <ModalCloseButton handleClick={handleClose} />
        </Contents>
      </ModalFrame>
    </ModalPortal>
  );
}

interface IModalTitle {
  modalName: string;
  title: string;
}

function ModalTitle({ modalName, title }: IModalTitle) {
  return (
    <Text>
      <h1>{modalName}</h1>
      {title && <p>{title}</p>}
    </Text>
  );
}

declare global {
  interface Window {
    Kakao: any;
  }
}

function ModalShare() {
  const copyResult = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const folderId = router.query["folderId"] as string;
  const sharedLink = encodeURIComponent(`linkbrary.com/shared?user=1&folder=${folderId}}`);

  const shareToKakaoTalk = () => {
    if (window.Kakao === undefined) {
      return;
    }

    const kakao = window.Kakao;
    const KAKAO_SHARE_KEY = "370ed21f60e01fcaad0dd0e0e42f6859";

    if (!kakao.isInitialized()) {
      kakao.init(KAKAO_SHARE_KEY);
    }

    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkabrary",
        description: "세상의 모든 링크를 저장하세요.",
        imageUrl: "",
        link: {
          mobileWebUrl: "카카오공유하기 시 클릭 후 이동 경로",
          webUrl: "카카오공유하기 시 클릭 후 이동 경로",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "카카오공유하기 시 클릭 후 이동 경로",
            webUrl: "카카오공유하기 시 클릭 후 이동 경로",
          },
        },
      ],
    });
  };

  const shareToFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  const shareToClipboard = () => {
    navigator.clipboard.writeText(sharedLink);
    if (!copyResult.current?.classList.contains("active")) {
      copyResult.current?.classList.add("active");
      setTimeout(() => copyResult.current?.classList.remove("active"), 1500);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <SnsWrapper>
      <Sns src={imgKakao} onClick={shareToKakaoTalk} text="카카오톡" alt="카카오톡으로 공유하기" />
      <Sns src={imgFB} onClick={shareToFacebook} text="페이스북" alt="페이스북으로 공유하기" />
      <Sns src={imgLink} onClick={shareToClipboard} text="링크 복사" alt="링크 복사하기" />
      <CopyResult forwardRef={copyResult} />
    </SnsWrapper>
  );
}

interface Isns {
  src: string;
  alt: string;
  text: string;
  onClick: () => void;
}

export function Sns({ src, alt, text, onClick }: Isns) {
  return (
    <button onClick={onClick}>
      <Image width={40} height={40} src={src} alt={alt} />
      <p>{text}</p>
    </button>
  );
}

interface ICopyResult {
  forwardRef: React.RefObject<HTMLDivElement>;
}

function CopyResult({ forwardRef }: ICopyResult) {
  return (
    <WrapperCopy ref={forwardRef}>
      <CopyText>
        클립보드에 복사되었습니다!
        <br />
        원하는 곳에 붙여넣기 해주세요.
      </CopyText>
    </WrapperCopy>
  );
}

type TmodalAdd = { data: FolderData[]; selectedFolderId: number; setSelectedFolderId: Dispatch<SetStateAction<number>> };

function ModalAdd({ data, selectedFolderId, setSelectedFolderId }: TmodalAdd) {
  return (
    <List>
      {data?.map((value) => (
        <li key={value.id}>
          <button
            className={selectedFolderId === value.id ? "active" : ""}
            onClick={(e) => (e.currentTarget.blur(), setSelectedFolderId((prev) => (prev === value.id ? 0 : value.id)))}
          >
            <h2>{value.name}</h2>
            <p>{value.link_count}개 링크</p>
            <Image src={imgCheck} alt={`${value.name} 폴더에 추가합니다.`} />
          </button>
        </li>
      ))}
    </List>
  );
}

type TmodalClose = { handleClick: (event: React.MouseEvent) => void };

function ModalCloseButton({ handleClick }: TmodalClose) {
  return (
    <ButtonClose onClick={handleClick}>
      <Image src={imgClose} alt="현재 띄워진 창을 닫는 버튼" />
    </ButtonClose>
  );
}
