import { useRef } from "react";
import kebabImg from "@/public/kebab.svg";
import { Container, PopOver } from "@/components/Main/CardList/Kebab.styled";
import useModal from "@/hooks/useModal";
import { FolderData } from "@/utils/getData.type";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "@/utils/getCookie";
import axiosInstance from "@/lib/axios";

interface Props {
  url: string;
}

export default function Kebab({ url }: Props) {
  const folderQuery = useQuery({
    queryKey: ["folderData"],
    queryFn: async () => {
      const accessToken = getCookie("accessToken");
      const res = await axiosInstance.get("/folders", { headers: { Authorization: accessToken } });
      return res.data;
    },
  });
  const folderData = folderQuery.data ?? [];

  const { modal, dispatch } = useModal();
  const popOver = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    popOver.current?.classList.toggle("active");
    e.preventDefault();
  };
  const handleMouseLeave = () => {
    popOver.current?.classList.remove("active");
  };

  const handleModal = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const type = e.currentTarget.textContent ?? "";
    dispatch({ type, title: url, data: folderData });
  };

  const stop = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Container onClick={stop}>
      <button onClick={handleClick} onMouseLeave={handleMouseLeave}>
        <Image src={kebabImg} alt="즐겨찾기에 추가하기" />
        <PopOver ref={popOver}>
          <p onClickCapture={handleModal}>삭제하기</p>
          <p onClick={handleModal}>폴더에 추가</p>
        </PopOver>
      </button>
      {modal}
    </Container>
  );
}
