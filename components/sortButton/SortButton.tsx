import React from "react";
import styles from "./sortButton.module.css";

interface SortButtonProps {
  isClicked: boolean;
  text: string;
  onClick: () => void;
}

export default function SortButton({
  isClicked = false,
  text,
  onClick,
}: SortButtonProps) {
  return (
    <button
      type="submit"
      className={isClicked ? styles.clicked : styles.sortButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
