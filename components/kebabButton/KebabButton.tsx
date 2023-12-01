import React from "react";
import styles from "./kebabButton.module.css";
import kebabIcon from "@/public/icons/kebab.svg";
import Popover from "../popover/Popover";
import { FolderName } from "../../types/types";
import Image from "next/image";

interface KebabButtonProps {
  onClick: () => void;
  isPopoverOpen: boolean;
  url: string;
  folders: FolderName[];
}

export default function KebabButton({
  onClick,
  isPopoverOpen,
  url,
  folders,
}: KebabButtonProps) {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button} onClick={onClick}>
        <Image
          src={kebabIcon}
          alt="kebab-icon"
          className={styles.icon}
          width={24}
          height={24}
        />
      </button>
      {isPopoverOpen && <Popover url={url} folders={folders} />}
    </div>
  );
}
