/*StarButton 컴포넌트:
  Card 컴포넌트의 좌측 상단 별모양 버튼.
*/

import Image from "next/image";

import styles from "./Favorite.module.scss";

interface FavoriteProps {
  cardId: string;
  isFilled: boolean;
}

export default function Favorite({ cardId, isFilled }: FavoriteProps) {
  const handleStarButton = () => {};

  return (
    <>
      <button className={styles["star-button"]} onClick={handleStarButton}>
        {isFilled ? (
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
