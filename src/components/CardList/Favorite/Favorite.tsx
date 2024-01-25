/* Card 컴포넌트에 들어갈 StarButton 컴포넌트*/

import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { updateCardFavorite } from "@/api/getCardCRUDApi";

import styles from "./Favorite.module.scss";

interface FavoriteProps {
  cardId: string;
  isFilled: boolean;
}

export default function Favorite({ cardId, isFilled }: FavoriteProps) {
  const queryClient = useQueryClient();
  const [fakeFilled, setFakeFilled] = useState(isFilled);

  const { mutate } = useMutation({
    onMutate: () => setFakeFilled(!fakeFilled),
    mutationFn: () => updateCardFavorite(cardId, !isFilled),
    onSettled: () => {
      setFakeFilled(isFilled);
      queryClient.invalidateQueries({ queryKey: ["card-list"] });
    },
  });

  const handleStarButton = () => {
    mutate();
  };

  return (
    <>
      <button className={styles["star-button"]} onClick={handleStarButton}>
        {fakeFilled ? (
          <Image
            src="/icons/filled-start-icon.svg"
            width={34}
            height={34}
            alt="filled"
          />
        ) : (
          <Image
            src="/icons/no-filled-star-icon.svg"
            width={34}
            height={34}
            alt="not filled"
          />
        )}
      </button>
    </>
  );
}
