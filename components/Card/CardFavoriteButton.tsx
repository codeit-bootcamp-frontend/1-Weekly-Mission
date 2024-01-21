import Image from "next/image";

import styles from "./CardItem.module.css";

import starOnImg from "@/assets/images/star-on.svg";
import starOffImg from "@/assets/images/star-off.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetcher from "@/lib/axios";
import { UserFolders } from "@/@types/folder.types";

interface FolderPageCardItemProps {
  isFavorite: boolean;
  linkId: number;
}

function CardFavoriteButton({ isFavorite, linkId }: FolderPageCardItemProps) {
  const queryClient = useQueryClient();

  const toggleFavoriteMutation = useMutation({
    mutationFn: async () => {
      const response = await fetcher<UserFolders[]>({
        url: `/links/${linkId}`,
        method: "put",
        data: { favorite: !isFavorite },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
      queryClient.invalidateQueries({ queryKey: ["links", "all"] });
    },
    onError: (error) => {
      const errorResponse = (error as any).response;
      window.alert(errorResponse?.data.message);
    },
  });

  const handleButtonClick = () => {
    toggleFavoriteMutation.mutate();
  };
  return (
    <button className={styles.bookmarkButton} onClick={handleButtonClick}>
      <Image src={isFavorite ? starOnImg : starOffImg} alt="즐겨찾기 이미지" />
    </button>
  );
}

export default CardFavoriteButton;
