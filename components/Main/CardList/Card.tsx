import { ButtonStar, CardImg, CardText, H3, WrapperCardImg, WrapperTime } from "@/components/Main/CardList/Card.styled";
import { CardProps } from "@/components/Main/CardList/CardList.type";
import Kebab from "@/components/Main/CardList/Kebab";
import TimeFlow from "@/components/Main/CardList/TimeFlow";
import axiosInstance from "@/lib/axios";
import starImg from "@/public/star.svg";
import selectedStarImg from "@/public/star_selected.svg";
import { formatDate } from "@/utils/filterAndData";
import { getCookie } from "@/utils/getCookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function Card({ id, url, favorite, image_source, title, description, created_at }: CardProps) {
  const router = useRouter();
  const isFolderPage = router.pathname === "/folder";
  const folderId = router.query.folderId ?? null;

  const favoriteLink = () => {
    const accessToken = getCookie("accessToken");
    return axiosInstance.put(`/links/${id}`, { favorite: !favorite }, { headers: { Authorization: accessToken } });
  };

  const queryClient = useQueryClient();
  const linkMutation = useMutation({
    mutationKey: ["linkData", folderId],
    mutationFn: () => favoriteLink(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["linkData", folderId] }),
  });

  const handleFavorite = (e: MouseEvent) => {
    e.preventDefault();
    linkMutation.mutate();
  };

  return (
    <>
      <WrapperCardImg>
        <CardImg src={image_source || "/nofileimg.png"} alt="카드 이미지" />
      </WrapperCardImg>
      <CardText>
        <WrapperTime>
          <TimeFlow createdAt={created_at} />
          {isFolderPage && <Kebab id={id} url={url} />}
        </WrapperTime>
        <H3>{title?.length > 40 ? title.slice(0, 40) + "..." : title}</H3>
        <p>{description?.length > 50 ? description.slice(0, 50) + "..." : description}</p>
        <p>{formatDate(created_at)}</p>
      </CardText>
      <ButtonStar onClick={handleFavorite}>
        <Image src={favorite ? selectedStarImg : starImg} alt="즐겨찾기에 추가하기" />
      </ButtonStar>
    </>
  );
}
