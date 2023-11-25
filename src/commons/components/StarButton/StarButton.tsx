import { useState } from "react";
import { ReactComponent as NoStar } from "src/assets/images/no-filled-star-icon.svg";
import { ReactComponent as YesStar } from "src/assets/images/filled-start-icon.svg";
import { CardInterface } from "src/types";
import styles from "./StarButton.module.scss";

interface CardProps {
  card: CardInterface;
}

function StarButton({ card }: CardProps) {
  const [isFilled, setIsFilled] = useState(false);
  const handleStarClick = () => {
    setIsFilled(!isFilled);
  };
  return (
    <>
      <button className={styles["star-button"]} onClick={handleStarClick}>
        {isFilled ? <YesStar /> : <NoStar />}
      </button>
    </>
  );
}

export default StarButton;
