import React from "react";
import "./sortButton.css";

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
      className={isClicked ? "sort-button clicked" : "sort-button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
